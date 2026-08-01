// /kerja 求人データの読み込みとファセット導出
// Loads /kerja job data and derives filter facets
// Memuat data lowongan /kerja dan menurunkan facet filter
import zcareerJobs from "./data/zcareer.json";
import exordJobs from "./data/exord.json";
import type { JapaneseLevel, KerjaJob, VisaTag } from "./types";

const allJobs = [...(zcareerJobs as KerjaJob[]), ...(exordJobs as KerjaJob[])];

/**
 * 全求人を年収の高い順に並べたもの
 * All jobs sorted by highest annual salary first
 * Semua lowongan diurutkan dari gaji tahunan tertinggi
 */
export function getKerjaJobs(): KerjaJob[] {
  return [...allJobs].sort((a, b) => b.annualSalaryMax - a.annualSalaryMax);
}

export type KerjaFacets = {
  prefectures: { value: string; count: number }[];
  japaneseLevels: { value: JapaneseLevel; count: number }[];
  visaTags: { value: VisaTag; count: number }[];
  inexperiencedOkCount: number;
  total: number;
};

/**
 * フィルターUI表示用のファセット集計
 * Facet counts for the filter UI
 * Agregasi facet untuk UI filter
 */
export function getKerjaFacets(jobs: KerjaJob[] = allJobs): KerjaFacets {
  const prefectureCounts = new Map<string, number>();
  const japaneseLevelCounts = new Map<JapaneseLevel, number>();
  const visaTagCounts = new Map<VisaTag, number>();
  let inexperiencedOkCount = 0;

  for (const job of jobs) {
    for (const pref of job.prefectures) {
      prefectureCounts.set(pref, (prefectureCounts.get(pref) ?? 0) + 1);
    }
    japaneseLevelCounts.set(job.japaneseLevel, (japaneseLevelCounts.get(job.japaneseLevel) ?? 0) + 1);
    for (const tag of job.visaTags) {
      visaTagCounts.set(tag, (visaTagCounts.get(tag) ?? 0) + 1);
    }
    if (job.inexperiencedOk) inexperiencedOkCount += 1;
  }

  return {
    prefectures: [...prefectureCounts.entries()]
      .map(([value, count]) => ({ value, count }))
      .sort((a, b) => b.count - a.count),
    japaneseLevels: [...japaneseLevelCounts.entries()].map(([value, count]) => ({ value, count })),
    visaTags: [...visaTagCounts.entries()].map(([value, count]) => ({ value, count })),
    inexperiencedOkCount,
    total: jobs.length,
  };
}
