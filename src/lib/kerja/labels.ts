// /kerja UI表示用のラベル辞書（インドネシア語主・日本語小）
// Label dictionary for the /kerja UI (Indonesian primary, Japanese secondary)
// Kamus label untuk UI /kerja (Indonesia utama, Jepang kecil)
import type { JapaneseLevel, JobSource, VisaTag } from "./types";

export const VISA_TAG_LABELS: Readonly<Record<VisaTag, { id: string; ja: string }>> = {
  gijinkoku: { id: "Insinyur/Spesialis (Gijinkoku)", ja: "技術・人文知識・国際業務" },
  eijuu: { id: "Penduduk Tetap (Eijuu)", ja: "永住者" },
  teijuu: { id: "Penduduk Berjangka (Teijuu)", ja: "定住者" },
  haiguusha: { id: "Pasangan (Haiguusha)", ja: "配偶者等" },
};

export const JAPANESE_LEVEL_LABELS: Readonly<Record<JapaneseLevel, { id: string; ja: string }>> = {
  none: { id: "Tidak disyaratkan", ja: "不問" },
  conversational: { id: "Percakapan sehari-hari", ja: "日常会話" },
  business: { id: "Level bisnis", ja: "ビジネスレベル" },
};

export const SOURCE_LABELS: Readonly<Record<JobSource, string>> = {
  zcareer: "Zキャリア",
  exord: "エクスオード",
};
