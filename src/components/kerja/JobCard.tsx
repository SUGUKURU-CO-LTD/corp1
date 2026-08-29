"use client";

import Image from "next/image";
import { MapPin, Sparkles } from "lucide-react";
import { JAPANESE_LEVEL_LABELS, SOURCE_LABELS, VISA_TAG_LABELS } from "@/lib/kerja/labels";
import { jobPhoto } from "@/lib/kerja/job-photos";
import { prefectureRomaji } from "@/lib/kerja/prefectures";
import type { KerjaJob } from "@/lib/kerja/types";

function formatYen(amount: number): string {
  return `¥${amount.toLocaleString("ja-JP")}`;
}

type JobCardProps = {
  job: KerjaJob;
  onOpen: (job: KerjaJob) => void;
};

export default function JobCard({ job, onOpen }: JobCardProps) {
  const shownPrefectures = job.prefectures.slice(0, 2);
  const extraPrefectureCount = job.prefectures.length - shownPrefectures.length;

  return (
    <button
      type="button"
      onClick={() => onOpen(job)}
      className="flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-white text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full flex-shrink-0 bg-canvas">
        <Image
          src={jobPhoto(job.id)}
          alt={job.occupationId}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        {job.inexperiencedOk && (
          <span className="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-on-accent shadow">
            <Sparkles className="mr-1 inline h-3 w-3" />
            Pemula OK
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-snug text-ink">{job.occupationId}</h3>
        <p className="mt-0.5 text-xs text-ink-muted">{job.occupationJa}</p>

        <p className="mt-3 text-xl font-bold text-accent">
          {formatYen(job.annualSalaryMin)} – {formatYen(job.annualSalaryMax)}
          <span className="ml-1 text-sm font-normal text-ink-muted">/tahun</span>
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-1.5 text-sm text-ink-muted">
          <MapPin className="h-4 w-4 text-ink-muted" />
          {job.remote ? (
            <span>Remote (Seluruh Jepang)</span>
          ) : (
            <span>
              {shownPrefectures.map((p) => prefectureRomaji(p)).join(", ")}
              {extraPrefectureCount > 0 && ` +${extraPrefectureCount}`}
            </span>
          )}
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-ink">
            {JAPANESE_LEVEL_LABELS[job.japaneseLevel].id}
          </span>
          {job.visaTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
            >
              {VISA_TAG_LABELS[tag].id}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-line pt-3 text-[11px] text-ink-muted">
          <span>Sumber: {SOURCE_LABELS[job.source]}</span>
          <span>Diperbarui: {job.reviewedAt}</span>
        </div>
      </div>
    </button>
  );
}
