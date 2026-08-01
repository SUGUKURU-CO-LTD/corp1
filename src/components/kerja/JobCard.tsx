"use client";

import Image from "next/image";
import { MapPin, Sparkles } from "lucide-react";
import { JAPANESE_LEVEL_LABELS, SOURCE_LABELS, VISA_TAG_LABELS } from "@/lib/kerja/labels";
import { occupationPhoto } from "@/lib/kerja/occupation-photos";
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
      className="flex w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#1B5E38]/40 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full flex-shrink-0 bg-gray-100">
        <Image
          src={occupationPhoto(job.occupationJa)}
          alt={job.occupationId}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        {job.inexperiencedOk && (
          <span className="absolute right-3 top-3 rounded-full bg-[#D4A853] px-2.5 py-1 text-xs font-semibold text-[#1A1A1A] shadow">
            <Sparkles className="mr-1 inline h-3 w-3" />
            Pemula OK
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-snug text-[#1A1A1A]">{job.occupationId}</h3>
        <p className="mt-0.5 text-xs text-gray-400">{job.occupationJa}</p>

        <p className="mt-3 text-xl font-bold text-[#1B5E38]">
          {formatYen(job.annualSalaryMin)} – {formatYen(job.annualSalaryMax)}
          <span className="ml-1 text-sm font-normal text-gray-500">/tahun</span>
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-1.5 text-sm text-gray-600">
          <MapPin className="h-4 w-4 text-gray-400" />
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
          <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
            {JAPANESE_LEVEL_LABELS[job.japaneseLevel].id}
          </span>
          {job.visaTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#1B5E38]/10 px-2.5 py-1 text-xs font-medium text-[#1B5E38]"
            >
              {VISA_TAG_LABELS[tag].id}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-[11px] text-gray-400">
          <span>Sumber: {SOURCE_LABELS[job.source]}</span>
          <span>Diperbarui: {job.reviewedAt}</span>
        </div>
      </div>
    </button>
  );
}
