#!/usr/bin/env node
// Zキャリア/エクスオードのCSVから /kerja 用の求人JSONを生成するスクリプト（手動実行・ビルド非包含）
// Generates the job JSON for /kerja from a Zキャリア/エクスオード CSV (run manually, not part of the build)
// Skrip untuk menghasilkan JSON lowongan /kerja dari CSV Zキャリア/エクスオード (dijalankan manual, tidak termasuk build)
//
// 使い方 / Usage / Cara pakai:
//   node scripts/seed-kerja-jobs.mjs <csv-path> --source=zcareer
//   node scripts/seed-kerja-jobs.mjs <csv-path> --source=exord
//
// 会社名（company_name / company_group）と求人URL（job_url）は絶対に出力に含めない。
// company_name, company_group, and job_url must never be written to the output.
// company_name, company_group, dan job_url tidak boleh dimasukkan ke output.

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "..", "src", "lib", "kerja", "data");
const occupationMap = JSON.parse(
  readFileSync(path.join(__dirname, "..", "src", "lib", "kerja", "occupation-map.json"), "utf8"),
);

const PREFECTURES = [
  "北海道",
  "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県",
  "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県",
  "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県",
  "岐阜県", "静岡県", "愛知県", "三重県",
  "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県",
  "鳥取県", "島根県", "岡山県", "広島県", "山口県",
  "徳島県", "香川県", "愛媛県", "高知県",
  "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県",
];

function parseArgs(argv) {
  const args = argv.slice(2);
  const positional = args.filter((a) => !a.startsWith("--"));
  const flags = Object.fromEntries(
    args
      .filter((a) => a.startsWith("--"))
      .map((a) => {
        const [k, v] = a.slice(2).split("=");
        return [k, v ?? "true"];
      }),
  );
  return { csvPath: positional[0], source: flags.source ?? "zcareer" };
}

/** RFC4180準拠の簡易CSVパーサ（引用内の改行・カンマに対応） */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i += 1) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (c === "\r") {
      // no-op; \n handles the row break
    } else {
      field += c;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  const header = rows[0];
  return rows.slice(1).filter((r) => r.length === header.length && r.some((v) => v !== "")).map((r) => {
    const record = {};
    header.forEach((h, idx) => {
      record[h] = r[idx];
    });
    return record;
  });
}

function extractPrefectures(locationDetail) {
  const found = [];
  for (const pref of PREFECTURES) {
    if (locationDetail.includes(pref) && !found.includes(pref)) {
      found.push(pref);
    }
  }
  return found;
}

function toVisaTags(visaTypesAccepted) {
  const map = {
    "技人国": "gijinkoku",
    "永住": "eijuu",
    "定住": "teijuu",
    "配偶者": "haiguusha",
  };
  return visaTypesAccepted
    .split("/")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => map[s])
    .filter(Boolean);
}

function toJapaneseLevel(normalized) {
  if (normalized === "ビジネス") return "business";
  if (normalized === "日常会話") return "conversational";
  return "none";
}

function run() {
  const { csvPath, source } = parseArgs(process.argv);
  if (!csvPath) {
    console.error("Usage: node scripts/seed-kerja-jobs.mjs <csv-path> --source=zcareer|exord");
    process.exit(1);
  }
  if (source !== "zcareer" && source !== "exord") {
    console.error('--source must be "zcareer" or "exord"');
    process.exit(1);
  }

  const rows = parseCsv(readFileSync(csvPath, "utf8"));
  const prefix = source === "zcareer" ? "z" : "x";

  const jobs = rows
    .filter((r) => (r.requires_native_japanese || "").trim().toUpperCase() !== "TRUE")
    .filter((r) => (r.visa_types_accepted || "").trim() !== "")
    .map((r, index) => {
      const occupationJa = (r.occupation_category || "").trim();
      const locationDetail = r.work_location_detail || "";
      const wageMin = Number.parseInt(r.wage_min, 10);
      const wageMax = Number.parseInt(r.wage_max, 10);
      return {
        id: `${prefix}-${String(r.zcareer_job_id || index + 1).padStart(4, "0")}`,
        source,
        occupationJa,
        occupationId: occupationMap[occupationJa] ?? occupationJa,
        industryJa: null,
        prefectures: extractPrefectures(locationDetail),
        remote: locationDetail.includes("リモート"),
        annualSalaryMin: Number.isFinite(wageMin) ? wageMin : 0,
        annualSalaryMax: Number.isFinite(wageMax) ? wageMax : 0,
        visaTags: toVisaTags(r.visa_types_accepted || ""),
        japaneseLevel: toJapaneseLevel((r.japanese_level_normalized || "").trim()),
        inexperiencedOk: (r.inexperienced_ok || "").trim().toUpperCase() === "TRUE",
        reviewedAt: (r.extracted_at || "").slice(0, 10) || new Date().toISOString().slice(0, 10),
      };
    })
    .filter((job) => job.prefectures.length > 0);

  const outPath = path.join(dataDir, `${source}.json`);
  writeFileSync(outPath, `${JSON.stringify(jobs, null, 2)}\n`, "utf8");
  console.error(`Wrote ${jobs.length} jobs to ${path.relative(process.cwd(), outPath)}`);
}

run();
