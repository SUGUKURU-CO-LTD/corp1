"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    Clock,
    Shield,
    Users,
    Home,
    Wrench,
    Globe,
    CheckCircle2,
    Phone,
} from "lucide-react";

const features = [
    {
        icon: Clock,
        title: "最短2週間で就業開始",
        description:
            "条件が整っていれば最短2週間が目安です（状況により異なります）。お急ぎのご相談も承ります。",
    },
    {
        icon: Shield,
        title: "資格を持つ人材をご紹介",
        description:
            "大型特殊、フォークリフト、中型など、農業に必要な資格を持つ人材をご紹介できます。",
    },
    {
        icon: Home,
        title: "住まいから整える",
        description:
            "住居手配、入退去、行政手続きまで。働く前の「暮らす」準備を整えます。",
    },
    {
        icon: Globe,
        title: "多言語で現場をサポート",
        description:
            "日本語・英語・インドネシア語で、現場のやり取りや緊急時の一次対応を支援します。",
    },
    {
        icon: Wrench,
        title: "行政手続きも支援",
        description:
            "病院同行、マイナンバー、銀行口座、年金など、必要な手続きの支援を行います。",
    },
    {
        icon: Users,
        title: "ミスマッチ時は交代対応",
        description:
            "相性が合わない場合は、迅速な交代対応を行います。受入れが続くよう支援します。",
    },
];

const flow = [
    { step: 1, title: "お問い合わせ", description: "Web・電話・SNSから" },
    { step: 2, title: "ヒアリング", description: "課題と必要人数を確認" },
    { step: 3, title: "ご契約", description: "料金・条件の合意" },
    { step: 4, title: "入国・準備", description: "住居・手続きを手配" },
    { step: 5, title: "派遣開始", description: "最短2週間で就業" },
];

const pricing = {
    hourlyRate: "1,600円〜",
    note: "税抜 / 経験・スキルにより変動",
    includes: [
        "住居手配・入退去サポート",
        "行政手続き代行",
        "多言語サポート（日本語・英語・インドネシア語）",
        "病院同行・緊急時の一次対応",
        "ミスマッチ時の交代対応",
    ],
};

export default function DispatchPage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section bg-accent text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent-light to-accent" />
                <div className="container mx-auto relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-6">
                                Main Service
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            耕す手が足りない。<br />
                            <span className="text-accent">その声に、応えに行く。</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed"
                        >
                            農業の最前線で、人手不足という課題に直面する農家へ。<br />
                            インドネシア・フィリピンから来た、経験豊富な特定技能人材を——<br />
                            条件が整えば最短2週間で、あなたの農場へご紹介します。
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                href="/contact"
                                className="btn bg-white text-accent hover:bg-gray-100 text-lg group"
                            >
                                今すぐ相談する
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="tel:0995-73-9939"
                                className="btn bg-transparent border-2 border-white/50 hover:bg-white/10"
                            >
                                <Phone className="w-5 h-5" />
                                0995-73-9939
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="section bg-canvas">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                            Philosophy
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-ink mb-8"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            なぜ、外国人材なのか。
                        </h2>
                        <p className="text-ink-muted text-lg leading-relaxed">
                            日本の農業は今、静かな危機に直面している。<br />
                            高齢化、後継者不足、そして増え続ける耕作放棄地。<br /><br />
                            しかし、海の向こうには「働きたい」と願う若者たちがいる。<br />
                            彼らに「居場所」を、そして日本の農業に「未来」を——<br />
                            私たちは、その架け橋になる。
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="section bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                            Features
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-ink"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            私たちが選ばれる理由
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                                    <feature.icon className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="text-lg font-bold text-ink mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-ink-muted text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flow Section */}
            <section className="section bg-ink">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                            Flow
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-white"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            ご利用の流れ
                        </h2>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-5 gap-6">
                            {flow.map((item, i) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className="relative"
                                >
                                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 h-full">
                                        <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                                            {item.step}
                                        </div>
                                        <h3 className="font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-sm text-ink-inverse-muted">{item.description}</p>
                                    </div>
                                    {i < 4 && (
                                        <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-accent">
                                            →
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="section bg-canvas">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                                Pricing
                            </span>
                            <h2
                                className="text-3xl md:text-4xl font-bold text-ink"
                                style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                            >
                                料金について
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-line"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                                <div>
                                    <p className="text-ink-muted text-sm mb-2">標準時給</p>
                                    <p className="text-4xl md:text-5xl font-bold text-accent">
                                        {pricing.hourlyRate}
                                    </p>
                                    <p className="text-ink-muted text-sm mt-2">{pricing.note}</p>
                                </div>
                                <div className="mt-6 md:mt-0">
                                    <Link
                                        href="/contact"
                                        className="btn btn-primary group"
                                    >
                                        見積もりを依頼
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            <div className="border-t border-line pt-8">
                                <p className="font-bold text-ink mb-4">含まれるサポート</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {pricing.includes.map((item) => (
                                        <div key={item} className="flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-accent" />
                                            <span className="text-ink-muted">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-gradient-to-br from-accent via-accent-light to-accent">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2
                            className="text-3xl md:text-4xl font-bold text-white mb-6"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            耕す手が、足りない。<br />
                            その声に、応えに行く。
                        </h2>
                        <p className="text-white/80 mb-8 max-w-xl mx-auto">
                            まずは話を聞くだけでも。条件が整えば最短2週間で、あなたの農場にご紹介します。
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="btn bg-white text-accent hover:bg-gray-100 text-lg group"
                            >
                                今すぐ相談する
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="tel:0995-73-9939"
                                className="btn bg-transparent border-2 border-white/50 text-white hover:bg-white/10"
                            >
                                <Phone className="w-5 h-5" />
                                0995-73-9939
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
