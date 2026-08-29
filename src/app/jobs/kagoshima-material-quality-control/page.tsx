import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowLeft } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { IS_KM_GIJINKOKU_JOBS_PUBLISHED } from "@/lib/feature-flags";
import { COMPANY_NAME } from "@/lib/company";
import { JobPostingSchema } from "@/components/seo/JobPostingSchema";
import {
    KM_WORK_LOCATION_LINE_JA,
    KM_WORK_LOCATION_LINE_ID,
    KM_JOB_CONTACT_PHONE_DISPLAY,
    KM_JOB_CONTACT_PHONE_TEL_URI,
    KM_HOURLY_WAGE_JPY,
} from "@/lib/jobs/kagoshima-material";

// 参照HTML `sugukuru_job_posting_gijinkoku_kmaterial_v1.html` の
// 「品質管理・生産工程管理」求人部分を精査・修正のうえ独自に実装。
// 参照HTMLにない情報は追加していない。直接雇用後の賞与額・退職金制度・
// 定年年齢・通勤手当上限は、鹿児島マテリアルの正式資料が未確認のため掲載しない。
// 労働者派遣事業許可番号は一次資料未確認のため掲載しない。

const JOB_TITLE_JA = "品質管理・生産工程管理（電子部品・半導体関連製品）";
const JOB_TITLE_ID =
    "Manajemen Kualitas & Manajemen Proses Produksi (Komponen Elektronik / Produk Terkait Semikonduktor)";

const JOB_DESCRIPTION_JA =
    "株式会社鹿児島マテリアル（電子部品・半導体関連製品メーカー、1972年創業）での品質管理・品質保証、生産工程の進捗管理、精密測定・検査機器の操作と管理を担当する専門職求人。技術・人文知識・国際業務の在留資格に対応。最初の6か月はスグクル株式会社の紹介予定派遣、その後、双方合意のうえ直接雇用へ移行する可能性があります。時給1,350円から。";

const baseMetadata = generatePageMetadata({
    title: "品質管理・生産工程管理 求人｜鹿児島マテリアル",
    description: JOB_DESCRIPTION_JA,
    keywords: "求人, 品質管理, 生産工程管理, 鹿児島マテリアル, 技術・人文知識・国際業務",
    path: "/jobs/kagoshima-material-quality-control",
});

export const metadata: Metadata = {
    ...baseMetadata,
    robots: IS_KM_GIJINKOKU_JOBS_PUBLISHED
        ? { index: true, follow: true }
        : { index: false, follow: false },
    openGraph: {
        ...baseMetadata.openGraph,
        locale: "id_ID",
    },
    alternates: {
        canonical: "https://sugu-kuru.co.jp/jobs/kagoshima-material-quality-control",
    },
};

