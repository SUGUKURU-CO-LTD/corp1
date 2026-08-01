// Zキャリア occupation_category（24種）の日本語→インドネシア語 対訳辞書
// Japanese-to-Indonesian dictionary for the 24 Zキャリア occupation categories
// Kamus Jepang-Indonesia untuk 24 kategori occupation_category Zキャリア
//
// occupation_category は自由記述ではなく固定選択肢のため、静的辞書（JSON）で対応できる。
// occupation_category is a fixed set of options (not free text), so a static JSON
// dictionary can cover all values. scripts/seed-kerja-jobs.mjs も同じJSONを参照する。
// occupation_category adalah pilihan tetap (bukan teks bebas), sehingga kamus JSON statis
// dapat mencakup semua nilai. scripts/seed-kerja-jobs.mjs juga merujuk ke JSON yang sama.
import occupationMap from "./occupation-map.json";

const OCCUPATION_ID_JA: Readonly<Record<string, string>> = occupationMap;

/**
 * 辞書に無い occupation_category が来た場合のフォールバック
 * Fallback for an occupation_category not covered by the dictionary
 * Fallback untuk occupation_category yang tidak tercakup kamus
 */
export function occupationIdLabel(occupationJa: string): string {
  return OCCUPATION_ID_JA[occupationJa] ?? occupationJa;
}
