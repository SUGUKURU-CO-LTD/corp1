import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Wheat } from "lucide-react";
import JobBoard from "@/components/kerja/JobBoard";
import { getKerjaJobs } from "@/lib/kerja/jobs";
import { COMPANY_ADDRESS_LINE_JA } from "@/lib/company";
import { recruitmentChannels } from "@/lib/recruitment-channels";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = {
  ...pageMetadata.kerja,
  openGraph: {
    ...pageMetadata.kerja.openGraph,
    locale: "id_ID",
  },
  alternates: {
    canonical: "https://sugu-kuru.co.jp/kerja",
    languages: {
      id: "https://sugu-kuru.co.jp/kerja",
      ja: "https://sugu-kuru.co.jp/careers",
    },
  },
};

export default function KerjaPage() {
  const jobs = getKerjaJobs();

  return (
    <div className="pt-20">
      {/* Hero — visually continues into JobBoard's VisaPicker (same dark green gradient) */}
      <section className="bg-gradient-to-br from-accent to-accent-dark px-4 pb-10 pt-14 md:pb-14 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium tracking-[0.18em] text-accent uppercase">
            Lowongan Kerja Kantoran
          </p>
          <h1
            className="mt-3 max-w-2xl text-3xl font-bold leading-tight text-white md:text-5xl"
          >
            Untuk orang Indonesia yang sudah tinggal di Jepang.
          </h1>
          <p className="mt-4 max-w-xl leading-7 text-white/80">
            {jobs.length} lowongan kerja kantoran (transfer) dari perusahaan Jepang, dipilih khusus untuk pemegang
            visa Gijinkoku, Eijuu, Teijuu, dan Haiguusha. Gratis — Sugukuru tidak memungut biaya apa pun dari
            pelamar.
          </p>
        </div>
      </section>

      {/* Interactive board: visa filter + job grid + detail sheet (client component) */}
      <JobBoard jobs={jobs} />

      {/* Track for SSW / agriculture visitors who landed here by mistake */}
      <section className="border-t border-line bg-canvas px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-accent/15 bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <Wheat className="mt-0.5 h-6 w-6 flex-shrink-0 text-accent" />
              <div>
                <p className="font-semibold text-ink">
                  Mencari kerja pertanian dengan visa Tokutei Ginou (特定技能)?
                </p>
                <p className="mt-1 text-sm text-ink-muted">
                  Halaman ini khusus untuk transfer kerja kantoran. Untuk lowongan pertanian dan dukungan visa
                  Tokutei Ginou, silakan hubungi kami langsung.
                </p>
              </div>
            </div>
            <a
              href={recruitmentChannels[0].href ?? undefined}
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white hover:bg-accent-dark"
            >
              Hubungi kami
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Legal disclosures — Indonesian primary, Japanese small */}
      <section className="border-t border-line bg-white px-4 py-10 text-sm leading-6 text-ink-muted">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-base font-semibold text-ink">Informasi penting</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              Layanan ini adalah bagian dari izin usaha pengantar kerja berbayar (有料職業紹介事業 46-ユ-300203)
              milik Sugukuru Co., Ltd.
            </li>
            <li>
              Sugukuru <strong>tidak pernah memungut biaya apa pun dari pelamar</strong> (sesuai UU Keamanan Kerja
              Jepang / 職業安定法 32条の3).
            </li>
            <li>
              Nama perusahaan dan detail lengkap lowongan diberitahukan setelah Anda melamar, bukan di halaman
              publik ini.
            </li>
            <li>
              Data lowongan berdasar per {jobs[0]?.reviewedAt ?? "-"} dan ditinjau ulang setiap bulan（職業安定法
              5条の4：的確表示義務）.
            </li>
            <li>Kondisi kerja resmi (gaji, jam kerja, dll.) akan disampaikan secara tertulis saat wawancara.</li>
            <li>Kami tidak menerima permintaan untuk pekerjaan konstruksi lapangan atau bongkar muat pelabuhan.</li>
            <li>
              Perubahan status izin tinggal ditentukan oleh Imigrasi Jepang; kami tidak dapat menjamin
              persetujuannya.
            </li>
            <li>
              Data pribadi Anda dikelola sesuai{" "}
              <Link href="/privacy" className="text-accent underline underline-offset-2">
                Kebijakan Privasi
              </Link>{" "}
              kami.
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link href="/" className="text-ink-muted underline underline-offset-2 hover:text-accent">
              ← Beranda (日本語)
            </Link>
            <Link href="/careers" className="text-ink-muted underline underline-offset-2 hover:text-accent">
              Lowongan staf kantor internal (日本語)
            </Link>
            <Link href="/margin-rate" className="text-ink-muted underline underline-offset-2 hover:text-accent">
              Informasi margin (公開情報)
            </Link>
          </div>

          <footer className="mt-6 border-t border-line pt-5 text-xs leading-6 text-ink-muted">
            Sugukuru Co., Ltd. / スグクル株式会社
            <br />
            Izin: 労働者派遣事業 派46-300262 ／ 有料職業紹介事業 46-ユ-300203
            <br />
            Alamat: {COMPANY_ADDRESS_LINE_JA}
          </footer>
        </div>
      </section>
    </div>
  );
}
