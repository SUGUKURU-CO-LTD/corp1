import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Users, MapPin, Clock } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { IS_KM_GIJINKOKU_JOBS_PUBLISHED } from "@/lib/feature-flags";
import { COMPANY_NAME } from "@/lib/company";
import {
    KM_WORK_LOCATION_LINE_JA,
    KM_WORK_LOCATION_LINE_ID,
    KM_JOB_CONTACT_PHONE_DISPLAY,
    KM_JOB_CONTACT_PHONE_TEL_URI,
    KM_HOURLY_WAGE_JPY,
    KM_WORK_START_MONTH_ID,
    KM_WORK_START_MONTH_JA,
} from "@/lib/jobs/kagoshima-material";

// 参照HTML `sugukuru_job_posting_gijinkoku_kmaterial_v1.html` は条件・構成・配色の
// 参考資料であり、本ページはその内容を精査・修正のうえ独自に実装したものです。
// 掲載していない情報（直接雇用後の賞与額・退職金制度・定年年齢・通勤手当上限等）は、
// 鹿児島マテリアルの正式な労働条件資料が確認できていないため、意図的に省略しています。

const baseMetadata = generatePageMetadata({
    title: "鹿児島マテリアル 技術・人文知識・国際業務 求人",
    description:
        "株式会社鹿児島マテリアルでの品質管理・生産工程管理、通訳・翻訳／労務コーディネートの求人案内（技術・人文知識・国際業務）。インドネシア語対応可。",
    keywords: "求人, 鹿児島マテリアル, 技術・人文知識・国際業務, 品質管理, 通訳, インドネシア語",
    path: "/jobs/kagoshima-material-gijinkoku",
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
        canonical: "https://sugu-kuru.co.jp/jobs/kagoshima-material-gijinkoku",
    },
};

