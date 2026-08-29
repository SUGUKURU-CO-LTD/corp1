#!/usr/bin/env node
/**
 * 求人LP（feat/km-gijinkoku-recruiting-202608）の回帰チェックスクリプト。
 *
 * 対象ファイル内に、日本語・インドネシア語の使用禁止表現、旧住所表記、
 * 未確認の労働者派遣事業許可番号、誤った法人表記（PT Sugukuru 等）が
 * 含まれていないかを検査する。1件でも検出した場合は非ゼロで終了する。
 *
 * 実行: node scripts/check-job-lp-expressions.mjs
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

const TARGET_FILES = [
    'src/app/jobs/kagoshima-material-gijinkoku/page.tsx',
    'src/app/jobs/kagoshima-material-quality-control/page.tsx',
    'src/app/jobs/kagoshima-material-interpreter/page.tsx',
    'src/lib/jobs/kagoshima-material.ts',
    'src/components/seo/JobPostingSchema.tsx',
];

// 日本語の使用禁止表現
const FORBIDDEN_JA = [
    '届出だけで働ける',
    '届出だけで働けます',
    '入管の許可を待つ必要がない',
    '入管の許可を待つ必要がありません',
    '6か月後に社員になります',
    '6ヶ月後に社員になります',
    '6か月後に必ず社員',
    '必ず直接雇用',
    '直接雇用確定',
    '100%直接雇用',
    '転換後に試用期間はありません',
    '転換後の試用期間なし',
    'ビザが取れます',
    '在留資格を保証',
    'インドネシア人限定',
    'インドネシア国籍限定',
    'インドネシア語が母語の方',
    '必ず採用',
];

// インドネシア語の使用禁止表現（大文字小文字を区別しない）
const FORBIDDEN_ID = [
    'cukup melapor saja',
    'tidak perlu menunggu izin imigrasi',
    'pasti menjadi karyawan langsung',
    'dijamin menjadi karyawan',
    'visa dijamin',
    'hanya untuk warga negara indonesia',
    'wajib penutur asli berdasarkan kelahiran',
    // 参照HTML原文の国籍・出生ベースの要件表現（禁止表現の趣旨に該当するため追加で禁止）
    'penutur asli bahasa indonesia',
];

// 誤った法人表記（参照HTMLに存在するインドネシア式表記をそのまま正式名称として使わない）
const FORBIDDEN_NAMES = ['PT Sugukuru', 'PT Kagoshima Material'];

// 旧住所（社内共通ルールにより出力禁止）
const FORBIDDEN_OLD_ADDRESS = [
    '翔陽A103',
    '翔陽Ａ１０３',
    '国分中央三丁目42',
    '国分中央3丁目42',
    '国分中央1丁目2-32 3F',
    '国分中央1丁目2－32 3F',
];

// 一次資料未確認のため、新求人LPには表示しない許可番号
const FORBIDDEN_LICENSE_NUMBERS = ['派46-300262', '派46-300011', '46-ユ-300203'];

let violationCount = 0;

function scan(file) {
    const fullPath = path.join(repoRoot, file);
    let content;
    try {
        content = readFileSync(fullPath, 'utf-8');
    } catch {
        console.log(`(skip: ${file} が見つかりません)`);
        return;
    }

    const lowerContent = content.toLowerCase();
    const checks = [
        ['禁止表現(JA)', FORBIDDEN_JA, content, false],
        ['禁止表現(ID)', FORBIDDEN_ID, lowerContent, true],
        ['誤った法人表記', FORBIDDEN_NAMES, content, false],
        ['旧住所', FORBIDDEN_OLD_ADDRESS, content, false],
        ['未確認の許可番号', FORBIDDEN_LICENSE_NUMBERS, content, false],
    ];

    for (const [label, list, haystack, alreadyLower] of checks) {
        for (const term of list) {
            const needle = alreadyLower ? term.toLowerCase() : term;
            if (haystack.includes(needle)) {
                console.error(`✗ [${label}] "${term}" が ${file} に含まれています`);
                violationCount++;
            }
        }
    }
}

for (const file of TARGET_FILES) {
    scan(file);
}

if (violationCount > 0) {
    console.error(`\n合計 ${violationCount} 件の禁止表現・不整合を検出しました。`);
    process.exit(1);
} else {
    console.log(`OK: ${TARGET_FILES.length}ファイルを検査し、禁止表現・旧住所・未確認許可番号は検出されませんでした。`);
    process.exit(0);
}
