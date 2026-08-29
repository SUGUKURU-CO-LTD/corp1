"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Mail, MapPin, Phone, X } from "lucide-react";
import { useEffect } from "react";
import { recruitmentChannels } from "@/lib/recruitment-channels";
import { JAPANESE_LEVEL_LABELS, SOURCE_LABELS, VISA_TAG_LABELS } from "@/lib/kerja/labels";
import { jobPhoto } from "@/lib/kerja/job-photos";
import { prefectureRomaji } from "@/lib/kerja/prefectures";
import type { KerjaJob } from "@/lib/kerja/types";

function formatYen(amount: number): string {
  return `¥${amount.toLocaleString("ja-JP")}`;
}

const CHANNEL_ICONS = { email: Mail, phone: Phone, whatsapp: Phone, line: Phone } as const;

type JobDetailSheetProps = {
  job: KerjaJob | null;
  onClose: () => void;
};

export default function JobDetailSheet({ job, onClose }: JobDetailSheetProps) {
  useEffect(() => {
    if (!job) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [job, onClose]);

  return (
    <AnimatePresence>
      {job && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center md:items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50"
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="kerja-job-detail-title"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="relative z-10 max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white shadow-2xl md:max-h-[80vh] md:rounded-3xl"
          >
            <div className="relative aspect-[16/9] w-full flex-shrink-0 bg-gray-100">
              <Image
                src={jobPhoto(job.id)}
                alt={job.occupationId}
                fill
                sizes="(min-width: 768px) 512px, 100vw"
                className="rounded-t-3xl object-cover md:rounded-t-3xl"
                priority
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow hover:bg-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6">
              <h2 id="kerja-job-detail-title" className="text-xl font-bold text-ink">
                {job.occupationId}
              </h2>
              <p className="mt-0.5 text-sm text-gray-400">{job.occupationJa}</p>

              <p className="mt-4 text-2xl font-bold text-accent">
                {formatYen(job.annualSalaryMin)} – {formatYen(job.annualSalaryMax)}
                <span className="ml-1 text-base font-normal text-gray-500">/tahun</span>
              </p>

              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                  <span className="text-gray-700">
                    {job.remote
                      ? "Remote (Seluruh Jepang)"
                      : job.prefectures.map((p) => prefectureRomaji(p)).join(", ")}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                    {JAPANESE_LEVEL_LABELS[job.japaneseLevel].id}
                  </span>
                  {job.inexperiencedOk && (
                    <span className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent-strong">
                      Tanpa Pengalaman OK
                    </span>
                  )}
                  {job.visaTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                    >
                      {VISA_TAG_LABELS[tag].id}
                    </span>
                  ))}
                </div>
              </dl>

              <div className="mt-5 rounded-xl border border-gray-200 bg-canvas px-4 py-3 text-xs leading-6 text-gray-600">
                Nama perusahaan akan diberitahukan setelah Anda melamar. Sugukuru{" "}
                <strong>tidak memungut biaya apa pun dari pelamar</strong> (izin 有料職業紹介事業 46-ユ-300203).
                Sumber: {SOURCE_LABELS[job.source]} · Diperbarui: {job.reviewedAt}
              </div>

              <p className="mt-5 text-sm font-semibold text-ink">Cara melamar</p>
              <div className="mt-2 space-y-2">
                {recruitmentChannels.map((channel) => {
                  const Icon = CHANNEL_ICONS[channel.id];
                  if (channel.comingSoon || !channel.href) {
                    return (
                      <div
                        key={channel.id}
                        className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-400"
                      >
                        <span className="flex items-center gap-2">
                          <Icon className="h-4 w-4" />
                          {channel.labelId}
                        </span>
                        <span>Segera dibuka</span>
                      </div>
                    );
                  }
                  const href =
                    channel.id === "email"
                      ? `${channel.href}?subject=${encodeURIComponent(`Lamaran #${job.id}`)}`
                      : channel.href;
                  return (
                    <a
                      key={channel.id}
                      href={href}
                      className="flex items-center justify-between gap-3 rounded-xl border border-accent/30 bg-accent/5 px-4 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        {channel.labelId}
                      </span>
                      <span>{channel.display}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
