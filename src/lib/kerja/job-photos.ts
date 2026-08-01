// 求人IDごとの固有写真パス（1件1枚、重複なし）
// Per-job unique photo path (one image per listing, no reuse)
// Path foto unik per lowongan (satu gambar per posisi, tanpa duplikasi)

import zcareerJobs from "./data/zcareer.json";
import type { KerjaJob } from "./types";

const DEFAULT_JOB_PHOTO = "/images/kerja/kerja-it-engineer.jpg";

/** 公開済み求人ID → 写真パス（zcareer + exord 全件） */
const JOB_PHOTO_PATHS: Readonly<Record<string, string>> = Object.fromEntries(
  (zcareerJobs as KerjaJob[]).map((job) => [job.id, `/images/kerja/jobs/${job.id}.jpg`])
);

/**
 * 求人カード・詳細シート用の写真パスを返す。
 * Returns the photo path for a job card or detail sheet.
 * Mengembalikan path foto untuk kartu lowongan atau detail sheet.
 */
export function jobPhoto(jobId: string): string {
  return JOB_PHOTO_PATHS[jobId] ?? DEFAULT_JOB_PHOTO;
}
