import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IS_MARGIN_RATE_PUBLISHED } from "@/lib/feature-flags";
import { generatePageMetadata } from "@/lib/metadata";

type TableRow = {
    label: string;
    value: ReactNode;
    valueClassName?: string;
};

const baseMetadata = generatePageMetadata({
    title: "マージン率等の情報公開",
    description: "労働者派遣法第23条第5項に基づくマージン率等の情報公開。スグクル株式会社。",
    keywords: "マージン率, 労働者派遣法, 情報公開, スグクル",
    path: "/margin-rate",
});

export const metadata: Metadata = {
    ...baseMetadata,
    robots: IS_MARGIN_RATE_PUBLISHED
        ? { index: true, follow: true }
        : { index: false, follow: false },
};

const businessRows: TableRow[] = [
    { label: "事業者名", value: "スグクル株式会社" },
    { label: "事業所", value: "本社（鹿児島県霧島市国分中央三丁目42-8 翔陽A103）" },
    {
        label: "許可番号",
        value: "労働者派遣事業 派46-300262 ／ 有料職業紹介事業 46-ユ-300203",
    },
    { label: "対象期間", value: "第3期事業年度（2025年6月1日〜2026年5月31日）" },
];

const marginRows: TableRow[] = [
    { label: "派遣労働者の数（2026年6月1日現在）", value: "78 名" },
    { label: "派遣先の数（実事業所数・年度実績）", value: "29 事業所" },
    { label: "派遣料金の平均額（1日8時間当たり）", value: "12,775 円" },
    { label: "派遣労働者の賃金の平均額（1日8時間当たり）", value: "8,494 円" },
    {
        label: "マージン率",
        value: "33.5 ％",
        valueClassName: "text-2xl font-bold text-[#1B5E38]",
    },
];

const marginCostItems = [
    "社会保険料・労働保険料の会社負担分",
    "有給休暇の取得に係る費用",
    "教育訓練（入職時の安全衛生教育、日本語教育、農業技能訓練 等）の実施費用",
    "住居（社宅・寮）の確保・維持に係る費用",
    "募集・採用、来日・赴任に係る支援費用",
    "母語での相談対応・生活支援・定着フォローに係る費用、その他事業運営費",
];

const trainingItems = [
    "入職時：雇入れ時安全衛生教育、業務基礎訓練（農作業の安全・機械の取扱い 等）",
    "就業中：日本語教育、農業技能の段階的訓練（OJT・OFF-JT）、資格・試験（特定技能2号等）への挑戦支援",
    "キャリアコンサルティングの相談窓口を設置しています（母語対応可）",
];

const laborAgreementRows: TableRow[] = [
    {
        label: "労使協定の締結",
        value: "有（労働者派遣法第30条の4第1項に基づく労使協定方式）",
    },
    { label: "対象となる派遣労働者の範囲", value: "当社が雇用するすべての派遣労働者（農業に従事する派遣労働者）" },
    { label: "労使協定の有効期間の終期", value: "2027年5月31日" },
];

const welfareItems = [
    "社会保険・労働保険完備",
    "社宅・寮の提供（物件により異なります）",
    "母語での相談窓口（インドネシア語ほか）・入社後の定着フォロー面談",
];

function SectionHeading({ children }: { children: ReactNode }) {
    return (
        <h2 className="mt-12 border-l-4 border-[#1B5E38] pl-4 text-xl font-bold text-[#1B5E38]">
            {children}
        </h2>
    );
}

function DisclosureTable({ rows }: { rows: TableRow[] }) {
    return (
        <div className="mt-4 overflow-x-auto rounded-xl border border-gray-200" tabIndex={0}>
            <table className="w-full min-w-[640px] border-collapse text-left text-sm md:text-base">
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.label} className="border-b border-gray-200 last:border-b-0">
                            <th
                                scope="row"
                                className="w-[38%] bg-[#E8F2E8] px-4 py-3 align-top font-semibold text-[#1A1A1A]"
                            >
                                {row.label}
                            </th>
                            <td className={`px-4 py-3 align-top text-gray-700 ${row.valueClassName ?? ""}`}>
                                {row.value}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function DisclosureList({ items }: { items: string[] }) {
    return (
        <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
            {items.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    );
}

export default function MarginRatePage() {
    return (
        <div className="pt-20">
            <section className="bg-[#FAFAF7] px-6 py-20 md:py-28">
                <article className="mx-auto max-w-4xl rounded-3xl border border-[#1B5E38]/10 bg-white p-6 shadow-sm md:p-10">
                    <header>
                        <p className="mb-3 text-sm font-medium tracking-[0.18em] text-[#D4A853] uppercase">
                            Disclosure
                        </p>
                        <h1 className="border-b-4 border-[#1B5E38] pb-4 text-3xl font-bold text-[#1B5E38] md:text-4xl">
                            マージン率等の情報公開
                        </h1>
                        <p className="mt-6 leading-8 text-gray-700">
                            労働者派遣事業の適正な運営の確保及び派遣労働者の保護等に関する法律（労働者派遣法）第23条第5項に基づき、当社のマージン率等の情報を公開します。
                        </p>
                    </header>

                    <SectionHeading>事業者情報</SectionHeading>
                    <DisclosureTable rows={businessRows} />

                    <SectionHeading>マージン率等</SectionHeading>
                    <DisclosureTable rows={marginRows} />

                    <div className="mt-5 rounded-xl border border-dashed border-gray-300 bg-[#F7F7F5] px-5 py-4 text-sm leading-7 text-gray-700">
                        <strong className="block text-[#1A1A1A]">マージン率の計算方法</strong>
                        マージン率 ＝（派遣料金の平均額 − 派遣労働者の賃金の平均額）÷ 派遣料金の平均額
                    </div>

                    <SectionHeading>マージンに含まれるもの</SectionHeading>
                    <p className="mt-4 leading-8 text-gray-700">
                        マージンは、すべてが当社の利益となるものではありません。主に次の費用に充てられています。
                    </p>
                    <DisclosureList items={marginCostItems} />

                    <SectionHeading>教育訓練（キャリア形成支援制度）に関する事項</SectionHeading>
                    <DisclosureList items={trainingItems} />

                    <SectionHeading>労使協定の締結状況（労使協定方式）</SectionHeading>
                    <DisclosureTable rows={laborAgreementRows} />

                    <SectionHeading>福利厚生等</SectionHeading>
                    <DisclosureList items={welfareItems} />

                    <footer className="mt-12 border-t border-gray-200 pt-5 text-sm leading-7 text-gray-600">
                        最終更新日：2026年8月2日
                        <br />
                        本ページに関するお問い合わせ：スグクル株式会社（TEL 0995-73-9939）
                        <br />
                        ※ 本情報は毎事業年度終了後、労働者派遣事業報告書の提出に合わせて更新します。
                        <br />
                        ※ 本ページの「派遣労働者の数（78名）」は労働者派遣法に基づく許可事業所の派遣労働者数です。会社概要の「稼働スタッフ（120名）」は農作業受託・請負受託を含む総稼働数であり、定義が異なります。
                    </footer>

                    {/*
                    【社内メモ・画面非表示】
                    1. 数値ソース：Web公開用マージン率等情報提供シート（様式第11号提出値と一致させる）。
                    2. IS_MARGIN_RATE_PUBLISHED=true で公開中。再非公開にする場合は feature-flags を false に戻す。
                    3. 更新サイクル：毎年7月初（労働者派遣事業報告書の提出に合わせる）。
                    */}
                </article>
            </section>
        </div>
    );
}
