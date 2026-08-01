# /kerja 求人カタログの運用ガイド
# Operations guide for the /kerja job catalog
# Panduan operasional katalog lowongan /kerja

## 概要 / Overview / Ringkasan

`/kerja` は日本在住インドネシア人向けの転職求人ボード。データは Assen に公開APIが無いため、
`src/lib/kerja/data/*.json` の静的カタログとして保持する。会社名・求人URLは一切保存・表示しない。

`/kerja` is a job-transfer board for Indonesians already living in Japan. Since Assen has no
public API, job data is kept as a static catalog under `src/lib/kerja/data/*.json`. Company
names and job posting URLs are never stored or shown.

`/kerja` adalah papan lowongan transfer kerja untuk warga Indonesia yang sudah tinggal di
Jepang. Karena Assen tidak memiliki API publik, data lowongan disimpan sebagai katalog statis
di `src/lib/kerja/data/*.json`. Nama perusahaan dan URL lowongan tidak pernah disimpan atau
ditampilkan.

## データソースと絞り込み基準 / Data source & filter criteria / Sumber data & kriteria filter

- ソース: `/Users/kabe/Assen/.zcareer/out/zcareer_idn_en_20260726.csv`（105件、Zキャリア抽出）。
- 公開対象は以下の両方を満たす行のみ:
  - `requires_native_japanese` が `TRUE` ではない（ネイティブ必須求人は除外）
  - `visa_types_accepted` が空欄ではない（対象ビザが明記されている）
- 上記条件で 105件 → 44件。空欄・ネイティブ必須の 61件（重複除く 61件のうち可視化した数値は
  「ネイティブ必須30件」＋「ビザ空欄で要確認」）は非公開バケットとして扱い、`data/*.json` には
  一切含めない。将質確認できたら再生成する。
- `muslim_friendly` / `offer_rate_percent` / `document_pass_rate_percent` / `posting_valid_until`
  はほぼ全件空欄のため、UIには出さない（データが無い項目は書かない）。

## 求人の追加・更新 / Adding & updating jobs / Menambah & memperbarui lowongan

```bash
# Zキャリアの新しいCSVを取り込む場合
node scripts/seed-kerja-jobs.mjs /path/to/zcareer_export.csv --source=zcareer

# エクスオード（メールで届く案件）を追加する場合
# 1. 同じ列構成のCSVを用意する（company_name, job_url は入れない/無視される）
node scripts/seed-kerja-jobs.mjs /path/to/exord_export.csv --source=exord
```

スクリプトは `src/lib/kerja/data/<source>.json` を丸ごと上書きする。手動で1件だけ追記したい場合は、
同じスキーマ（`src/lib/kerja/types.ts` の `KerjaJob`）でJSON配列に直接追記してもよい。

エクスオードはメールで届く案件が多いため、当面は下記の手順で手動投入する:

1. メール本文から「職種・勤務地・年収・日本語レベル・ビザ・未経験可否」を transcribe する。
2. `occupation_category` は `src/lib/kerja/occupation-map.json` のキーに寄せる（無ければ追加する）。
3. `id` は `x-0001` から連番で付与する。
4. 会社名・求人URL・応募先メールアドレスは `KerjaJob` に含めない（サイトには一切出さない）。

## 月次レビュー / Monthly review / Peninjauan bulanan

職業安定法5条の4（的確表示義務）に基づき、掲載情報は毎月見直す。

1. 月初に Assen から最新のZキャリア抽出CSVを取得する。
2. `seed-kerja-jobs.mjs` を再実行し、`reviewedAt` を更新する。
3. 掲載終了・条件変更があった求人は手動で `data/zcareer.json` / `data/exord.json` から削除・修正する。
4. ビルドして `/kerja` の件数表示が正しいことを確認する。

## 非公開31件の扱い / Handling the 31 unpublished rows / Penanganan 31 baris yang tidak dipublikasikan

`visa_types_accepted` が空欄の31件は、対象ビザが不明なため現時点では公開しない。今後、
Assen側で `visa_types_accepted` の入力を必須化できれば、再抽出のたびに自動的に公開対象へ
含められる。急ぎで公開したい場合は、該当求人を人が確認し `visa_types_accepted` を補完した
上で再生成すること（推測で埋めない）。
