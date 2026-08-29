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
    { item: "標準時給（派遣料金）の目安", value: "1,600円〜 / 時間", note: "税抜・経験・地域により変動" },
    { item: "想定就業", value: "1日8時間 × 月22日", note: "繁忙期・契約により変動" },
    { item: "1名あたり月額の目安", value: "約28万円〜", note: "上記時給×想定就業の概算" },
];

export default function PricingPage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section bg-accent-dark text-white">
                <div className="container mx-auto">
                    <div className="max-w-3xl">
                        <span className="text-accent-light text-sm font-medium tracking-wider uppercase">
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
            <section className="section bg-canvas">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl border border-line shadow-sm p-8 md:p-10">
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                                <div>
                                    <p className="text-ink-muted text-sm mb-1">標準時給（目安）</p>
                                    <p className="text-4xl md:text-5xl font-bold text-accent">
                                        1,600円〜
                                    </p>
                                    <p className="text-ink-muted text-sm mt-2">
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

                            <div className="mt-6 flex items-start gap-2 rounded-xl bg-accent/5 border border-accent/15 p-4 text-sm text-ink-muted">
                                <Info className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                <span>
                                    上記は目安です。実際の料金は人数・期間・作業内容・地域などにより異なります。
                                    {IS_MARGIN_RATE_PUBLISHED
                                        ? (
                                            <>
                                                マージン率の考え方は
                                                <Link href="/margin-rate" className="text-accent underline">
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
            <section className="section bg-white">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-ink text-center mb-12">
                            料金に含まれるもの・別途のもの
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="rounded-2xl border border-accent/20 bg-accent/[0.03] p-7">
                                <h3 className="font-bold text-accent mb-4 flex items-center gap-2">
                                    <Check className="w-5 h-5" />
                                    料金に含まれるサポート
                                </h3>
                                <ul className="space-y-3">
                                    {included.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-ink text-sm">
                                            <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-line bg-canvas p-7">
                                <h3 className="font-bold text-ink mb-4 flex items-center gap-2">
                                    <X className="w-5 h-5" />
                                    別途・応相談となる場合
                                </h3>
                                <ul className="space-y-3">
                                    {notIncluded.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-ink-muted text-sm">
                                            <X className="w-4 h-4 text-ink-muted mt-0.5 flex-shrink-0" />
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
            <section className="section bg-canvas">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-ink text-center mb-3">
                            見積もりの考え方（モデルケース）
                        </h2>
                        <p className="text-center text-ink-muted text-sm mb-12">
                            あくまで概算の目安です。正式なお見積もりは無料でご案内します。
                        </p>
                        <div className="bg-white rounded-2xl border border-line shadow-sm overflow-hidden">
                            <table className="w-full text-sm">
                                <tbody>
                                    {exampleRows.map((row) => (
                                        <tr key={row.item} className="border-b border-line last:border-0">
                                            <td className="px-6 py-5 text-ink-muted align-top w-1/2">
                                                {row.item}
                                                <span className="block text-xs text-ink-muted mt-1">{row.note}</span>
                                            </td>
                                            <td className="px-6 py-5 text-right font-bold text-ink text-lg">
                                                {row.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-ink-muted mt-4 text-center">
                            ※ 概算は「標準時給 × 想定就業時間」で算出した目安であり、実費・諸条件は含みません。
                        </p>
                    </div>
                </div>
            </section>

            {/* 流れの簡易導線 */}
            <section className="section bg-white">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                        <Link href="/services/dispatch" className="card group block">
                            <Clock className="w-6 h-6 text-accent mb-3" />
                            <h3 className="font-bold text-ink mb-1">サービス詳細</h3>
                            <p className="text-ink-muted text-sm">農業派遣の流れと特徴を見る</p>
                        </Link>
                        <Link href="/guide" className="card group block">
                            <FileText className="w-6 h-6 text-accent mb-3" />
                            <h3 className="font-bold text-ink mb-1">制度ガイド・必要書類</h3>
                            <p className="text-ink-muted text-sm">特定技能のルールと準備物を確認</p>
                        </Link>
                        <Link href="/faq" className="card group block">
                            <Info className="w-6 h-6 text-accent mb-3" />
                            <h3 className="font-bold text-ink mb-1">よくある質問</h3>
                            <p className="text-ink-muted text-sm">費用・期間・手続きの疑問を解消</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-accent">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        まずは無料でご相談ください
                    </h2>
                    <p className="text-white/80 mb-8 max-w-xl mx-auto">
                        ご要望をお聞きし、条件に合わせた正式なお見積もりをご案内します。
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact" className="btn bg-white text-accent hover:bg-gray-100">
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
