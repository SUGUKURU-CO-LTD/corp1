"use client";

import { prefectureRomaji } from "@/lib/kerja/prefectures";
import { JAPANESE_LEVEL_LABELS } from "@/lib/kerja/labels";
import type { JapaneseLevel } from "@/lib/kerja/types";
import { JAPANESE_LEVEL_ORDER } from "@/lib/kerja/types";

const SALARY_STEPS = [3_000_000, 4_000_000, 5_000_000, 6_000_000];

function formatManYen(yen: number): string {
  return `¥${(yen / 1_000_000).toFixed(0)}jt`;
}

type FilterBarProps = {
  prefectures: { value: string; count: number }[];
  activePrefecture: string | null;
  onSelectPrefecture: (value: string | null) => void;
  activeJapaneseLevel: JapaneseLevel | null;
  onSelectJapaneseLevel: (value: JapaneseLevel | null) => void;
  minSalary: number;
  onSelectMinSalary: (value: number) => void;
  inexperiencedOnly: boolean;
  onToggleInexperiencedOnly: () => void;
};

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`min-h-11 flex-shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? "border-accent bg-accent text-white"
          : "border-gray-200 bg-white text-gray-700 hover:border-accent/50"
      }`}
    >
      {children}
    </button>
  );
}

export default function FilterBar({
  prefectures,
  activePrefecture,
  onSelectPrefecture,
  activeJapaneseLevel,
  onSelectJapaneseLevel,
  minSalary,
  onSelectMinSalary,
  inexperiencedOnly,
  onToggleInexperiencedOnly,
}: FilterBarProps) {
  const topPrefectures = prefectures.slice(0, 10);

  return (
    <div className="sticky top-20 z-30 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Chip active={activePrefecture === null} onClick={() => onSelectPrefecture(null)}>
            Semua Lokasi
          </Chip>
          {topPrefectures.map((p) => (
            <Chip
              key={p.value}
              active={activePrefecture === p.value}
              onClick={() => onSelectPrefecture(activePrefecture === p.value ? null : p.value)}
            >
              {prefectureRomaji(p.value)} <span className="opacity-60">({p.count})</span>
            </Chip>
          ))}
        </div>

        <div className="mt-2 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Chip active={activeJapaneseLevel === null} onClick={() => onSelectJapaneseLevel(null)}>
            Semua Level Bahasa
          </Chip>
          {JAPANESE_LEVEL_ORDER.map((level) => (
            <Chip
              key={level}
              active={activeJapaneseLevel === level}
              onClick={() => onSelectJapaneseLevel(activeJapaneseLevel === level ? null : level)}
            >
              {JAPANESE_LEVEL_LABELS[level].id}
            </Chip>
          ))}
        </div>

        <div className="mt-2 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <Chip active={minSalary === 0} onClick={() => onSelectMinSalary(0)}>
            Semua Gaji
          </Chip>
          {SALARY_STEPS.map((step) => (
            <Chip key={step} active={minSalary === step} onClick={() => onSelectMinSalary(step)}>
              {formatManYen(step)}+/tahun
            </Chip>
          ))}
          <Chip active={inexperiencedOnly} onClick={onToggleInexperiencedOnly}>
            Tanpa Pengalaman OK
          </Chip>
        </div>
      </div>
    </div>
  );
}
