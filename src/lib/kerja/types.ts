// /kerja 求人ボードの型定義
// Type definitions for the /kerja job board
// Definisi tipe untuk papan lowongan /kerja

/**
 * 受け入れ在留資格タグ
 * Accepted residence status tags
 * Tag status izin tinggal yang diterima
 */
export type VisaTag = "gijinkoku" | "eijuu" | "teijuu" | "haiguusha";

/**
 * 必要な日本語レベル
 * Required Japanese level
 * Tingkat bahasa Jepang yang dibutuhkan
 */
export type JapaneseLevel = "none" | "conversational" | "business";

/**
 * 求人データの出典
 * Job data source
 * Sumber data lowongan
 */
export type JobSource = "zcareer" | "exord";

/**
 * 求人1件分のデータ（会社名・求人URLは含めない）
 * A single job listing (company name and job URL are intentionally excluded)
 * Satu data lowongan (nama perusahaan dan URL lowongan sengaja tidak disertakan)
 */
export type KerjaJob = {
  /** 例: "z-0031" | "x-0001" / e.g. "z-0031" | "x-0001" / mis. "z-0031" | "x-0001" */
  id: string;
  source: JobSource;
  occupationJa: string;
  /** 静的辞書から解決される対訳 / Resolved from the static dictionary / Diselesaikan dari kamus statis */
  occupationId: string;
  /** 会社名は入れない。将来インドネシア語の一言補足を入れる場合のみ使用 */
  industryJa: string | null;
  prefectures: string[];
  remote: boolean;
  annualSalaryMin: number;
  annualSalaryMax: number;
  visaTags: VisaTag[];
  japaneseLevel: JapaneseLevel;
  inexperiencedOk: boolean;
  /** 的確表示義務のための基準日 (YYYY-MM-DD) / Reference date for accurate-display duty / Tanggal acuan untuk kewajiban tampilan akurat */
  reviewedAt: string;
};

export const VISA_TAG_ORDER: readonly VisaTag[] = ["gijinkoku", "eijuu", "teijuu", "haiguusha"];

export const JAPANESE_LEVEL_ORDER: readonly JapaneseLevel[] = ["none", "conversational", "business"];
