/**
 * 求人LP「鹿児島マテリアル 技術・人文知識・国際業務」共通定数
 *
 * 出典: ユーザー提供の参照HTML `sugukuru_job_posting_gijinkoku_kmaterial_v1.html`
 * （2026-08-29 添付・2026年8月26日時点の情報として記載）。あくまで条件・構成・
 * 配色の参考資料であり、公開原稿としてそのままコピーしないこと。
 *
 * 就業場所（株式会社鹿児島マテリアル）は当社（スグクル株式会社）とは別法人の
 * 事業所であるため、`@/lib/company`のCOMPANY_ADDRESS（スグクル株式会社の
 * 登記上住所）とは別の定数として管理する。スグクル株式会社自身の情報
 * （雇用主表記・登記住所等）は必ず `@/lib/company` の共有定数を参照し、
 * このファイル内で重複記述しないこと。
 */

// 就業場所（雇用主はスグクル株式会社、就業場所は鹿児島マテリアル）
export const KM_WORK_LOCATION = {
    legalNameJa: '株式会社鹿児島マテリアル',
    legalNameEn: 'Kagoshima Material Co., Ltd.',
    postalCode: '895-2104',
    addressRegion: '鹿児島県',
    addressLocality: '薩摩郡さつま町',
    streetAddress: '柏原2357番地4',
    addressCountry: 'JP',
} as const;

export const KM_WORK_LOCATION_LINE_JA =
    `〒${KM_WORK_LOCATION.postalCode} ${KM_WORK_LOCATION.addressRegion}${KM_WORK_LOCATION.addressLocality}${KM_WORK_LOCATION.streetAddress}`;

export const KM_WORK_LOCATION_LINE_ID =
    `${KM_WORK_LOCATION.streetAddress}, ${KM_WORK_LOCATION.addressLocality}, ${KM_WORK_LOCATION.addressRegion} ${KM_WORK_LOCATION.postalCode}`;

// 求人問い合わせ専用の電話番号（ユーザーより実在・接続確認済みとして明示提供された番号）
export const KM_JOB_CONTACT_PHONE_DISPLAY = '090-6599-3928';
export const KM_JOB_CONTACT_PHONE_TEL_URI = 'tel:09065993928';

// 時給・勤務条件（参照HTML記載の事実。参照HTMLにない情報は追加しない）
export const KM_HOURLY_WAGE_JPY = 1350;
export const KM_MONTHLY_ESTIMATE_JPY = 289000;
export const KM_WORK_START_MONTH_JA = '2026年9月から勤務可能な方';
export const KM_WORK_START_MONTH_ID = 'Anda yang bisa mulai bekerja pada bulan September 2026';

// 勤務可能開始日（募集要項の記載時点の事実として明示。将来のvalidThrough等は推測しない）
export const KM_CONTENT_DATE = '2026-08-29';
