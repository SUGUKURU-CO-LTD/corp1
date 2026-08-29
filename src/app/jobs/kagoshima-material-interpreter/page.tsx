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
// 「通訳・翻訳／労務コーディネート」求人部分を精査・修正のうえ独自に実装。
// 参照HTMLにあった、出生・国籍に基づく言語要件の表現は使用せず、
// 業務上必要な言語能力（インドネシア語を業務で使用できること）として要件化している。
// 直接雇用後の具体的条件・労働者派遣事業許可番号は掲載しない（理由は品質管理ページと同じ）。

const JOB_TITLE_JA = "通訳・翻訳／外国人スタッフの労務コーディネート";
const JOB_TITLE_ID =
    "Penerjemah & Interpreter / Koordinator Ketenagakerjaan Staf Asing";

const JOB_DESCRIPTION_JA =
    "株式会社鹿児島マテリアル（電子部品・半導体関連製品メーカー）での通訳・翻訳、シフト作成・勤怠取りまとめ、インドネシアの送出機関との連絡調整を担当する専門職求人（約40名の外国人スタッフを支援）。技術・人文知識・国際業務の在留資格に対応。インドネシア語を業務で使用できる方が対象で、国籍は問いません。最初の6か月はスグクル株式会社の紹介予定派遣、その後、双方合意のうえ直接雇用へ移行する可能性があります。時給1,350円から。";

const baseMetadata = generatePageMetadata({
    title: "通訳・翻訳／労務コーディネート 求人｜鹿児島マテリアル",
    description: JOB_DESCRIPTION_JA,
    keywords: "求人, 通訳, 翻訳, 労務コーディネート, 鹿児島マテリアル, 技術・人文知識・国際業務",
    path: "/jobs/kagoshima-material-interpreter",
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
        canonical: "https://sugu-kuru.co.jp/jobs/kagoshima-material-interpreter",
    },
};

