import type { Metadata } from "next";
import Link from "next/link";
import { IS_MARGIN_RATE_PUBLISHED } from "@/lib/feature-flags";
import {
    Check,
    X,
    ArrowRight,
    Phone,
    Info,
    Clock,
    FileText,
} from "lucide-react";

// 料金ページ。誇張せず、目安と前提を明記する。
// Pricing page. No exaggeration; show estimates and assumptions clearly.
// Halaman harga. Tanpa berlebihan; tampilkan perkiraan dan asumsi dengan jelas.

export const metadata: Metadata = {
    title: "料金について | スグクル株式会社",
    description:
        "農業派遣の料金の考え方、含まれるサポート、見積もり例をご案内します。標準時給の目安や前提条件を明記しています。",
    alternates: { canonical: "https://sugu-kuru.co.jp/pricing" },
};

// 料金に含まれるもの / 含まれないもの
const included = [
    "住居手配・入退去サポート",
    "在留資格・行政手続きの支援",
    "多言語サポート（日本語・英語・インドネシア語）",
    "病院同行・緊急時の一次対応",
    "ミスマッチ時の交代対応",
    "就業前研修（安全衛生・マナー等）",
];

const notIncluded = [
    "農場までの日々の送迎が必要な場合の実費（応相談）",
    "特殊な資格・講習の追加取得費用（必要な場合）",
    "受入企業側で用意いただく備品・作業着等",
];

// 見積もりの考え方（モデルケース・概算）
const exampleRows = [
    { item: "標準時給（派遣料金）の目安", value: "1,550円〜 / 時間", note: "税抜・経験・地域により変動" },
    { item: "想定就業", value: "1日8時間 × 月22日", note: "繁忙期・契約により変動" },
    { item: "1名あたり月額の目安", value: "約27万円〜", note: "上記時給×想定就業の概算" },
];

export default function PricingPage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="bg-[#0E2A1B] text-white">
                <div className="container mx-auto px-6 py-20 md:py-24">
                    <div className="max-w-3xl">
                        <span className="text-[#E8C77A] text-sm font-medium tracking-wider uppercase">
                            Pricing
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
                            料金について
                        </h1>
                        <p className="text-white/80 leading-relaxed">
                            農業派遣の料金は「時給ベースの派遣料金」が基本です。
                            ご利用条件によって変わるため、正確な金額はお見積もりでご案内します。
                            ここでは考え方と目安、含まれるサポートをわかりやすくご説明します。
                        </p>
                    </div>
                </div>
            </section>

            {/* 料金の考え方 */}
            <section className="bg-[#FAFAF7]">
                <div className="container mx-auto px-6 py-24 md:py-32">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                                <div>
                                    <p className="text-gray-500 text-sm mb-1">標準時給（目安）</p>
                                    <p className="text-4xl md:text-5xl font-bold text-[#1B5E38]">
                                        1,550円〜
                                    </p>
                                    <p className="text-gray-500 text-sm mt-2">
                                        税抜 / 経験・スキル・地域・作業内容により変動します
                                    </p>
                                </div>
                                <Link
                                    href="/contact"
                                    className="btn btn-primary group self-start md:self-auto"
                                >
                                    無料で見積もりを依頼
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="mt-6 flex items-start gap-2 rounded-xl bg-[#1B5E38]/5 border border-[#1B5E38]/15 p-4 text-sm text-gray-600">
                                <Info className="w-4 h-4 text-[#1B5E38] mt-0.5 flex-shrink-0" />
                                <span>
                                    上記は目安です。実際の料金は人数・期間・作業内容・地域などにより異なります。
                                    {IS_MARGIN_RATE_PUBLISHED
                                        ? (
                                            <>
                                                マージン率の考え方は
                                                <Link href="/margin-rate" className="text-[#1B5E38] underline">
                                                    マージン率等の情報公開
                                                </Link>
                                                で開示しています。
                                            </>
                                        )
                                        : "マージン率の考え方は公開準備中です。"}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 含まれるもの / 含まれないもの */}
            <section className="bg-white">
                <div className="container mx-auto px-6 py-24 md:py-32">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center mb-12">
                            料金に含まれるもの・別途のもの
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl border border-[#1B5E38]/20 bg-[#1B5E38]/[0.03] p-7">
                                <h3 className="font-bold text-[#1B5E38] mb-4 flex items-center gap-2">
                                    <Check className="w-5 h-5" />
                                    料金に含まれるサポート
                                </h3>
                                <ul className="space-y-3">
                                    {included.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                                            <Check className="w-4 h-4 text-[#1B5E38] mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-7">
                                <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                                    <X className="w-5 h-5" />
                                    別途・応相談となる場合
                                </h3>
                                <ul className="space-y-3">
                                    {notIncluded.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                                            <X className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 見積もり例 */}
            <section className="bg-[#FAFAF7]">
                <div className="container mx-auto px-6 py-24 md:py-32">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center mb-3">
                            見積もりの考え方（モデルケース）
                        </h2>
                        <p className="text-center text-gray-500 text-sm mb-12">
                            あくまで概算の目安です。正式なお見積もりは無料でご案内します。
                        </p>
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                            <table className="w-full text-sm">
                                <tbody>
                                    {exampleRows.map((row) => (
                                        <tr key={row.item} className="border-b border-gray-100 last:border-0">
                                            <td className="px-6 py-5 text-gray-600 align-top w-1/2">
                                                {row.item}
                                                <span className="block text-xs text-gray-400 mt-1">{row.note}</span>
                                            </td>
                                            <td className="px-6 py-5 text-right font-bold text-[#1A1A1A] text-lg">
                                                {row.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-gray-400 mt-4 text-center">
                            ※ 概算は「標準時給 × 想定就業時間」で算出した目安であり、実費・諸条件は含みません。
                        </p>
                    </div>
                </div>
            </section>

            {/* 流れの簡易導線 */}
            <section className="bg-white">
                <div className="container mx-auto px-6 py-24 md:py-32">
                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
                        <Link href="/services/dispatch" className="card group block">
                            <Clock className="w-6 h-6 text-[#1B5E38] mb-3" />
                            <h3 className="font-bold text-[#1A1A1A] mb-1">サービス詳細</h3>
                            <p className="text-gray-600 text-sm">農業派遣の流れと特徴を見る</p>
                        </Link>
                        <Link href="/guide" className="card group block">
                            <FileText className="w-6 h-6 text-[#1B5E38] mb-3" />
                            <h3 className="font-bold text-[#1A1A1A] mb-1">制度ガイド・必要書類</h3>
                            <p className="text-gray-600 text-sm">特定技能のルールと準備物を確認</p>
                        </Link>
                        <Link href="/faq" className="card group block">
                            <Info className="w-6 h-6 text-[#1B5E38] mb-3" />
                            <h3 className="font-bold text-[#1A1A1A] mb-1">よくある質問</h3>
                            <p className="text-gray-600 text-sm">費用・期間・手続きの疑問を解消</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#1B5E38]">
                <div className="container mx-auto px-6 py-20 md:py-24 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        まずは無料でご相談ください
                    </h2>
                    <p className="text-white/80 mb-8 max-w-xl mx-auto">
                        ご要望をお聞きし、条件に合わせた正式なお見積もりをご案内します。
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact" className="btn bg-white text-[#1B5E38] hover:bg-gray-100">
                            無料で相談する
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="tel:0995-73-9939"
                            className="btn bg-transparent border-2 border-white/50 text-white hover:bg-white/10"
                        >
                            <Phone className="w-5 h-5" />
                            0995-73-9939
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
