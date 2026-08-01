// 職種カテゴリ→代表写真のマッピング（会社名や実際の職場ではなく、職種を表す一般的な写真）
// Maps occupation categories to a representative photo (a generic photo of the job type,
// not the actual company or workplace, since company identity is never disclosed here)
// Memetakan kategori pekerjaan ke foto representatif (foto umum jenis pekerjaan, bukan
// foto perusahaan/tempat kerja sebenarnya, karena identitas perusahaan tidak diungkap di sini)
import occupationMap from "./occupation-map.json";

const PHOTO_PATH = {
  itEngineer: "/images/kerja/kerja-it-engineer.jpg",
  mechanicalDesign: "/images/kerja/kerja-mechanical-design.jpg",
  officeAdmin: "/images/kerja/kerja-office-admin.jpg",
  finance: "/images/kerja/kerja-finance.jpg",
  management: "/images/kerja/kerja-management.jpg",
  salesMarketing: "/images/kerja/kerja-sales-marketing.jpg",
  logistics: "/images/kerja/kerja-logistics.jpg",
} as const;

const DEFAULT_PHOTO = PHOTO_PATH.itEngineer;

// occupation-map.json のキー（occupation_category の日本語）を写真バケットに割り当てる。
// 新しいカテゴリが追加された場合はここに1行追加する（未登録でもDEFAULT_PHOTOにフォールバックする）。
const OCCUPATION_PHOTO_BUCKET: Readonly<Record<string, keyof typeof PHOTO_PATH>> = {
  "IT・システムコンサルタント": "itEngineer",
  "業務系アプリケーションエンジニア・プログラマ": "itEngineer",
  "インフラエンジニア": "itEngineer",
  "Webサービス系エンジニア・プログラマ": "itEngineer",
  "サービスエンジニア・サポートエンジニア": "itEngineer",
  "社内情報システム（社内SE）": "itEngineer",
  "ITヘルプデスク・カスタマーサポート": "itEngineer",
  "データアナリスト": "itEngineer",
  "機械・機構設計・金型設計": "mechanicalDesign",
  "回路・システム設計": "mechanicalDesign",
  "制御系ソフトウェア開発（通信・ネットワーク・IoT関連）": "mechanicalDesign",
  "素材・半導体素材・化成品関連": "mechanicalDesign",
  "一般事務・営業事務": "officeAdmin",
  "総務・事務": "officeAdmin",
  "人事": "officeAdmin",
  "労務": "officeAdmin",
  "財務・経理": "finance",
  "経営企画・事業統括": "management",
  "管理職・エグゼクティブ": "management",
  "営業企画": "management",
  "海外営業": "salesMarketing",
  "Web・SNSマーケティング": "salesMarketing",
  "MD・バイヤー・店舗開発": "salesMarketing",
  "物流・貿易": "logistics",
};

// occupation-map.json に載っている全キーがここでも網羅されていることを開発時に確認する用途
export const OCCUPATION_PHOTO_COVERAGE_KEYS = Object.keys(occupationMap);

export function occupationPhoto(occupationJa: string): string {
  const bucket = OCCUPATION_PHOTO_BUCKET[occupationJa];
  return bucket ? PHOTO_PATH[bucket] : DEFAULT_PHOTO;
}