export default function KagoshimaMaterialInterpreterPage() {
    return (
        <div className="pt-20 bg-[#FAF7F0]">
            {/* JobPosting構造化データ（SSR・1ページ1求人。next/scriptは使用しない） */}
            <JobPostingSchema
                id="interpreter"
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
                        Position 02
                    </p>
                    <h1
                        className="mt-2 text-xl md:text-2xl font-bold text-[#1F1B16] leading-snug"
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
                            <b>Penerjemahan &amp; interpretasi</b> untuk sekitar 40 staf asing
                            di tempat kerja — instruksi kerja, pendidikan keselamatan,
                            wawancara, penerjemahan prosedur kerja &amp; dokumen internal
                            <p lang="ja" className="text-xs text-[#5A5244] mt-0.5">
                                約40名の外国人スタッフへの通訳・翻訳：作業指示、安全教育、面談、作業手順書や社内文書の翻訳
                            </p>
                        </li>
                        <li>
                            <b>Manajemen shift</b> — penyusunan &amp; penyesuaian jadwal kerja,
                            rekapitulasi absensi
                            <p lang="ja" className="text-xs text-[#5A5244] mt-0.5">
                                シフト管理：勤務表の作成・調整、勤怠のとりまとめ
                            </p>
                        </li>
                        <li>
                            <b>Komunikasi &amp; koordinasi dengan lembaga pengirim</b> di
                            Indonesia — korespondensi terkait calon peserta, pemeriksaan dokumen
                            <p lang="ja" className="text-xs text-[#5A5244] mt-0.5">
                                インドネシアの送出機関との連絡・調整：受入予定者に関するやり取り、書類の確認
                            </p>
                        </li>
                        <li>
                            Pekerjaan administrasi yang menyertai hal di atas
                            <p lang="ja" className="text-xs text-[#5A5244] mt-0.5">
                                上記に付随する事務の仕事
                            </p>
                        </li>
                    </ul>
                    <div className="mt-4 rounded-lg bg-[rgba(62,107,79,.09)] border-l-4 border-[#3E6B4F] px-4 py-3 text-sm">
                        <p>
                            Anda menangani shift siang dan malam masing-masing setengah,
                            karena Anda mendukung rekan-rekan yang bekerja di kedua shift.
                            Anda menjadi penghubung utama antara lapangan dan perusahaan untuk
                            sekitar 40 staf asing.
                        </p>
                        <p lang="ja" className="text-xs text-[#5A5244] mt-1">
                            昼勤・夜勤を半分ずつ担当します。両方のシフトで働くスタッフを支えるためです。約40名の外国人スタッフと現場・会社をつなぐ中心的な役割を担います。
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
                            Pekerjaan penerjemahan/interpretasi termasuk kategori &quot;Bisnis
                            Internasional&quot;. Bagi lulusan universitas, pengalaman kerja
                            tidak diperlukan, namun <b>bukti kemampuan bahasa Jepang wajib
                            ada</b>.
                        </p>
                        <p lang="ja" className="text-xs text-[#5A5244] mt-1">
                            通訳・翻訳の仕事は「国際業務」にあたります。大学を卒業していれば実務経験は不要ですが、日本語能力の証明が必須です。
                        </p>
                    </div>

                    <dl className="mt-4 divide-y divide-[rgba(31,27,22,.08)] text-sm">
                        <div className="py-3">
                            <dt className="font-bold">Pendidikan (wajib)</dt>
                            <dd lang="ja" className="text-xs text-[#5A5244] italic">学歴（必須）</dd>
                            <dd className="mt-1">
                                Lulusan universitas (S1) atau D3 ke atas. Fakultas &amp; jurusan
                                bebas (karena ini pekerjaan penerjemahan/interpretasi).
                            </dd>
                        </div>
                        <div className="py-3">
                            <dt className="font-bold">Kemampuan bahasa Indonesia</dt>
                            <dd lang="ja" className="text-xs text-[#5A5244] italic">インドネシア語能力</dd>
                            <dd className="mt-1">
                                Mampu menggunakan bahasa Indonesia secara profesional dalam
                                pekerjaan.
                                <span lang="ja" className="block text-xs text-[#5A5244] mt-0.5">
                                    インドネシア語を業務で使用できる方（国籍は問いません）
                                </span>
                            </dd>
                        </div>
                        <div className="py-3">
                            <dt className="font-bold">Bahasa Jepang (wajib)</dt>
                            <dd lang="ja" className="text-xs text-[#5A5244] italic">日本語（必須）</dd>
                            <dd className="mt-1">
                                JLPT N2 ke atas, BJT 400 poin ke atas, atau dokumen setara CEFR
                                B2 yang diakui dalam prosedur terkait akan dikonfirmasi secara
                                individual (perlu sertifikat/bukti kelulusan).
                                <span lang="ja" className="block text-xs text-[#5A5244] mt-1">
                                    JLPT N2以上、BJT 400点以上、または対象となる手続で認められるCEFR B2相当資料等を個別確認します（合格証明書等が必要です）。
                                </span>
                            </dd>
                        </div>
                        <div className="py-3">
                            <dt className="font-bold">Pengalaman kerja</dt>
                            <dd lang="ja" className="text-xs text-[#5A5244] italic">実務経験</dd>
                            <dd className="mt-1">
                                Tidak diperlukan bagi lulusan universitas. Jika bukan lulusan
                                universitas, diperlukan pengalaman kerja terkait (penerjemahan/
                                interpretasi, dll.) 3 tahun atau lebih.
                            </dd>
                        </div>
                        <div className="py-3">
                            <dt className="font-bold">Status tinggal saat ini</dt>
                            <dd lang="ja" className="text-xs text-[#5A5244] italic">現在の在留資格</dd>
                            <dd className="mt-1">
                                Bagi pemegang &quot;Gijinkoku&quot; yang pindah kerja, pada
                                prinsipnya diperlukan pelaporan resmi (umumnya dalam 14 hari)
                                terkait lembaga tempat bekerja. Pelaporan ini bukan berarti Anda
                                otomatis boleh bekerja tanpa pemeriksaan. Pemegang status
                                tinggal lain silakan berkonsultasi.
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
                                Kartu Izin Tinggal / ijazah / sertifikat kelulusan JLPT N2 ke
                                atas (atau dokumen setara di atas) / paspor
                            </dd>
                        </div>
                        <div className="py-3">
                            <dt className="font-bold">Pengalaman yang diutamakan</dt>
                            <dd lang="ja" className="text-xs text-[#5A5244] italic">歓迎する経験</dd>
                            <dd className="mt-1">
                                Pengalaman menjadi penerjemah di lapangan kerja / pengalaman
                                administrasi SDM / pengalaman mengelola absensi dengan Excel
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
