/**
 * 会社基本情報（共有定数）
 *
 * 出典（一次資料で確認済み・2026-08-29）:
 * 国税庁 法人番号公表サイト（https://www.houjin-bangou.nta.go.jp/）
 * 法人番号 9340001026142「スグクル株式会社」の登記上の本店所在地:
 * 「鹿児島県霧島市国分中央1丁目2－32ポーラビル3階」
 * 変更履歴: 事由発生年月日 令和8年7月27日、本店又は主たる事務所の所在地の変更
 * （旧情報: 鹿児島県霧島市国分中央3丁目42－8翔陽A103）
 *
 * 旧住所（鹿児島県霧島市国分中央三丁目42-8 翔陽A103）は出力しないこと（社内共通ルール）。
 * 建物名「ポーラビル」は上記一次資料で確認済み（社内データ辞書v4.1には建物名の記載が
 * なかったため、今回の一次資料確認で補完した）。
 *
 * 日本語表記は一次資料の原文どおり「ポーラビル3階」を正本とする（2026-08-29 amend）。
 * 英字表記のみ COMPANY_ADDRESS_EN で "POLA Building 3F" を用いる（フロア表記の
 * 日英表現差であり、事実の相違ではない）。
 */

export const COMPANY_NAME = 'スグクル株式会社';

export const COMPANY_ADDRESS = {
    postalCode: '899-4332',
    addressRegion: '鹿児島県',
    addressLocality: '霧島市',
    // 丁目番地・建物名（国税庁法人番号公表サイトで確認済み、日本語表記は「◯階」に統一）
    streetAddress: '国分中央1丁目2-32 ポーラビル3階',
    addressCountry: 'JP',
} as const;

/** 郵便番号付きの1行表記（〒付き） */
export const COMPANY_ADDRESS_FULL_JA =
    `〒${COMPANY_ADDRESS.postalCode} ${COMPANY_ADDRESS.addressRegion}${COMPANY_ADDRESS.addressLocality}${COMPANY_ADDRESS.streetAddress}`;

/** 郵便番号なしの1行表記 */
export const COMPANY_ADDRESS_LINE_JA =
    `${COMPANY_ADDRESS.addressRegion}${COMPANY_ADDRESS.addressLocality}${COMPANY_ADDRESS.streetAddress}`;

/** 英字表記（現時点でサイト内に使用箇所なし。将来の英語表記が必要な箇所向けに用意） */
export const COMPANY_ADDRESS_EN =
    'POLA Building 3F, 1-2-32 Kokubu Chuo, Kirishima-shi, Kagoshima 899-4332, Japan';

export const COMPANY_PHONE = '0995-73-9939';
export const COMPANY_PHONE_TEL_URI = 'tel:0995-73-9939';
export const COMPANY_EMAIL = 'info@sugu-kuru.co.jp';
export const COMPANY_CORPORATE_NUMBER = '9340001026142';
