import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "KIRIM プライバシーポリシー | Kebijakan Privasi KIRIM",
    description: "KIRIMアプリのプライバシーポリシー / Kebijakan Privasi aplikasi KIRIM",
};

export default function KirimPrivacyPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 border-b-4 border-[#1B5E38] pb-4 mb-6">
                        KIRIM プライバシーポリシー / Kebijakan Privasi KIRIM
                    </h1>
                    <p className="text-sm text-gray-600 mb-8">
                        <strong>最終更新日 / Terakhir diperbarui</strong>: 2026年1月26日 / 26 Januari 2026
                    </p>

                    {/* 日本語版 */}
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-[#1B5E38] pl-4 mb-6">
                            日本語版
                        </h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">1. はじめに</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    株式会社SUGU-KURU（以下「当社」）は、KIRIMアプリ（以下「本アプリ」）を提供するにあたり、ユーザーの皆様の個人情報保護の重要性を認識し、個人情報の保護に関する法律（個人情報保護法）、その他関連法令を遵守し、以下のプライバシーポリシー（以下「本ポリシー」）に従って、適切に取り扱います。
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">2. 収集する情報</h3>
                                <p className="text-gray-700 mb-3">本アプリでは、以下の情報を収集します：</p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">2.1 アカウント情報</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>氏名（漢字・カタカナ・ローマ字）</li>
                                            <li>メールアドレス</li>
                                            <li>電話番号</li>
                                            <li>生年月日</li>
                                            <li>住所</li>
                                            <li>国籍</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">2.2 本人確認情報（eKYC）</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>本人確認書類（運転免許証、マイナンバーカード、在留カード等）</li>
                                            <li>顔写真</li>
                                            <li>本人確認書類の画像データ</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">2.3 金融情報</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>銀行口座情報（GMOあおぞらネット銀行）</li>
                                            <li>送金先銀行口座情報（インドネシアの銀行）</li>
                                            <li>取引履歴</li>
                                            <li>送金金額・頻度</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">2.4 デバイス情報</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>デバイスID</li>
                                            <li>IPアドレス</li>
                                            <li>OS種別・バージョン</li>
                                            <li>アプリバージョン</li>
                                            <li>言語設定</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">2.5 利用情報</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>アプリの利用履歴</li>
                                            <li>画面遷移情報</li>
                                            <li>エラーログ</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">3. 情報の利用目的</h3>
                                <p className="text-gray-700 mb-3">収集した情報は、以下の目的で利用します：</p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">3.1 サービス提供</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>送金サービスの提供</li>
                                            <li>アカウント管理</li>
                                            <li>カスタマーサポート</li>
                                            <li>本人確認（eKYC）</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">3.2 法令遵守</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>犯罪収益移転防止法に基づく本人確認</li>
                                            <li>マネーロンダリング防止</li>
                                            <li>テロ資金供与防止</li>
                                            <li>外国為替及び外国貿易法の遵守</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">3.3 サービス改善</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>サービス品質の向上</li>
                                            <li>新機能の開発</li>
                                            <li>統計データの作成（個人を特定できない形式）</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">3.4 セキュリティ</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>不正利用の防止</li>
                                            <li>セキュリティインシデントの検知・対応</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">4. 第三者への提供</h3>
                                <p className="text-gray-700 mb-3">
                                    当社は、以下の場合を除き、ユーザーの同意なく第三者に個人情報を提供しません：
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">4.1 サービス提供に必要な提携先</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li><strong>GMOあおぞらネット銀行</strong>: 日本国内の銀行口座連携</li>
                                            <li><strong>Wise（旧TransferWise）</strong>: 国際送金サービス</li>
                                            <li><strong>TRUSTDOCK</strong>: 本人確認（eKYC）サービス</li>
                                            <li><strong>インドネシアの提携銀行</strong>: 送金先への着金処理</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">4.2 法令に基づく場合</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>法令に基づく開示要請があった場合</li>
                                            <li>人の生命、身体または財産の保護のために必要な場合</li>
                                            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要な場合</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">5. 情報の保管・セキュリティ</h3>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">5.1 データの保管</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>データは日本国内のサーバーに保管</li>
                                            <li>AWS（Amazon Web Services）を利用</li>
                                            <li>暗号化して保存</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">5.2 セキュリティ対策</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>SSL/TLS通信による暗号化</li>
                                            <li>データベースの暗号化</li>
                                            <li>アクセス制御・認証</li>
                                            <li>定期的なセキュリティ監査</li>
                                            <li>不正アクセス検知システム</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">5.3 保管期間</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>アカウント情報: アカウント削除後5年間（法令に基づく）</li>
                                            <li>取引履歴: 取引完了後7年間（法令に基づく）</li>
                                            <li>その他の情報: サービス提供に必要な期間</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">6. ユーザーの権利</h3>
                                <p className="text-gray-700 mb-3">ユーザーは、以下の権利を有します：</p>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                    <li><strong>アクセス権</strong>: 自己の個人情報の開示を請求できます</li>
                                    <li><strong>訂正権</strong>: 個人情報が不正確な場合、訂正を請求できます</li>
                                    <li><strong>削除権</strong>: 一定の条件下で、個人情報の削除を請求できます</li>
                                    <li><strong>利用停止権</strong>: 個人情報の利用停止を請求できます</li>
                                    <li><strong>データポータビリティ権</strong>: 一定の形式で個人情報の提供を受けることができます</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">7. Cookie・トラッキング技術</h3>
                                <p className="text-gray-700 mb-3">本アプリでは、以下の技術を使用する場合があります：</p>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                    <li>アプリ内分析ツール（Google Analytics for Firebase等）</li>
                                    <li>クラッシュレポートツール</li>
                                    <li>パフォーマンス監視ツール</li>
                                </ul>
                                <p className="text-gray-700 mt-2">
                                    これらは、サービス改善のために使用され、個人を特定する目的では使用しません。
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">8. 未成年者の情報</h3>
                                <p className="text-gray-700">
                                    本アプリは、18歳未満の方のご利用を想定していません。18歳未満の方の個人情報を故意に収集することはありません。
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">9. プライバシーポリシーの変更</h3>
                                <p className="text-gray-700">
                                    本ポリシーは、法令の変更やサービス内容の変更に伴い、予告なく変更される場合があります。重要な変更がある場合は、アプリ内通知またはメールでお知らせします。
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">10. お問い合わせ</h3>
                                <div className="bg-gray-100 rounded-lg p-6">
                                    <p className="text-gray-800 leading-relaxed">
                                        <strong>株式会社SUGU-KURU</strong><br />
                                        <strong>メール</strong>: privacy@sugu-kuru.co.jp<br />
                                        <strong>ウェブサイト</strong>: https://sugu-kuru.co.jp<br />
                                        <strong>受付時間</strong>: 平日 10:00-18:00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 区切り線 */}
                    <div className="border-t-2 border-[#1B5E38] my-12"></div>

                    {/* Indonesian Version */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-[#1B5E38] pl-4 mb-6">
                            Bahasa Indonesia
                        </h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">1. Pendahuluan</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    SUGU-KURU Co., Ltd. (selanjutnya disebut "Perusahaan") menyadari pentingnya perlindungan informasi pribadi pengguna dalam menyediakan aplikasi KIRIM (selanjutnya disebut "Aplikasi"). Kami mematuhi Undang-Undang Perlindungan Informasi Pribadi Jepang dan peraturan terkait lainnya, serta menangani informasi pribadi dengan tepat sesuai dengan Kebijakan Privasi ini.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">2. Informasi yang Dikumpulkan</h3>
                                <p className="text-gray-700 mb-3">Aplikasi ini mengumpulkan informasi berikut:</p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">2.1 Informasi Akun</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>Nama lengkap (Kanji, Katakana, Romaji)</li>
                                            <li>Alamat email</li>
                                            <li>Nomor telepon</li>
                                            <li>Tanggal lahir</li>
                                            <li>Alamat</li>
                                            <li>Kewarganegaraan</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">2.2 Informasi Verifikasi Identitas (eKYC)</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>Dokumen identitas (SIM, My Number Card, Kartu Izin Tinggal, dll.)</li>
                                            <li>Foto wajah</li>
                                            <li>Gambar dokumen identitas</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">2.3 Informasi Keuangan</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>Informasi rekening bank (GMO Aozora Net Bank)</li>
                                            <li>Informasi rekening bank penerima (bank Indonesia)</li>
                                            <li>Riwayat transaksi</li>
                                            <li>Jumlah dan frekuensi transfer</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">2.4 Informasi Perangkat</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>ID perangkat</li>
                                            <li>Alamat IP</li>
                                            <li>Jenis dan versi OS</li>
                                            <li>Versi aplikasi</li>
                                            <li>Pengaturan bahasa</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">2.5 Informasi Penggunaan</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>Riwayat penggunaan aplikasi</li>
                                            <li>Informasi navigasi layar</li>
                                            <li>Log kesalahan</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">3. Tujuan Penggunaan Informasi</h3>
                                <p className="text-gray-700 mb-3">Informasi yang dikumpulkan digunakan untuk tujuan berikut:</p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">3.1 Penyediaan Layanan</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>Menyediakan layanan transfer uang</li>
                                            <li>Manajemen akun</li>
                                            <li>Dukungan pelanggan</li>
                                            <li>Verifikasi identitas (eKYC)</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">3.2 Kepatuhan Hukum</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>Verifikasi identitas berdasarkan Undang-Undang Pencegahan Transfer Hasil Kejahatan</li>
                                            <li>Pencegahan pencucian uang</li>
                                            <li>Pencegahan pendanaan terorisme</li>
                                            <li>Kepatuhan terhadap Undang-Undang Valuta Asing dan Perdagangan Luar Negeri</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">3.3 Peningkatan Layanan</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>Meningkatkan kualitas layanan</li>
                                            <li>Pengembangan fitur baru</li>
                                            <li>Pembuatan data statistik (dalam bentuk yang tidak dapat mengidentifikasi individu)</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">3.4 Keamanan</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>Pencegahan penggunaan yang tidak sah</li>
                                            <li>Deteksi dan respons terhadap insiden keamanan</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">4. Pembagian kepada Pihak Ketiga</h3>
                                <p className="text-gray-700 mb-3">
                                    Kami tidak akan memberikan informasi pribadi kepada pihak ketiga tanpa persetujuan pengguna, kecuali dalam kasus berikut:
                                </p>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">4.1 Mitra yang Diperlukan untuk Penyediaan Layanan</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li><strong>GMO Aozora Net Bank</strong>: Koneksi rekening bank di Jepang</li>
                                            <li><strong>Wise (sebelumnya TransferWise)</strong>: Layanan transfer internasional</li>
                                            <li><strong>TRUSTDOCK</strong>: Layanan verifikasi identitas (eKYC)</li>
                                            <li><strong>Bank mitra di Indonesia</strong>: Pemrosesan penerimaan transfer</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">4.2 Berdasarkan Hukum</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>Ketika ada permintaan pengungkapan berdasarkan hukum</li>
                                            <li>Ketika diperlukan untuk melindungi kehidupan, tubuh, atau properti seseorang</li>
                                            <li>Ketika sangat diperlukan untuk meningkatkan kesehatan masyarakat atau mendorong perkembangan anak yang sehat</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">5. Penyimpanan dan Keamanan Informasi</h3>

                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">5.1 Penyimpanan Data</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>Data disimpan di server di Jepang</li>
                                            <li>Menggunakan AWS (Amazon Web Services)</li>
                                            <li>Disimpan dalam bentuk terenkripsi</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">5.2 Langkah-langkah Keamanan</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>Enkripsi komunikasi SSL/TLS</li>
                                            <li>Enkripsi database</li>
                                            <li>Kontrol akses dan autentikasi</li>
                                            <li>Audit keamanan berkala</li>
                                            <li>Sistem deteksi akses tidak sah</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-2">5.3 Periode Penyimpanan</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                            <li>Informasi akun: 5 tahun setelah penghapusan akun (berdasarkan hukum)</li>
                                            <li>Riwayat transaksi: 7 tahun setelah penyelesaian transaksi (berdasarkan hukum)</li>
                                            <li>Informasi lainnya: Periode yang diperlukan untuk penyediaan layanan</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">6. Hak Pengguna</h3>
                                <p className="text-gray-700 mb-3">Pengguna memiliki hak-hak berikut:</p>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                    <li><strong>Hak Akses</strong>: Dapat meminta pengungkapan informasi pribadi mereka</li>
                                    <li><strong>Hak Koreksi</strong>: Dapat meminta koreksi jika informasi pribadi tidak akurat</li>
                                    <li><strong>Hak Penghapusan</strong>: Dapat meminta penghapusan informasi pribadi dalam kondisi tertentu</li>
                                    <li><strong>Hak Penghentian Penggunaan</strong>: Dapat meminta penghentian penggunaan informasi pribadi</li>
                                    <li><strong>Hak Portabilitas Data</strong>: Dapat menerima informasi pribadi dalam format tertentu</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">7. Cookie dan Teknologi Pelacakan</h3>
                                <p className="text-gray-700 mb-3">Aplikasi ini dapat menggunakan teknologi berikut:</p>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                                    <li>Alat analitik dalam aplikasi (Google Analytics for Firebase, dll.)</li>
                                    <li>Alat laporan crash</li>
                                    <li>Alat pemantauan kinerja</li>
                                </ul>
                                <p className="text-gray-700 mt-2">
                                    Ini digunakan untuk meningkatkan layanan dan tidak digunakan untuk mengidentifikasi individu.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">8. Informasi Anak di Bawah Umur</h3>
                                <p className="text-gray-700">
                                    Aplikasi ini tidak ditujukan untuk digunakan oleh orang di bawah 18 tahun. Kami tidak dengan sengaja mengumpulkan informasi pribadi dari orang di bawah 18 tahun.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">9. Perubahan Kebijakan Privasi</h3>
                                <p className="text-gray-700">
                                    Kebijakan ini dapat berubah tanpa pemberitahuan sebelumnya karena perubahan hukum atau perubahan konten layanan. Jika ada perubahan penting, kami akan memberi tahu Anda melalui notifikasi dalam aplikasi atau email.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">10. Kontak</h3>
                                <div className="bg-gray-100 rounded-lg p-6">
                                    <p className="text-gray-800 leading-relaxed">
                                        <strong>SUGU-KURU Co., Ltd.</strong><br />
                                        <strong>Email</strong>: privacy@sugu-kuru.co.jp<br />
                                        <strong>Website</strong>: https://sugu-kuru.co.jp<br />
                                        <strong>Jam Operasional</strong>: Senin-Jumat 10:00-18:00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <div className="mt-12 pt-6 border-t border-gray-300 text-center text-sm text-gray-600">
                        <p className="mb-2">
                            <strong>発行者 / Penerbit</strong>: 株式会社SUGU-KURU / SUGU-KURU Co., Ltd.
                        </p>
                        <p className="mb-2">
                            <strong>ウェブサイト / Website</strong>: https://sugu-kuru.co.jp
                        </p>
                        <p>
                            <strong>アプリ / Aplikasi</strong>: KIRIM - Kirim Uang ke Indonesia
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
