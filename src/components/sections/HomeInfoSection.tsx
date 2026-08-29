import Link from "next/link";
import { IS_MARGIN_RATE_PUBLISHED } from "@/lib/feature-flags";
import {
    Coins,
    BookOpenCheck,
    HelpCircle,
    ArrowRight,
    ShieldCheck,
    ChevronDown,
} from "lucide-react";

// トップ用の情報導線・FAQ抜粋・信頼帯。誇張せず、知りたい情報へ最短で案内する。
// Home info links, FAQ excerpt, and trust band. Honest, fast routing to key info.
// Tautan info beranda, cuplikan FAQ, dan pita kepercayaan. Jujur dan cepat.

const quickLinks = [
    {
        icon: Coins,
        title: "料金について",
        desc: "時給の目安、含まれるサポート、見積もり例を明記しています。",
        href: "/pricing",
    },
    {
        icon: BookOpenCheck,
        title: "制度ガイド・必要書類",
        desc: "特定技能のルール、申請の種類、準備物をわかりやすく。",
        href: "/guide",
    },
    {
        icon: HelpCircle,
        title: "よくある質問",
        desc: "費用・期間・ビザ・住居など、疑問にお答えします。",
        href: "/faq",
    },
];

const faqExcerpt = [
    {
        q: "どのくらいで就業を開始できますか？",
        a: "条件が整っていれば最短2週間が目安です。状況により異なります。",
    },
    {
        q: "在留資格の手続きは自分でやる必要がありますか？",
        a: "複雑な手続きはスグクルが支援します。お客様の負担を最小限にします。",
    },
    {
        q: "住む場所の手配もしてもらえますか？",
        a: "住居手配・行政手続きまで支援し、働く前の準備を整えます。",
    },
];

export default function HomeInfoSection() {
    return (
        <>
            {/* 情報導線 */}
            <section className="bg-white">
                <div className="container mx-auto px-6 py-20 md:py-28">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-ink">
                            気になることを、先に明確に
                        </h2>
                        <p className="text-ink-muted text-sm mt-3">
                            料金・制度・必要書類・よくある質問を、わかりやすくまとめています。
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {quickLinks.map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                className="group block rounded-2xl border border-line bg-canvas p-7 hover:shadow-md hover:border-accent/30 transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                                    <link.icon className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="font-bold text-ink mb-2">{link.title}</h3>
                                <p className="text-ink-muted text-sm leading-relaxed mb-4">{link.desc}</p>
                                <span className="inline-flex items-center gap-1 text-accent text-sm font-medium">
                                    詳しく見る
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ抜粋 */}
            <section className="bg-canvas">
                <div className="container mx-auto px-6 py-20 md:py-28">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-ink">
                                よくある質問
                            </h2>
                        </div>
                        <div className="space-y-3">
                            {faqExcerpt.map((item) => (
                                <details
                                    key={item.q}
                                    className="group bg-white rounded-xl border border-line shadow-sm overflow-hidden"
                                >
                                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 font-medium text-ink">
                                        {item.q}
                                        <ChevronDown className="w-5 h-5 text-ink-muted flex-shrink-0 transition-transform group-open:rotate-180" />
                                    </summary>
                                    <div className="px-5 pb-5 text-ink-muted text-sm leading-relaxed">
                                        {item.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <Link
                                href="/faq"
                                className="inline-flex items-center gap-1 text-accent font-medium hover:underline"
                            >
                                すべての質問を見る
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 信頼帯（許認可・コンプラ） */}
            <section className="bg-white border-t border-line">
                <div className="container mx-auto px-6 py-12">
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                            <span className="inline-flex items-center gap-2 text-sm text-ink">
                                <ShieldCheck className="w-4 h-4 text-accent" />
                                労働者派遣事業許可 派46-300262
                            </span>
                            <span className="inline-flex items-center gap-2 text-sm text-ink">
                                <ShieldCheck className="w-4 h-4 text-accent" />
                                有料職業紹介事業許可 46-ユ-300203
                            </span>
                        </div>
                        {IS_MARGIN_RATE_PUBLISHED && (
                            <Link
                                href="/margin-rate"
                                className="inline-flex items-center gap-1 text-sm text-accent font-medium hover:underline whitespace-nowrap"
                            >
                                マージン率等の情報公開
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
