"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    Users,
    Heart,
    Shield,
    Clock,
    Phone,
    CheckCircle2,
    Handshake,
} from "lucide-react";

const features = [
    {
        icon: Heart,
        title: "派遣ではなく、仲間として",
        description: "一時的な労働力ではなく、チームの一員として迎える。それが紹介予定派遣。",
    },
    {
        icon: Clock,
        title: "じっくり見極める期間",
        description: "一定期間の派遣を経て、双方が納得の上で直接雇用へ移行。",
    },
    {
        icon: Shield,
        title: "入社後3ヶ月保証",
        description: "万が一の早期退職にも対応。安心してマッチングをお試しいただけます。",
    },
    {
        icon: Users,
        title: "定着支援プログラム",
        description: "入社後も継続的にフォロー。長く働き続けられる環境を支援。",
    },
];

const flow = [
    { step: 1, title: "ご相談", description: "求める人材像をヒアリング" },
    { step: 2, title: "人材選定", description: "条件に合う候補者をご紹介" },
    { step: 3, title: "派遣期間", description: "一定期間、実際に働いてもらう" },
    { step: 4, title: "評価・合意", description: "双方が納得できるか確認" },
    { step: 5, title: "直接雇用", description: "正式に仲間として迎える" },
];

export default function PlacementPage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section bg-[#7C3AED] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] via-[#9333ea] to-[#7C3AED]" />
                <div className="container mx-auto relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-6">
                                Placement Service
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            派遣ではなく、<br />
                            <span className="text-[#D4A853]">仲間として迎えたい。</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed"
                        >
                            一時的ではなく、長く一緒に働く人を探している。<br />
                            紹介予定派遣なら、実際に働いてもらってから決められる。<br />
                            直接雇用へ導く、じっくりマッチング。
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                href="/contact"
                                className="btn bg-white text-[#7C3AED] hover:bg-gray-100 text-lg group"
                            >
                                採用相談をする
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

            {/* Philosophy */}
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
                            出会いを、確かなものに。
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            採用は、賭けではない。<br />
                            履歴書だけでは見えないもの——仕事への姿勢、人柄、チームとの相性。<br /><br />
                            紹介予定派遣は、実際に働いてもらう期間を設けることで、<br />
                            雇用する側もされる側も、納得の上で「仲間」になれる仕組み。<br />
                            私たちは、その出会いを確かなものにする。
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
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
                            紹介予定派遣の特長
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card group"
                            >
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#7C3AED]/20 transition-colors">
                                        <feature.icon className="w-6 h-6 text-[#7C3AED]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flow */}
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
                            直接雇用までの流れ
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
                                        <div className="w-10 h-10 bg-[#7C3AED] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
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

            {/* Pricing */}
            <section className="section bg-[#FAFAF7]">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto">
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
                                料金体系
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100"
                        >
                            <div className="flex items-start gap-4 mb-8">
                                <Handshake className="w-8 h-8 text-[#7C3AED] flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                                        成功報酬型
                                    </h3>
                                    <p className="text-gray-600">
                                        直接雇用が成立した場合のみ紹介料をいただきます。
                                        派遣期間中は通常の派遣料金のみ。採用リスクを最小限に。
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-8">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "成功報酬型で初期費用リスク軽減",
                                        "入社後3ヶ月保証付き",
                                        "ビザ変更手続きサポート",
                                        "定着支援プログラム",
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-[#7C3AED]" />
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
            <section className="section bg-gradient-to-br from-[#7C3AED] via-[#9333ea] to-[#7C3AED]">
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
                            仲間を迎える準備は、<br />
                            できていますか。
                        </h2>
                        <p className="text-white/80 mb-8 max-w-xl mx-auto">
                            派遣ではなく、直接雇用。長く一緒に働く仲間を見つけましょう。
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="btn bg-white text-[#7C3AED] hover:bg-gray-100 text-lg group"
                            >
                                採用相談をする
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
