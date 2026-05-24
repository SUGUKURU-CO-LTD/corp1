# corp1 プロジェクト

**スグクル株式会社（sugu-kuru.co.jp）の企業サイト**です。Next.js 16 ベースのコーポレートサイトで、農業派遣・IT事業を中心とした法人向けサービスを紹介しています。  
このリポジトリでは **GitHub `main` が唯一の正本** で、**本番配信は GCP Cloud Run のみ** を使用します。

## Production Of Record

- Source of truth: `main` branch
- Production domain: `https://sugu-kuru.co.jp`
- Production domain (www): `https://www.sugu-kuru.co.jp`
- Runtime platform: Cloud Run (service: `sugukurucorpsite`)
- Region: `asia-northeast1`
- Artifact Registry repository: `sugukurucorpsite`
- Container image: `website`

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| フレームワーク | Next.js 16.1.1 / React 19.2.3 |
| スタイル | Tailwind CSS 4 |
| アニメーション | Framer Motion |
| UIコンポーネント | Radix UI（アコーディオン、ダイアログ、ドロップダウンなど）|
| 国際化 | next-intl（日本語・インドネシア語・英語）|
| フォント | Noto Sans JP, Shippori Mincho, Inter, JetBrains Mono |

## プロジェクト構成

### ルートレイアウト (`layout.tsx`)
- **フォント**: Google Fonts で4種類のフォントを読み込み
- **メタデータ**: タイトル・説明・OGP・Twitter カード・canonical URL など SEO 設定
- **スキーマ**: `OrganizationSchema`, `WebsiteSchema` で構造化データを出力
- **Google Analytics**: GTM（`G-3X4MLRRVE0`）を読み込み
- **共通レイアウト**: Header / メインコンテンツ / Footer

### トップページ (`page.tsx`)
以下の6つのセクションを順番に表示します。

1. **HeroSection** - ファーストビュー
2. **MissionSection** - ミッション・ビジョン
3. **ServicesSection** - サービス一覧
4. **NumbersSection** - 数値・実績
5. **WhyUsSection** - 選ばれる理由
6. **CTASection** - お問い合わせ案内

## 主要コンポーネントの解説

### Header（ヘッダー）
- **固定ヘッダー** でスクロールしても表示
- **デスクトップ**: ドロップダウンメニュー（Framer Motion でアニメーション）
- **モバイル**: ハンバーガーメニュー
- **ナビゲーション**: ホーム、サービス（農業派遣・農作業受託・有料職業紹介・IT事業）、スグスタ（外部リンク）、会社概要、導入事例、お知らせ、採用情報

### HeroSection（ヒーロー）
- **フルスクリーンヒーロー**
- **背景**: オーロラ風グラデーションと実写真
- **メッセージ**: 3パターンがあり、表示時にランダム選択
- **アニメーション**: パララックス、スクロールプログレスバー、キネティックタイポグラフィ
- **許可証**: 労働者派遣事業許可、有料職業紹介事業許可、特定技能派遣認定を表示

## 国際化（i18n）

- **対応言語**: 日本語（ja）・インドネシア語（id）・英語（en）
- **デフォルト**: 日本語
- **ルーティング**: `next-intl` で `ja` / `id` / `en` の切り替えを管理

## ページ一覧

| パス | 内容 |
|------|------|
| `/` | トップページ |
| `/services` | サービス一覧 |
| `/services/dispatch` | 農業派遣 |
| `/services/contracting` | 農作業受託 |
| `/services/placement` | 有料職業紹介 |
| `/services/it` | IT事業 |
| `/about` | 会社概要 |
| `/cases` | 導入事例 |
| `/journal` | お知らせ |
| `/careers` | 採用情報 |
| `/contact` | お問い合わせ |
| `/sugusta` | スグスタ |
| `/legal` | 利用規約 |
| `/privacy` | プライバシーポリシー |

## 開発の始め方

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deployment

### 1) One-time trigger setup (GitHub main -> Cloud Run)

```bash
./scripts/setup_production_trigger.sh
```

This creates/updates a Cloud Build trigger with:

- repo: `SUGUKURU-CO-LTD/corp1`
- branch pattern: `^main$`
- build config: `cloudbuild.yaml`
- substitutions:
  - `_REGION=asia-northeast1`
  - `_SERVICE_NAME=sugukurucorpsite`
  - `_REPOSITORY_NAME=sugukurucorpsite`
  - `_IMAGE_NAME=website`
  - `_IMAGE_TAG=$COMMIT_SHA`

### 2) Manual production deploy

```bash
./deploy.sh
```

`deploy.sh` computes an immutable image tag from the current git commit SHA and executes the Cloud Build pipeline in `cloudbuild.yaml`.

## Security Baseline

- Do not store API keys/tokens/passwords in Cloud Build trigger substitutions.
- Use Secret Manager for secrets that are actually required by runtime.
- Facebook feed integration uses server-side env vars:
  - `FACEBOOK_PAGE_ID` (default: `61558366208114`)
  - `FACEBOOK_PAGE_ACCESS_TOKEN` (required for live feed)
- Audit trigger substitutions:

```bash
./scripts/audit_build_triggers.sh
```

## Operations Handover

Production runbook is maintained here:

- `docs/PRODUCTION_HANDOVER.md`

## 参考リンク

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub](https://github.com/vercel/next.js)
