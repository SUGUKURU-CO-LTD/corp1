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
        title: "最短2週間。待たせない。",
        description:
            "人手不足は、待ってくれない。だから私たちは、通常1.5ヶ月、最短2週間で即戦力を届ける。",
    },
    {
        icon: Shield,
        title: "資格を持つプロフェッショナル",
        description:
            "大型特殊、フォークリフト、中型——農業に必要な資格を持つ人材が揃っている。",
    },
    {
        icon: Home,
        title: "住む場所から、私たちは創る",
        description:
            "住居手配、入退去、行政手続き。彼らが「働く」前に「暮らす」場所を整える。",
    },
    {
        icon: Globe,
        title: "言葉の壁は、私たちが壊す",
        description:
            "日本語・英語・インドネシア語。24時間体制で、現場の「困った」に即座に応える。",
    },
    {
        icon: Wrench,
        title: "フルコースのサポート",
        description:
            "病院同行、マイナンバー、銀行口座、年金——すべての手続きを私たちが担う。",
    },
    {
        icon: Users,
        title: "合わなければ、交代する",
        description:
            "ミスマッチは起こりうる。起きたときに、迅速に対応する——それが私たちの責任。",
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
    hourlyRate: "1,550円〜",
    note: "税抜 / 経験・スキルにより変動",
    includes: [
        "住居手配・入退去サポート",
        "行政手続き代行",
        "24時間多言語サポート",
        "病院同行・緊急時対応",
        "ミスマッチ時の交代対応",
    ],
};

export default function DispatchPage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section bg-[#1B5E38] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B5E38] via-[#2d7a4e] to-[#1B5E38]" />
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
                            <span className="text-[#D4A853]">その声に、応えに行く。</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed"
                        >
                            農業の最前線で、人手不足という課題に直面する農家へ。<br />
                            インドネシア・フィリピンから来た、経験豊富な特定技能人材を——<br />
                            最短2週間で、あなたの農場へ届ける。
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                href="/contact"
                                className="btn bg-white text-[#1B5E38] hover:bg-gray-100 text-lg group"
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
            <section className="section bg-[#FAFAF7]">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <span className="text-[#D4A853] font-medium text-sm tracking-wider uppercase mb-4 block">
                            Philosophy
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-8"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            なぜ、外国人材なのか。
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
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
                        <span className="text-[#D4A853] font-medium text-sm tracking-wider uppercase mb-4 block">
                            Features
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-[#1A1A1A]"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            私たちが選ばれる理由
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#1B5E38]/10 flex items-center justify-center mb-4 group-hover:bg-[#1B5E38]/20 transition-colors">
                                    <feature.icon className="w-6 h-6 text-[#1B5E38]" />
                                </div>
                                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flow Section */}
            <section className="section bg-[#1A1A1A]">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#D4A853] font-medium text-sm tracking-wider uppercase mb-4 block">
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
                        <div className="grid md:grid-cols-5 gap-4">
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
                                        <div className="w-10 h-10 bg-[#1B5E38] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                                            {item.step}
                                        </div>
                                        <h3 className="font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-400">{item.description}</p>
                                    </div>
                                    {i < 4 && (
                                        <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-[#D4A853]">
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
            <section className="section bg-[#FAFAF7]">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <span className="text-[#D4A853] font-medium text-sm tracking-wider uppercase mb-4 block">
                                Pricing
                            </span>
                            <h2
                                className="text-3xl md:text-4xl font-bold text-[#1A1A1A]"
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
                            className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                                <div>
                                    <p className="text-gray-500 text-sm mb-2">標準時給</p>
                                    <p className="text-4xl md:text-5xl font-bold text-[#1B5E38]">
                                        {pricing.hourlyRate}
                                    </p>
                                    <p className="text-gray-500 text-sm mt-2">{pricing.note}</p>
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

                            <div className="border-t border-gray-100 pt-8">
                                <p className="font-bold text-[#1A1A1A] mb-4">含まれるサポート</p>
                                <div className="grid md:grid-cols-2 gap-3">
                                    {pricing.includes.map((item) => (
                                        <div key={item} className="flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-[#1B5E38]" />
                                            <span className="text-gray-600">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-gradient-to-br from-[#1B5E38] via-[#2d7a4e] to-[#1B5E38]">
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
                            まずは話を聞くだけでも。最短2週間で、あなたの農場に即戦力を届けます。
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="btn bg-white text-[#1B5E38] hover:bg-gray-100 text-lg group"
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
