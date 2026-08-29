# チーム限定エリア（/team）の IAP・Secret 設定手順 / Team-only Area Setup / Pengaturan Area Khusus Tim

このドキュメントは、`/team` および `/api/team/*`（社内インテリジェンス）を
Google Cloud IAP（Identity-Aware Proxy）で保護し、AgriOps のライブデータを
安全に取得するためのインフラ設定手順です。アプリ側の実装は完了済みで、
ここに記載の **GCP 側設定と環境変数の投入** を行うと有効化されます。

This document describes the GCP-side setup to protect `/team` and `/api/team/*` with IAP and to fetch AgriOps live data securely. The app code is already implemented.

Dokumen ini menjelaskan pengaturan sisi GCP untuk melindungi `/team` dengan IAP dan mengambil data langsung AgriOps dengan aman. Kode aplikasi sudah diimplementasikan.

---

## 1. アーキテクチャ概要 / Architecture / Arsitektur

```
[ブラウザ] → [Google Cloud HTTPS LB] → [IAP] → [Cloud Run: sugukuru-website]
                                          │
                                          ├─ 公開ルート（/、/pricing 等）: IAP 不要（公開）
                                          └─ /team, /api/team/*: IAP 必須

[Cloud Run] → (AGRIOPS_PROXY_URL) → [Public MCP JP Gateway / AgriOps]
                ↑ Secret Manager から注入される URL・トークン
```

- 公開ページ（マーケティング）と社内ページ（intel）は **同一アプリ**。
  保護は IAP（インフラ層）＋ Next.js Proxy（アプリ層）の二重防御。
- Proxy は `X-Goog-IAP-JWT-Assertion` を検証し、未認証は 401 を返す。
  実装: `src/proxy.ts`（Next.js 16 の proxy 規約）/ `src/lib/iap.ts`。

> 重要: IAP は「特定パスだけ」を直接保護できないため、LB のパスマッチで
> `/team`・`/api/team` を別の backend service（IAP 有効）に振り分けるか、
> アプリ全体を IAP 配下に置き、公開ページは middleware/IAP 設定で許可します。
> 推奨は **2つの backend service へパスベースで分割**（下記 3 章）。

---

## 2. 必要な環境変数 / Environment Variables / Variabel Lingkungan

Cloud Run サービスに設定します。秘密値は **Secret Manager** 経由で注入してください。

| 変数 | 必須 | 用途 | 例 |
|------|------|------|-----|
| `IAP_AUDIENCE` | ◯（本番） | IAP JWT の Audience 検証 | `/projects/PROJECT_NUMBER/global/backendServices/BACKEND_ID` |
| `AGRIOPS_PROXY_URL` | 任意 | ライブデータ取得先（未設定ならスナップショットを返す） | `https://gateway.example.com/agri/kagoshima` |
| `AGRIOPS_PROXY_TOKEN` | 任意 | 上記への Bearer トークン | （Secret Manager） |
| `TEAM_DEV_BYPASS` | 任意 | ローカル開発のみ IAP を迂回（本番では絶対に設定しない） | `1` |

挙動:
- `IAP_AUDIENCE` 未設定かつ `NODE_ENV!=production` の場合のみ、ローカル開発で自動バイパス。
- `AGRIOPS_PROXY_URL` 未設定時は、ビルド同梱の検証済みスナップショット
  （`src/data/agri-intel.json`, 取得日 2026-06-04）を返す（`dataMode: "snapshot"`）。
- 設定時はライブ取得し 30 分キャッシュ（`dataMode: "live"`）。

---

## 3. GCP 設定手順 / GCP Setup / Pengaturan GCP

前提: プロジェクトと Cloud Run へのデプロイ済み、`gcloud` 認証済み。

```bash
# 変数
export PROJECT_ID="your-project"
export REGION="asia-northeast1"
export SERVICE="sugukuru-website"

# 0) API 有効化
gcloud services enable iap.googleapis.com compute.googleapis.com \
  run.googleapis.com secretmanager.googleapis.com --project "$PROJECT_ID"
```

### 3-1. OAuth 同意画面・IAP 用クライアント

1. コンソール: 「APIとサービス」→「OAuth 同意画面」を社内（Internal）で構成。
2. IAP を有効化すると、IAP 用 OAuth クライアントが自動作成される。

### 3-2. サーバーレス NEG + HTTPS ロードバランサ

```bash
# Cloud Run を指すサーバーレス NEG
gcloud compute network-endpoint-groups create ${SERVICE}-neg \
  --region=$REGION --network-endpoint-type=serverless \
  --cloud-run-service=$SERVICE --project "$PROJECT_ID"

# backend service（公開用・IAP なし）
gcloud compute backend-services create ${SERVICE}-public \
  --global --project "$PROJECT_ID"
gcloud compute backend-services add-backend ${SERVICE}-public \
  --global --network-endpoint-group=${SERVICE}-neg \
  --network-endpoint-group-region=$REGION --project "$PROJECT_ID"

# backend service（社内用・IAP あり）— 同じ NEG を別 backend で参照
gcloud compute backend-services create ${SERVICE}-team \
  --global --project "$PROJECT_ID"
gcloud compute backend-services add-backend ${SERVICE}-team \
  --global --network-endpoint-group=${SERVICE}-neg \
  --network-endpoint-group-region=$REGION --project "$PROJECT_ID"
```