export default function KagoshimaMaterialGijinkokuPage() {
    return (
        <div className="pt-20 bg-[#FAF7F0]">
            <div lang="id" className="mx-auto max-w-3xl px-5 pb-16">
                {/* Header */}
                <header className="pt-10">
                    <p className="text-xs font-semibold tracking-[0.2em] text-[#B8924A] uppercase">
                        Sugukuru × Kagoshima Material
                    </p>
                    <h1
                        className="mt-3 text-2xl md:text-3xl font-bold text-[#1F1B16] leading-snug"
                        style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                    >
                        Bekerja Sebagai Tenaga Profesional
                    </h1>
                    <p lang="ja" className="mt-2 text-sm text-[#5A5244]">
                        専門職として働きませんか（技術・人文知識・国際業務）
                    </p>

                    <div className="mt-5 rounded-xl bg-[#8B1A1A] text-white px-4 py-4 text-sm leading-relaxed">
                        <p>
                            Untuk pemegang visa Gijinkoku (Teknik/Pengetahuan Humaniora/Bisnis
                            Internasional): ① Anda yang saat ini sudah tinggal di Jepang, ②{" "}
                            {KM_WORK_START_MONTH_ID}. Lamaran dari luar negeri tidak diterima.
                        </p>
                        <p lang="ja" className="mt-2 text-[#F3DEDE] text-xs">
                            対象：技術・人文知識・国際業務（技人国）ビザをお持ちで、①現在日本にお住まいの方
                            ②{KM_WORK_START_MONTH_JA}。海外からの応募は受け付けていません。
                        </p>
                    </div>

                    <div className="mt-4 rounded-xl bg-[rgba(62,107,79,.1)] border-l-4 border-[#3E6B4F] px-4 py-3 text-sm">
                        <p>
                            <span className="font-bold">
                                Ada sekitar 40 rekan dari Indonesia di tempat kerja ini.
                            </span>{" "}
                            Anda bisa berkonsultasi dalam bahasa Indonesia.
                        </p>
                        <p lang="ja" className="mt-1 text-[#5A5244] text-xs">
                            約40名のインドネシア人スタッフが勤務しています。インドネシア語で相談できます。
                        </p>
                    </div>
                </header>

                {/* 職種比較 */}
                <nav className="mt-8 grid gap-3 sm:grid-cols-2">
                    <Link
                        href="/jobs/kagoshima-material-quality-control"
                        className="block rounded-xl border border-[rgba(31,27,22,.14)] bg-white px-4 py-4 hover:border-[#B8924A] transition-colors"
                    >
                        <span className="block text-[10px] font-mono tracking-[0.16em] text-[#B8924A]">
                            POSITION 01
                        </span>
                        <span className="block mt-1 font-bold text-[#1F1B16]">
                            Manajemen Kualitas &amp; Proses Produksi
                        </span>
                        <span lang="ja" className="block mt-0.5 text-xs text-[#5A5244]">
                            品質管理・生産工程管理
                        </span>
                        <span className="block mt-2 font-mono text-sm font-bold text-[#8B1A1A]">
                            Upah mulai ¥{KM_HOURLY_WAGE_JPY.toLocaleString("ja-JP")}/jam
                        </span>
                    </Link>
                    <Link
                        href="/jobs/kagoshima-material-interpreter"
                        className="block rounded-xl border border-[rgba(31,27,22,.14)] bg-white px-4 py-4 hover:border-[#B8924A] transition-colors"
                    >
                        <span className="block text-[10px] font-mono tracking-[0.16em] text-[#B8924A]">
                            POSITION 02
                        </span>
                        <span className="block mt-1 font-bold text-[#1F1B16]">
                            Penerjemah &amp; Koordinator Ketenagakerjaan
                        </span>
                        <span lang="ja" className="block mt-0.5 text-xs text-[#5A5244]">
                            通訳・翻訳／労務コーディネート
                        </span>
                        <span className="block mt-2 font-mono text-sm font-bold text-[#8B1A1A]">
                            Upah mulai ¥{KM_HOURLY_WAGE_JPY.toLocaleString("ja-JP")}/jam
                        </span>
                    </Link>
                </nav>

                {/* 共通勤務条件 */}
                <section className="mt-10 rounded-xl bg-white border border-[rgba(31,27,22,.1)] overflow-hidden">
                    <div className="bg-[#14110C] text-white px-5 py-4">
                        <h2 className="font-bold">
                            Kondisi Kerja (sama untuk kedua lowongan)
                        </h2>
                        <p lang="ja" className="mt-1 text-xs text-[#CBBF9F]">
                            勤務先での就業条件（2求人共通）
                        </p>
                    </div>
                    <dl className="px-5 py-4 text-sm divide-y divide-[rgba(31,27,22,.08)]">
                        <div className="py-3 flex items-start gap-3">
                            <MapPin className="w-4 h-4 mt-0.5 text-[#B8924A] flex-shrink-0" />
                            <div>
                                <p>{KM_WORK_LOCATION_LINE_ID}</p>
                                <p lang="ja" className="text-xs text-[#5A5244] mt-0.5">
                                    {KM_WORK_LOCATION_LINE_JA}（マイカー通勤可・駐車場あり）
                                </p>
                            </div>
                        </div>
                        <div className="py-3 flex items-start gap-3">
                            <Clock className="w-4 h-4 mt-0.5 text-[#B8924A] flex-shrink-0" />
                            <div>
                                <p>Shift siang 08:00–17:00 / shift malam 20:00–05:00 (masing-masing setengah)</p>
                                <p lang="ja" className="text-xs text-[#5A5244] mt-0.5">
                                    交替制：昼勤8:00〜17:00／夜勤20:00〜5:00（実働8時間・休憩1時間、昼夜半分ずつ）。残業月平均約20時間。年間休日105日。
                                </p>
                            </div>
                        </div>
                        <div className="py-3 flex items-start gap-3">
                            <Users className="w-4 h-4 mt-0.5 text-[#B8924A] flex-shrink-0" />
                            <div>
                                <p>
                                    6 bulan pertama: karyawan penyaluran dengan rencana perekrutan
                                    langsung (haken) dari {COMPANY_NAME} / Sugukuru Co., Ltd.
                                </p>
                                <p lang="ja" className="text-xs text-[#5A5244] mt-0.5">
                                    最初の6か月は{COMPANY_NAME}の紹介予定派遣社員として勤務します。6か月後、勤務状況が良好であり、本人と株式会社鹿児島マテリアル双方が合意した場合、直接雇用へ移行する可能性があります。直接雇用は自動的に保証されるものではありません。
                                </p>
                            </div>
                        </div>
                    </dl>
                    <div className="px-5 pb-5">
                        <p className="text-xs text-[#5A5244] leading-relaxed">
                            Perkiraan penghasilan bulanan sekitar ¥289.000 (bruto sebelum
                            pemotongan) mengasumsikan 173,3 jam kerja pokok, 20 jam lembur, dan
                            sekitar setengah shift malam. Jumlah sebenarnya berubah sesuai hari
                            kerja, jumlah shift malam, dan jam lembur — ini bukan jumlah yang
                            dijamin.
                        </p>
                        <p lang="ja" className="text-xs text-[#5A5244] mt-1 leading-relaxed">
                            月収目安 約28.9万円は、月173.3時間（基本給）・残業20時間・夜勤が約半分であることを仮定した控除前の総支給概算です。実際の金額は勤務日数・夜勤の回数・残業時間で変動し、保証額ではありません。
                        </p>
                    </div>
                </section>

                {/* 在留資格の考え方 */}
                <section className="mt-8 rounded-xl bg-white border border-[rgba(31,27,22,.1)] px-5 py-5">
                    <h2 className="font-bold text-[#1F1B16]">
                        Tentang Status Tinggal (Visa)
                    </h2>
                    <p lang="ja" className="text-xs text-[#5A5244] mt-1">
                        在留資格（ビザ）についての考え方
                    </p>
                    <p className="mt-3 text-sm leading-relaxed">
                        Sehubungan dengan pindah kerja, pada prinsipnya diperlukan pelaporan
                        resmi ke Badan Layanan Imigrasi terkait berakhirnya kontrak lama dan
                        dimulainya kontrak baru (pada umumnya dalam 14 hari). Pelaporan ini
                        adalah kewajiban administratif terkait lembaga tempat bekerja, dan{" "}
                        <b>bukan berarti Anda otomatis boleh langsung bekerja tanpa
                        pemeriksaan lebih lanjut</b>. Apakah isi pekerjaan yang baru termasuk
                        dalam cakupan aktivitas status tinggal Anda akan dikonfirmasi secara
                        individual berdasarkan isi pekerjaan, riwayat pendidikan, dan riwayat
                        kerja Anda. Jika diperlukan, kami akan memandu Anda mengenai Sertifikat
                        Kelayakan Kerja (Shurou Shikaku Shoumeisho) dan dokumen terkait
                        lainnya. Sugukuru Co., Ltd. tidak menjamin hasil pemeriksaan status
                        tinggal oleh otoritas imigrasi.
                    </p>
                    <p lang="ja" className="mt-3 text-xs text-[#5A5244] leading-relaxed">
                        転職に伴い、旧契約の終了および新たな契約の締結について、出入国在留管理庁への届出（原則14日以内）が必要です。この届出は契約機関に関する届出義務であり、届出をすれば直ちに就労が認められるという意味ではありません。新しい仕事内容が現在の在留資格の活動範囲に該当するかは、仕事内容・学歴・職歴等を個別に確認します。必要に応じて就労資格証明書等をご案内します。スグクル株式会社が在留資格の審査結果を保証するものではありません。
                    </p>
                </section>

                {/* CTA */}
                <section className="mt-8 rounded-xl bg-[#14110C] text-white px-6 py-8 text-center">
                    <h2 className="text-xl font-bold">Silakan hubungi kami tanpa ragu</h2>
                    <p lang="ja" className="text-xs text-[#CBBF9F] mt-1">
                        まずは気軽にご連絡ください
                    </p>
                    <p className="mt-4 text-sm text-[#E3D9C6] leading-relaxed">
                        Kami dapat melayani dalam bahasa Indonesia. Jika Anda belum yakin
                        pekerjaan mana yang cocok, silakan berkonsultasi saja — tidak masalah.
                        Dokumen (termasuk Kartu Izin Tinggal) akan kami minta setelah
                        konsultasi awal, melalui prosedur yang aman.
                    </p>
                    <a
                        href={KM_JOB_CONTACT_PHONE_TEL_URI}
                        className="mt-6 inline-flex flex-col items-center gap-1 rounded-lg bg-[#B8924A] text-[#14110C] px-6 py-4 font-mono text-xl font-semibold"
                    >
                        <span className="flex items-center gap-2">
                            <Phone className="w-5 h-5" /> {KM_JOB_CONTACT_PHONE_DISPLAY}
                        </span>
                        <span className="text-xs font-sans font-bold">
                            Tap untuk menelepon / タップして電話
                        </span>
                    </a>
                    <p className="mt-4 text-xs text-[#9E937F]">
                        まずは電話でのご相談から。求人ページからの応募フォームは現在ご用意していません。
                    </p>
                </section>

                <footer className="mt-8 text-xs text-[#5A5244] leading-relaxed border-t border-[rgba(31,27,22,.1)] pt-4">
                    <p>
                        Informasi ini adalah panduan perekrutan yang dibuat oleh Sugukuru Co.,
                        Ltd. 6 bulan pertama merupakan penyaluran dengan rencana perekrutan
                        langsung; perekrutan langsung setelah 6 bulan ditentukan melalui
                        kesepakatan dengan tempat kerja (Kagoshima Material Co., Ltd.).
                        Kelayakan status tinggal ditentukan oleh pemeriksaan Badan Layanan
                        Imigrasi, dan kami tidak menjamin hasilnya.
                    </p>
                    <p lang="ja" className="mt-2">
                        本ページはスグクル株式会社が作成した募集案内です。雇用形態は最初の6か月がスグクル株式会社の紹介予定派遣、6か月後の直接雇用は勤務先（株式会社鹿児島マテリアル）との合意によります。在留資格の該非は出入国在留管理庁の審査によるもので、当社が結果を保証するものではありません。賞与・退職金・通勤手当上限等の直接雇用後の具体的条件は、勤務先の正式な資料が確認でき次第、別途ご案内します。
                    </p>
                </footer>
            </div>
        </div>
    );
}
