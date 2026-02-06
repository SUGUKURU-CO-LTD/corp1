# スグクル株式会社 コーポレートサイト - SEO対策実装計画書

## 📅 作成日: 2026年2月6日

## 🎯 目的
スグクル株式会社のコーポレートサイトに対して、包括的なSEO対策を実施し、検索エンジンでの可視性を最大化する。

---

## ✅ 完了済み（優先度：高）

### 1. sitemap.xml の自動生成 ✓
**実装ファイル**: `/src/app/sitemap.ts`

- 全16ページを含む動的sitemap
- 各ページの優先度（priority）と更新頻度（changeFrequency）を最適化
- 最終更新日（lastModified）を自動設定

**サイトマップURL**: `https://sugu-kuru.co.jp/sitemap.xml`

### 2. robots.txt の作成 ✓
**実装ファイル**: `/src/app/robots.ts`

- 全クローラーに対してサイト全体をクロール許可
- sitemap.xmlへのリンクを含む
- `/api/`と`/admin/`をクロール対象外に設定

**robots.txt URL**: `https://sugu-kuru.co.jp/robots.txt`

### 3. 構造化データ（JSON-LD）の実装 ✓
**実装ファイル**: `/src/components/seo/StructuredData.tsx`

実装済みスキーマ:
- **OrganizationSchema**: 企業情報
- **WebsiteSchema**: ウェブサイト情報
- **BreadcrumbSchema**: パンくずリスト
- **LocalBusinessSchema**: 事業所情報
- **ArticleSchema**: 記事情報

**適用箇所**: ルートレイアウト（`/src/app/layout.tsx`）

### 4. メタデータ最適化 ✓
**実装ファイル**: 
- `/src/app/layout.tsx` - ルートメタデータ
- `/src/lib/metadata.ts` - メタデータヘルパー関数

実装内容:
- `metadataBase` の設定
- Open Graph タグの最適化
- Twitter Card の設定
- canonical URL の設定
- 各ページ用のメタデータプリセット作成

### 5. OG画像の生成 ✓
**ファイル**: `/public/images/og-image.png`

- サイズ: 1200x630px（Open Graph標準）
- ブランドカラー（緑 #1B5E38 → 金 #D4A853）のグラデーション
- 会社名とタグラインを含む
- プロフェッショナルなデザイン

### 6. セキュリティヘッダーの追加 ✓
**実装ファイル**: `/src/app/next.config.ts`

実装済みヘッダー:
- `Strict-Transport-Security` (HSTS)
- `X-Frame-Options`
- `X-Content-Type-Options`
- `X-XSS-Protection`
- `Referrer-Policy`
- `Permissions-Policy`
- `X-DNS-Prefetch-Control`

### 7. パンくずナビゲーションコンポーネント ✓
**実装ファイル**: `/src/components/ui/Breadcrumb.tsx`

- アクセシビリティ対応（aria-label, aria-current）
- アニメーション付き
- 構造化データと組み合わせて使用可能

---

## 🔄 次のステップ（優先度：中）

### 8. 各ページへのメタデータ適用
**期限**: 1週間以内

**対象ページ**:
- `/about` - 会社概要
- `/services/*` - サービスページ
- `/cases` - 導入事例
- `/careers` - 採用情報
- `/contact` - お問い合わせ
- その他

**実装方法**:
```typescript
// 各ページで以下のようにメタデータをエクスポート
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata.about;
```

**注意**: 現在多くのページが`"use client"`を使用しているため、以下のいずれかの対応が必要:
1. Server Componentに変換（推奨）
2. 各ページディレクトリに`metadata.ts`を追加
3. `next/head`を使用（非推奨）

### 9. パンくずナビゲーションの実装
**期限**: 1週間以内

**対象ページ**: 全ページ（ホーム以外）

**実装例**:
```tsx
import Breadcrumb from '@/components/ui/Breadcrumb';
import { BreadcrumbSchema } from '@/components/seo/StructuredData';

// ページ内
<Breadcrumb items={[
  { name: 'サービス', href: '/services' },
  { name: '農業派遣', href: '/services/dispatch' }
]} />

<BreadcrumbSchema items={[
  { name: 'ホーム', url: 'https://sugu-kuru.co.jp' },
  { name: 'サービス', url: 'https://sugu-kuru.co.jp/services' },
  { name: '農業派遣', url: 'https://sugu-kuru.co.jp/services/dispatch' }
]} />
```

### 10. 画像の最適化
**期限**: 2週間以内

現在の設定: `unoptimized: true`

**改善案**:
1. Next.js Image Optimizationを有効化
2. WebP/AVIF形式への自動変換
3. 遅延読み込み（lazy loading）の実装
4. 適切なalt属性の設定

### 11. モバイル最適化の検証
**期限**: 2週間以内