URL マップでパスを振り分け（`/team`・`/api/team/*` → `-team`、それ以外 → `-public`）:

```bash
gcloud compute url-maps create ${SERVICE}-urlmap \
  --default-service ${SERVICE}-public --project "$PROJECT_ID"

gcloud compute url-maps add-path-matcher ${SERVICE}-urlmap \
  --path-matcher-name team-matcher \
  --default-service ${SERVICE}-public \
  --path-rules="/team=${SERVICE}-team,/team/*=${SERVICE}-team,/api/team/*=${SERVICE}-team" \
  --project "$PROJECT_ID"
```

HTTPS プロキシ・証明書・転送ルールを作成（ドメイン `sugu-kuru.co.jp`）:

```bash
gcloud compute ssl-certificates create ${SERVICE}-cert \
  --domains=sugu-kuru.co.jp --global --project "$PROJECT_ID"
gcloud compute target-https-proxies create ${SERVICE}-proxy \
  --url-map=${SERVICE}-urlmap --ssl-certificates=${SERVICE}-cert --project "$PROJECT_ID"
gcloud compute forwarding-rules create ${SERVICE}-fr \
  --global --target-https-proxy=${SERVICE}-proxy --ports=443 --project "$PROJECT_ID"
```

### 3-3. IAP を社内 backend に有効化 + アクセス権

```bash
# 社内 backend のみ IAP 有効化
gcloud iap web enable --resource-type=backend-services \
  --service=${SERVICE}-team --project "$PROJECT_ID"

# アクセスできる社内メンバー/グループを付与
gcloud iap web add-iam-policy-binding \
  --resource-type=backend-services --service=${SERVICE}-team \
  --member="group:dev@sugu-kuru.co.jp" \
  --role="roles/iap.httpsResourceAccessor" --project "$PROJECT_ID"
```

### 3-4. IAP_AUDIENCE の取得

```bash
PROJECT_NUMBER=$(gcloud projects describe "$PROJECT_ID" --format='value(projectNumber)')
BACKEND_ID=$(gcloud compute backend-services describe ${SERVICE}-team \
  --global --format='value(id)' --project "$PROJECT_ID")
echo "IAP_AUDIENCE=/projects/${PROJECT_NUMBER}/global/backendServices/${BACKEND_ID}"
```

---

## 4. Secret Manager と Cloud Run への注入 / Secrets / Rahasia

```bash
# ライブ取得トークン（必要な場合）
printf 'YOUR_TOKEN' | gcloud secrets create agriops-proxy-token \
  --data-file=- --project "$PROJECT_ID"

# Cloud Run に環境変数 + Secret を設定
gcloud run services update $SERVICE --region $REGION --project "$PROJECT_ID" \
  --update-env-vars "IAP_AUDIENCE=/projects/${PROJECT_NUMBER}/global/backendServices/${BACKEND_ID}" \
  --update-env-vars "AGRIOPS_PROXY_URL=https://gateway.example.com/agri/kagoshima" \
  --update-secrets "AGRIOPS_PROXY_TOKEN=agriops-proxy-token:latest"
```

Cloud Run サービスアカウントに `roles/secretmanager.secretAccessor` を付与してください。

---

## 5. 検証 / Verification / Verifikasi

1. 公開ページ（`https://sugu-kuru.co.jp/`）は誰でも閲覧可。
2. `https://sugu-kuru.co.jp/team` は IAP のログインを要求し、許可ユーザーのみ閲覧可。
3. 未認証で `https://sugu-kuru.co.jp/api/team/agri` を叩くと 401。
4. 認証後、ダッシュボード右上のバッジが `AGRIOPS_PROXY_URL` 設定時は「ライブ」、
   未設定時は「スナップショット」と表示される。

ローカル開発:

```bash
# IAP 未設定でも /team を確認できる（開発のみ）
TEAM_DEV_BYPASS=1 npm run dev
```

---

## 6. セキュリティ注意 / Security Notes / Catatan Keamanan

- 秘密値（トークン等）はコードに直書きしない。必ず Secret Manager から注入する。
- `TEAM_DEV_BYPASS` を本番環境に設定しない。
- Proxy（`src/proxy.ts`）は IAP JWT の署名・issuer・audience を検証する
  二重防御であり、IAP 設定の代替ではない。両方を有効化すること。
- `/team` は `robots: noindex,nofollow`（`src/app/team/layout.tsx`）。
