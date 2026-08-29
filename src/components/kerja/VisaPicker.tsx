"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { VISA_TAG_LABELS } from "@/lib/kerja/labels";
import type { VisaTag } from "@/lib/kerja/types";
import { VISA_TAG_ORDER } from "@/lib/kerja/types";

type OtherStatus = { id: string; labelId: string; labelJa: string };

const OTHER_STATUSES: OtherStatus[] = [
  { id: "ssw", labelId: "Tokutei Ginou (Specified Skilled Worker)", labelJa: "特定技能" },
  { id: "ginou-jisshu", labelId: "Ginou Jisshu (Pelatihan Teknis)", labelJa: "技能実習" },
  { id: "ryuugaku", labelId: "Ryuugaku (Pelajar)", labelJa: "留学" },
];

type VisaPickerProps = {
  activeTags: VisaTag[];
  onToggle: (tag: VisaTag) => void;
  otherStatusSelected: boolean;
  onSelectOtherStatus: () => void;
};

export default function VisaPicker({
  activeTags,
  onToggle,
  otherStatusSelected,
  onSelectOtherStatus,
}: VisaPickerProps) {
  return (
    <div>
      <p className="text-sm font-semibold tracking-wide text-white/80">Status izin tinggal Anda?</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {VISA_TAG_ORDER.map((tag) => {
          const active = activeTags.includes(tag);
          return (
            <button
              key={tag}
              type="button"
              onClick={() => onToggle(tag)}
              aria-pressed={active}
              className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                active
                  ? "border-accent bg-accent text-ink"
                  : "border-white/30 bg-white/5 text-white hover:border-white/60"
              }`}
            >
              {VISA_TAG_LABELS[tag].id}
              <span className="ml-1.5 text-xs opacity-70">({VISA_TAG_LABELS[tag].ja})</span>
            </button>
          );
        })}
        <button
          type="button"
          onClick={onSelectOtherStatus}
          aria-pressed={otherStatusSelected}
          className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
            otherStatusSelected
              ? "border-accent bg-accent text-ink"
              : "border-dashed border-white/30 bg-transparent text-white/70 hover:border-white/60"
          }`}
        >
          Status lain
        </button>
      </div>

      {otherStatusSelected && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 rounded-2xl border border-white/15 bg-white/10 p-4 text-sm leading-6 text-white/90"
        >
          <div className="flex gap-2">
            <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
            <div>
              <p className="font-semibold text-white">
                Lowongan di halaman ini untuk pemegang: {VISA_TAG_ORDER.map((t) => VISA_TAG_LABELS[t].id).join(", ")}.
              </p>
              <p className="mt-2">
                Jika status Anda saat ini adalah{" "}
                {OTHER_STATUSES.map((s, i) => (
                  <span key={s.id}>
                    {i > 0 && ", "}
                    {s.labelId}
                    <span className="text-white/60"> ({s.labelJa})</span>
                  </span>
                ))}
                , Anda perlu <strong>mengganti status izin tinggal</strong> terlebih dahulu sebelum bisa melamar
                pekerjaan kantoran (transfer) di halaman ini. Perubahan status ditentukan oleh Imigrasi Jepang dan
                tidak dijamin disetujui.
              </p>
              <p className="mt-2">
                Hubungi kami untuk konsultasi jalur khusus (特定技能 pertanian / 農業) atau jalur transfer status —
                gunakan tombol kontak di bagian bawah halaman ini.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