**チェック項目**:
- [ ] レスポンシブデザインの確認
- [ ] タッチターゲットサイズ（最小44x44px）
- [ ] フォントサイズ（最小16px）
- [ ] ビューポート設定
- [ ] モバイルページ速度（Lighthouse）

### 12. 内部リンク構造の最適化
**期限**: 2週間以内

**実装内容**:
- 関連ページへのリンク追加
- フッターナビゲーションの充実
- サイト内検索機能の追加（将来）

---

## 📊 継続的改善（優先度：低）

### 13. コンテンツSEO
**継続的に実施**

**施策**:
- キーワードリサーチ
- 見出し構造（H1-H6）の最適化
- メタディスクリプションの改善
- 画像alt属性の最適化
- 内部リンクテキストの最適化

### 14. パフォーマンス最適化
**継続的に実施**

**目標**:
- Lighthouse Score: 90+
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.8s

**施策**:
- コード分割
- フォント読み込みの最適化
- CSS/JSの最小化
- CDNの活用

### 15. 外部リンク戦略
**継続的に実施**

**施策**:
- バックリンク獲得
- ソーシャルメディア統合
- ビジネスディレクトリ登録
  - Google Business Profile
  - Bing Places
  - Yahoo!プレイス

### 16. 分析・モニタリング
**継続的に実施**

**ツール**:
- Google Search Console
  - サイトマップ送信 ✓
  - インデックス状況確認
  - 検索パフォーマンス追跡
  - クロールエラー監視
- Google Analytics（既に実装済み）
- Bing Webmaster Tools

---

## 🚀 デプロイ後の確認事項

### 即座に実施
1. [ ] Google Search Consoleにサイトマップを送信
   - URL: `https://sugu-kuru.co.jp/sitemap.xml`
2. [ ] robots.txtの動作確認
   - URL: `https://sugu-kuru.co.jp/robots.txt`
3. [ ] 構造化データのテスト
   - ツール: [Google Rich Results Test](https://search.google.com/test/rich-results)
4. [ ] Open Graphタグの確認
   - ツール: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
5. [ ] Twitter Cardの確認
   - ツール: [Twitter Card Validator](https://cards-dev.twitter.com/validator)
6. [ ] モバイルフレンドリーテスト
   - ツール: [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
7. [ ] ページ速度の測定
   - ツール: [PageSpeed Insights](https://pagespeed.web.dev/)

### 1週間後
1. [ ] インデックス状況の確認（Google Search Console）
2. [ ] クロールエラーの確認
3. [ ] 検索パフォーマンスの初期データ収集

### 1ヶ月後
1. [ ] 検索順位の変化を分析
2. [ ] オーガニックトラフィックの増加を確認
3. [ ] コンバージョン率の測定
4. [ ] 必要に応じてキーワード戦略を調整

---

## 📈 KPI（重要業績評価指標）

### 短期目標（1-3ヶ月）
- [ ] Google検索でのインデックスページ数: 16ページ全て
- [ ] Lighthouse SEOスコア: 95+
- [ ] オーガニック検索流入: 前月比+50%
- [ ] 平均セッション時間: 2分以上

### 中期目標（3-6ヶ月）
- [ ] 主要キーワードでの検索順位: トップ10入り
  - 「農業派遣 鹿児島」
  - 「特定技能 農業」
  - 「農作業受託」
- [ ] オーガニック検索流入: 月間1,000セッション
- [ ] 直帰率: 50%以下

### 長期目標（6-12ヶ月）
- [ ] 主要キーワードでの検索順位: トップ3入り
- [ ] オーガニック検索流入: 月間5,000セッション
- [ ] コンバージョン率: 3%以上
- [ ] ドメインオーソリティ: 30+

---

## 🛠️ 技術スタック

- **フレームワーク**: Next.js 16.1.1 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **多言語対応**: next-intl
- **デプロイ**: Google Cloud Run
- **分析**: Google Analytics (G-3X4MLRRVE0)

---

## 📝 注意事項

1. **"use client"の使用**: 多くのページがクライアントコンポーネントを使用しているため、メタデータの設定に制限があります。可能な限りServer Componentへの移行を検討してください。

2. **画像最適化**: 現在`unoptimized: true`が設定されています。本番環境では画像最適化を有効にすることを推奨します。

3. **多言語対応**: next-intlを使用していますが、現在は日本語のみ。将来的に英語やインドネシア語への対応を検討する場合は、hreflangタグの実装が必要です。

4. **構造化データの検証**: デプロイ後、必ずGoogle Rich Results Testで構造化データが正しく認識されているか確認してください。

---

## 📞 サポート

質問や問題が発生した場合は、開発チームまでお問い合わせください。

**最終更新**: 2026年2月6日
**バージョン**: 1.0
