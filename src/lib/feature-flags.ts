// マージン率等の情報公開ページ
// Margin-rate disclosure page
// Halaman pengungkapan margin
// 様式第11号の確定値が反映され壁の最終確認が終わったら true にする。
// Set this to true after Form 11 final values are reflected and Kabe gives final approval.
// Ubah menjadi true setelah nilai final Formulir 11 diterapkan dan Kabe memberikan persetujuan akhir.
// フッター/ナビのリンク表示と sitemap 登録、metadata.robots を同時に切替える単一スイッチ。
// A single switch for footer/nav links, sitemap registration, and metadata.robots.
// Satu sakelar untuk tautan footer/nav, pendaftaran sitemap, dan metadata.robots.
export const IS_MARGIN_RATE_PUBLISHED = true;

// /contact フォームの受付可否
// Whether the /contact form accepts submissions
// Status penerimaan formulir /contact
// このフォームには元々、保存先（DB・メール送信・CRM等）が一切接続されておらず、
// 送信ボタンを押すと1.5秒待つだけで「送信完了」と表示する重大な不具合があった（P0）。
// このフラグが false の間、フォームは無効化され「現在調整中」の案内と電話番号を表示する。
// 保存先（メール送信 or 外部フォームサービス等）を実装・検証してから true に切り替えること。
// Set to true only after a real intake backend (email delivery, CRM, etc.) is implemented and verified.
// Ubah menjadi true hanya setelah backend penerimaan formulir yang sesungguhnya diimplementasikan dan diverifikasi.
export const IS_CONTACT_FORM_ENABLED = false;

// 求人LP「鹿児島マテリアル 技術・人文知識・国際業務」の公開可否
// Publish switch for the Kagoshima Material (Gijinkoku) job LP
// Sakelar publikasi untuk halaman lowongan kerja Kagoshima Material (Gijinkoku)
//
// 未確認事項（労働者派遣事業許可番号の一次資料確認、応募保存先の実装、
// 鹿児島マテリアルの正式条件資料の確認）がすべて解消し、CEOの公開GOが
// 出るまで false のままとする。false の間は metadata.robots が
// { index: false, follow: false } になり、sitemapにも登録しない。
// Keep false until all open items (dispatch-license primary-source
// confirmation, an application save backend, and confirmed employment
// terms from Kagoshima Material) are resolved and the CEO gives publish GO.
export const IS_KM_GIJINKOKU_JOBS_PUBLISHED = false;
