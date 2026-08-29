import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, ChevronDown } from "lucide-react";

// よくある質問ページ。農家が問い合わせ前に迷う点を明確に答える。
// FAQ page. Clearly answers what farms wonder before contacting us.
// Halaman FAQ. Menjawab dengan jelas hal yang dipertanyakan petani sebelum menghubungi.

export const metadata: Metadata = {
    title: "よくある質問 | スグクル株式会社",
    description:
        "農業派遣の費用・期間・ビザ制度・住居・言語サポート・ミスマッチ対応など、よくいただくご質問にお答えします。",
    alternates: { canonical: "https://sugu-kuru.co.jp/faq" },
};

type Faq = { q: string; a: string };
type FaqGroup = { category: string; items: Faq[] };

const faqGroups: FaqGroup[] = [
    {
        category: "費用について",
        items: [
            {
                q: "料金はどのくらいかかりますか？",
                a: "時給ベースの派遣料金が基本で、標準時給の目安は1,600円〜（税抜）です。人数・期間・作業内容・地域により変動します。正式なお見積もりは無料でご案内します。",
            },
            {
                q: "料金にはどこまで含まれますか？",
                a: "住居手配、行政手続きの支援、多言語サポート、病院同行、ミスマッチ時の交代対応などが含まれます。詳しくは料金ページをご覧ください。",
            },
            {
                q: "マージン率は公開されていますか？",
                a: "はい。労働者派遣法に基づき、マージン率等の情報公開ページで開示します。",
            },
        ],
    },
    {
        category: "期間・スピードについて",
        items: [
            {
                q: "どのくらいで就業を開始できますか？",
                a: "条件が整っている場合で最短2週間が目安です。海外からの新規入国など、状況により期間は異なります。まずはご相談ください。",
            },
            {
                q: "短期間・繁忙期だけの依頼もできますか？",
                a: "作業内容や時期に応じてご相談を承ります。全国の収穫リレーを活かした配置も可能です。",
            },
        ],
    },
    {
        category: "ビザ・制度について",
        items: [
            {
                q: "在留資格の手続きは自分でやる必要がありますか？",
                a: "複雑な在留資格や書類の準備は、グループ内の体制と連携してスグクルが支援します。お客様の負担を最小限にします。",
            },
            {
                q: "どんな在留資格の人材ですか？",
                a: "特定技能1号などの在留資格を持つ（または取得予定の）外国人材です。制度の基本は制度ガイドのページでご説明しています。",
            },
            {
                q: "技能実習からの切り替えも対応できますか？",
                a: "対応可能です。技能実習の経歴により試験が免除される場合があります。詳しくは制度ガイドをご覧ください。",
            },
        ],
    },
    {
        category: "住居・生活サポート",
        items: [
            {
                q: "住む場所の手配もしてもらえますか？",
                a: "はい。住居手配・入退去・行政手続きまで支援します。働く前の「暮らす」準備を整えます。",
            },
            {
                q: "言葉が通じるか不安です。",
                a: "日本語・英語・インドネシア語で現場のやり取りを支援します。緊急時の一次対応も行います。",
            },
        ],
    },
    {
        category: "ミスマッチ・その他",
        items: [
            {
                q: "もし相性が合わなかったら？",
                a: "ミスマッチが起きた場合は、迅速な交代対応を行います。受入れが続くよう責任を持って支援します。",
            },
            {
                q: "鹿児島以外でも依頼できますか？",
                a: "本拠地は鹿児島・霧島ですが、福島・愛知・愛媛・青森など複数地域で稼働しています。まずはご相談ください。",
            },
        ],
    },
];

// FAQ構造化データ（SEO）
function FaqSchema() {
    const data = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqGroups.flatMap((g) =>
            g.items.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
            }))
        ),
    };
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

export default function FaqPage() {
    return (
        <div className="pt-20">
            <FaqSchema />

            {/* Hero */}
            <section className="bg-accent-dark text-white">
                <div className="container mx-auto px-6 py-20 md:py-24">
                    <div className="max-w-3xl">
                        <span className="text-accent-light text-sm font-medium tracking-wider uppercase">
                            FAQ
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
                            よくある質問
                        </h1>
                        <p className="text-white/80 leading-relaxed">
                            お問い合わせ前に多くいただくご質問をまとめました。
                            ここで解決しない点は、お気軽にご相談ください。
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ本体 */}
            <section className="bg-canvas">
                <div className="container mx-auto px-6 py-24 md:py-32">
                    <div className="max-w-3xl mx-auto space-y-14 md:space-y-16">
                        {faqGroups.map((group) => (
                            <div key={group.category}>
                                <h2 className="text-lg font-bold text-accent mb-4">
                                    {group.category}
                                </h2>
                                <div className="space-y-3">
                                    {group.items.map((item) => (
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
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-accent">
                <div className="container mx-auto px-6 py-20 md:py-24 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        解決しないご質問は、お気軽に
                    </h2>
                    <p className="text-white/80 mb-8 max-w-xl mx-auto">
                        担当者が内容を確認し、ご相談に丁寧にお答えします。
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