export default function KagoshimaMaterialQualityControlPage() {
    return (
        <div className="pt-20 bg-[#FAF7F0]">
            {/* JobPosting構造化データ（SSR・1ページ1求人。next/scriptは使用しない） */}
            <JobPostingSchema
                id="quality-control"
                title={JOB_TITLE_JA}
                description={JOB_DESCRIPTION_JA}
            />

            <div lang="id" className="mx-auto max-w-3xl px-5 pb-16">
                <Link
                    href="/jobs/kagoshima-material-gijinkoku"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-[#5A5244] hover:text-[#1F1B16]"
                >
                    <ArrowLeft className="w-4 h-4" /> Kembali / 求人一覧へ戻る
                </Link>

                <header className="mt-4">
                    <p className="text-xs font-semibold tracking-[0.2em] text-[#B8924A] uppercase">
                        Position 01
                    </p>
                    <h1
                        className="mt-2 text-xl md:text-2xl font-bold text-[#1F1B16] leading-snug"
                        style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                    >
                        {JOB_TITLE_ID}
                    </h1>
                    <p lang="ja" className="mt-2 text-sm text-[#5A5244]">
                        {JOB_TITLE_JA}
                    </p>
                    <span className="mt-3 inline-block rounded bg-[#B8924A] text-[#14110C] text-xs font-mono px-2.5 py-1">
                        Visa Gijinkoku（技術・人文知識・国際業務）
                    </span>
                </header>

                {/* 基本条件 */}
                <section className="mt-6 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-white border border-[rgba(31,27,22,.1)] px-4 py-3">
                        <p className="text-[10px] font-mono tracking-[0.1em] text-[#B8924A]">UPAH PER JAM</p>
                        <p className="text-lg font-bold text-[#8B1A1A] mt-1">
                            ¥{KM_HOURLY_WAGE_JPY.toLocaleString("ja-JP")}〜
                        </p>
                        <p lang="ja" className="text-xs text-[#5A5244] mt-1">学歴・経験に応じて昇給</p>
                    </div>
                    <div className="rounded-lg bg-white border border-[rgba(31,27,22,.1)] px-4 py-3">
                        <p className="text-[10px] font-mono tracking-[0.1em] text-[#B8924A]">PERKIRAAN BULANAN</p>
                        <p className="text-lg font-bold text-[#8B1A1A] mt-1">≈ ¥289.000*</p>
                        <p lang="ja" className="text-xs text-[#5A5244] mt-1">残業20h＋夜勤割増込みの概算（下記注記参照）</p>
                    </div>
                    <div className="rounded-lg bg-white border border-[rgba(31,27,22,.1)] px-4 py-3">
                        <p className="text-[10px] font-mono tracking-[0.1em] text-[#B8924A]">STATUS</p>
                        <p className="text-sm font-bold text-[#1F1B16] mt-1">
                            Haken (6bln) → kemungkinan langsung
                        </p>
                        <p lang="ja" className="text-xs text-[#5A5244] mt-1">紹介予定派遣（6か月）→ 直接雇用の可能性</p>
                    </div>
                </section>
                <p className="mt-2 text-[11px] text-[#5A5244] leading-relaxed">
                    * Perkiraan dengan asumsi 173,3 jam kerja pokok, 20 jam lembur, dan
                    sekitar setengah shift malam per bulan. Jumlah bruto sebelum
                    pemotongan; berubah sesuai hari kerja aktual dan bukan jumlah yang
                    dijamin.
                </p>

                {/* 仕事内容 */}
                <section className="mt-8">
                    <h2 className="font-bold text-[#1F1B16] border-b-2 border-[#1F1B16] pb-1.5">
                        Uraian Tugas
                    </h2>
                    <p lang="ja" className="text-xs text-[#5A5244] mt-1">仕事の内容</p>
                    <ul className="mt-3 space-y-3 text-sm">
                        <li>
                            <b>Manajemen &amp; penjaminan kualitas</b> — penerapan standar
                            inspeksi, analisis produk cacat, pengumpulan data &amp; pembuatan
                            laporan
                            <p lang="ja" className="text-xs text-[#5A5244] mt-0.5">
                                品質管理・品質保証：検査基準の運用、不良分析、データ集計、報告書作成
                            </p>
                        </li>
                        <li>
                            <b>Manajemen proses produksi</b> — pengelolaan kemajuan proses
                            berdasarkan rencana produksi, pemantauan yield &amp; usulan
                            perbaikan
                            <p lang="ja" className="text-xs text-[#5A5244] mt-0.5">
                                生産工程の管理：生産計画にもとづく工程進捗管理、歩留まり確認・改善提案
                            </p>
                        </li>
                        <li>
                            <b>Pengoperasian &amp; pengelolaan alat ukur/inspeksi presisi</b> —
                            pencatatan &amp; analisis data pengukuran, pemeriksaan alat
                            <p lang="ja" className="text-xs text-[#5A5244] mt-0.5">
                                精密測定・検査機器の操作と管理：測定データの記録・分析、機器の点検管理
                            </p>
                        </li>
                        <li>
                            Pekerjaan administrasi &amp; pelaporan yang berkaitan dengan hal di
                            atas
                            <p lang="ja" className="text-xs text-[#5A5244] mt-0.5">
                                上記に関連する事務・報告業務
                            </p>
                        </li>
                    </ul>
                    <div className="mt-4 rounded-lg bg-[rgba(139,26,26,.07)] border-l-4 border-[#8B1A1A] px-4 py-3 text-sm">
                        <p>
                            Ini adalah <b>pekerjaan profesional</b> yang sesuai dengan status
                            tinggal &quot;Gijinkoku&quot;. Anda tidak akan ditempatkan secara
                            khusus pada pekerjaan rutin di lini produksi (mis. pencetakan,
                            perakitan, penggilingan).
                        </p>
                        <p lang="ja" className="text-xs text-[#5A5244] mt-1">
                            在留資格「技術・人文知識・国際業務」に対応した専門職です。製造ラインでの定型的な作業（成型・組立・研削等）に専従することはありません。
                        </p>
                    </div>
                </section>

                {/* ビザ要件 */}
                <section className="mt-8">
                    <h2 className="font-bold text-[#1F1B16] border-b-2 border-[#1F1B16] pb-1.5">
                        Syarat Visa (Status Tinggal)
                    </h2>
                    <p lang="ja" className="text-xs text-[#5A5244] mt-1">ビザ（在留資格）の要件</p>

                    <div className="mt-3 rounded-lg bg-[rgba(184,146,74,.1)] border-l-4 border-[#B8924A] px-4 py-3 text-sm">
                        <p>
                            Untuk status tinggal &quot;Gijinkoku&quot;, syaratnya adalah{" "}
                            <b>
                                adanya keterkaitan antara bidang keilmuan yang Anda pelajari di
                                universitas dengan isi pekerjaan yang sebenarnya
                            </b>
                            . Keterkaitan ini akan dikonfirmasi secara individual untuk setiap
                            pelamar.
                        </p>
                        <p lang="ja" className="text-xs text-[#5A5244] mt-1">
                            在留資格「技術・人文知識・国際業務」は、大学で学んだ専門分野と実際の仕事の内容が結びついていることが許可の条件です。この関連性は応募者ごとに個別に確認します。
                        </p>
                    </div>

                    <dl className="mt-4 divide-y divide-[rgba(31,27,22,.08)] text-sm">
                        <div className="py-3">
                            <dt className="font-bold">Pendidikan (wajib)</dt>
                            <dd lang="ja" className="text-xs text-[#5A5244] italic">学歴（必須）</dd>
                            <dd className="mt-1">
                                Lulusan universitas (S1) atau D3 ke atas — universitas di Jepang
                                maupun Indonesia keduanya bisa
                            </dd>
                        </div>
                        <div className="py-3">
                            <dt className="font-bold">Bidang studi (wajib)</dt>
                            <dd lang="ja" className="text-xs text-[#5A5244] italic">専攻分野（必須）</dd>
                            <dd className="mt-1">
                                Bidang yang berkaitan dengan pekerjaan, seperti: Sains / Teknik /
                                Teknik Elektro-Elektronika / Teknik Mesin / Teknik Material /
                                Kimia / Teknik Informatika / Teknik Industri, dll.
                            </dd>
                        </div>
                        <div className="py-3">
                            <dt className="font-bold">Penjelasan keterkaitan (wajib)</dt>
                            <dd lang="ja" className="text-xs text-[#5A5244] italic">関連性の説明（必須）</dd>
                            <dd className="mt-1">
                                Anda perlu dapat menjelaskan bagaimana mata kuliah yang Anda
                                pelajari dapat digunakan untuk manajemen kualitas, manajemen
                                proses, dan analisis data pengukuran. Kami akan membantu
                                menyusun dokumennya bersama Anda; keterkaitan tetap dinilai oleh
                                otoritas imigrasi berdasarkan dokumen Anda.
                            </dd>
                        </div>
                        <div className="py-3">
                            <dt className="font-bold">Status tinggal saat ini</dt>
                            <dd lang="ja" className="text-xs text-[#5A5244] italic">現在の在留資格</dd>
                            <dd className="mt-1">
                                Bagi pemegang &quot;Gijinkoku&quot; yang pindah kerja, pada
                                prinsipnya diperlukan pelaporan resmi (umumnya dalam 14 hari)
                                terkait lembaga tempat bekerja. Pelaporan ini bukan berarti Anda
                                otomatis boleh bekerja tanpa pemeriksaan; apakah pekerjaan ini
                                sesuai status tinggal Anda dikonfirmasi secara individual.
                                Pemegang status tinggal lain silakan berkonsultasi.
                            </dd>
                        </div>
                        <div className="py-3">
                            <dt className="font-bold">Sisa masa izin tinggal</dt>
                            <dd lang="ja" className="text-xs text-[#5A5244] italic">在留期間の残り</dd>
                            <dd className="mt-1">
                                Diutamakan yang sisa masa izin tinggalnya 1 tahun atau lebih
                                (yang lebih pendek juga silakan berkonsultasi).
                            </dd>
                        </div>
                        <div className="py-3">
                            <dt className="font-bold">Dokumen yang diperlukan</dt>
                            <dd lang="ja" className="text-xs text-[#5A5244] italic">必要書類</dd>
                            <dd className="mt-1">
                                Kartu Izin Tinggal / ijazah / transkrip nilai (yang menunjukkan
                                mata kuliah jurusan) / paspor
                            </dd>
                        </div>
                        <div className="py-3">
                            <dt className="font-bold">Bahasa Jepang</dt>
                            <dd lang="ja" className="text-xs text-[#5A5244] italic">日本語能力</dd>
                            <dd className="mt-1">
                                JLPT N2 ke atas <b>diutamakan, namun bukan syarat mutlak</b>{" "}
                                (untuk memahami instruksi kerja &amp; menulis laporan). Dokumen
                                setara akan dikonfirmasi secara individual.
                            </dd>
                        </div>
                    </dl>
                </section>

                {/* 就業条件 */}
                <section className="mt-8">
                    <h2 className="font-bold text-[#1F1B16] border-b-2 border-[#1F1B16] pb-1.5">
                        Kondisi Kerja
                    </h2>
                    <p lang="ja" className="text-xs text-[#5A5244] mt-1">就業条件</p>
                    <dl className="mt-3 divide-y divide-[rgba(31,27,22,.08)] text-sm">
                        <div className="py-3">
                            <dt className="font-bold">Lokasi kerja</dt>
                            <dd lang="ja" className="text-xs text-[#5A5244] italic">勤務地</dd>
                            <dd className="mt-1">
                                {KM_WORK_LOCATION_LINE_ID}
                                <span lang="ja" className="block text-xs text-[#5A5244] mt-0.5">
                                    {KM_WORK_LOCATION_LINE_JA}（マイカー通勤可・駐車場あり）
                                </span>
                            </dd>
                        </div>
                        <div className="py-3">
                            <dt className="font-bold">雇用主 / Pemberi kerja</dt>
                            <dd className="mt-1">
                                {COMPANY_NAME} / Sugukuru Co., Ltd.（最初の6か月）。就業場所は株式会社鹿児島マテリアル（Kagoshima Material Co., Ltd.）です。
                            </dd>
                        </div>
                    </dl>
                </section>

                {/* CTA */}
                <section className="mt-8 rounded-xl bg-[#14110C] text-white px-6 py-8 text-center">
                    <h2 className="text-lg font-bold">Ada pertanyaan? Hubungi kami</h2>
                    <p lang="ja" className="text-xs text-[#CBBF9F] mt-1">まずはお気軽にお問い合わせください</p>
                    <a
                        href={KM_JOB_CONTACT_PHONE_TEL_URI}
                        className="mt-5 inline-flex flex-col items-center gap-1 rounded-lg bg-[#B8924A] text-[#14110C] px-6 py-4 font-mono text-xl font-semibold"
                    >
                        <span className="flex items-center gap-2">
                            <Phone className="w-5 h-5" /> {KM_JOB_CONTACT_PHONE_DISPLAY}
                        </span>
                        <span className="text-xs font-sans font-bold">
                            Tap untuk menelepon / タップして電話
                        </span>
                    </a>
                </section>

                <p className="mt-6 text-[11px] text-[#5A5244] leading-relaxed">
                    情報公開日 / Tanggal informasi: 2026年8月29日. 直接雇用後の賞与・退職金・定年・通勤手当上限等の具体的条件は、勤務先の正式な労働条件資料が確認でき次第、別途ご案内します。
                </p>
            </div>
        </div>
    );
}
