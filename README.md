# corp1 プロジェクト

**スグクル株式会社（sugu-kuru.co.jp）の企業サイト**です。Next.js 16 ベースのコーポレートサイトで、農業派遣・IT事業を中心とした法人向けサービスを紹介しています。

---

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| フレームワーク | Next.js 16.1.1 / React 19.2.3 |
| スタイル | Tailwind CSS 4 |
| アニメーション | Framer Motion |
| UIコンポーネント | Radix UI（アコーディオン、ダイアログ、ドロップダウンなど）|
| 国際化 | next-intl（日本語・インドネシア語・英語）|
| フォント | Noto Sans JP, Shippori Mincho, Inter, JetBrains Mono |

---

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

---

## 主要コンポーネントの解説

### Header（ヘッダー）
- **固定ヘッダー** でスクロールしても表示
- **デスクトップ**: ドロップダウンメニュー（Framer Motion でアニメーション）
- **モバイル**: ハンバーガーメニュー
- **ナビゲーション**: ホーム、サービス（農業派遣・農作業受託・有料職業紹介・IT事業）、スグスタ（外部リンク）、会社概要、導入事例、お知らせ、採用情報

### HeroSection（ヒーロー）
- **フルスクリーンヒーロー**
- **背景**: オーロラ風グラデーションとノイズオーバーレイ
- **メッセージ**: 3パターンがあり、表示時にランダム選択
  - 「スグクル」と、約束した。
  - 人手不足という社会課題。私たちは、それを終わらせに来た。
  - 日本の農業が止まる前に。私たちは、動き始めた。
- **アニメーション**: パララックス、スクロールプログレスバー、キネティックタイポグラフィ
- **許可証**: 労働者派遣事業許可、有料職業紹介事業許可、特定技能派遣認定を表示

---

## 国際化（i18n）

- **対応言語**: 日本語（ja）・インドネシア語（id）・英語（en）
- **デフォルト**: 日本語
- **ルーティング**: `next-intl` で `ja` / `id` / `en` の切り替えを管理

---

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

---

## Next.js 設定 (`next.config.ts`)

- **React Compiler**: 有効
- **output**: `standalone`（Docker デプロイ向け）
- **next-intl**: 国際化プラグインを適用
- **セキュリティヘッダー**: HSTS, X-Frame-Options, X-Content-Type-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy を設定

---

## 開発の始め方

開発サーバーを起動するには、以下のいずれかのコマンドを実行してください。

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認できます。

ページの編集は `src/app/page.tsx` から行えます。編集すると自動で反映されます。

---

## デプロイ

- `Dockerfile` と `cloudbuild.yaml` により、**Google Cloud Build** を利用したデプロイ環境が整っています。

---

## 参考リンク

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub](https://github.com/vercel/next.js)
