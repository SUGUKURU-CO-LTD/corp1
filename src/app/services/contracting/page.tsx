"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    Users,
    ClipboardCheck,
    Leaf,
    Package,
    Truck,
    Phone,
    CheckCircle2,
} from "lucide-react";

const services = [
    {
        icon: Leaf,
        title: "収穫作業",
        description: "野菜、果物、お茶——季節の作物を、熟練のチームで収穫。",
    },
    {
        icon: Package,
        title: "選果・梱包",
        description: "品質基準に沿った選別と、丁寧な梱包作業。",
    },
    {
        icon: Truck,
        title: "出荷準備",
        description: "倉庫整理から出荷準備まで、一連の作業をチームで完結。",
    },
    {
        icon: Users,
        title: "チーム派遣",
        description: "繁忙期には20名規模のチームを一斉派遣。大規模案件に対応。",
    },
];

const benefits = [
    "スタッフ管理の手間ゼロ",
    "繁忙期のみのスポット利用OK",
    "チーム単位での一括発注",
    "品質管理体制を構築",
    "作業報告と進捗共有",
    "急な増員にも柔軟に対応",
];

export default function ContractingPage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section bg-[#0D9488] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D9488] via-[#14b8a6] to-[#0D9488]" />
                <div className="container mx-auto relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-6">
                                Contracting Service
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            収穫も選果も、<br />
                            <span className="text-[#D4A853]">丸ごと任せる。</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed"
                        >
                            繁忙期の「困った」を、チームで解決する。<br />
                            収穫から選果、梱包、出荷準備まで——<br />
                            あなたは本業に集中し、作業は私たちにお任せください。
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                href="/contact"
                                className="btn bg-white text-[#0D9488] hover:bg-gray-100 text-lg group"
                            >
                                お見積もり依頼
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
                            あなたの時間を、取り戻す。
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            農業経営者の時間は、限られている。<br />
                            経営判断、品質向上、販路開拓——本当にやるべきことは山ほどある。<br /><br />
                            だからこそ、私たちは「作業」を引き受ける。<br />
                            人材の採用も管理も、すべて私たちの責任。<br />
                            あなたは、あなたにしかできないことに集中してほしい。
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services */}
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
                            Services
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-[#1A1A1A]"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            対応可能な作業
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card text-center group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-[#0D9488]/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-[#0D9488]/20 transition-colors">
                                    <service.icon className="w-7 h-7 text-[#0D9488]" />
                                </div>
                                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section bg-[#1A1A1A]">
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
                                Benefits
                            </span>
                            <h2
                                className="text-3xl md:text-4xl font-bold text-white"
                                style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                            >
                                受託のメリット
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-[#0D9488] flex-shrink-0" />
                                    <span className="text-white">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study */}
            <section className="section bg-[#FAFAF7]">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="text-[#D4A853] font-medium text-sm tracking-wider uppercase mb-4 block">
                            Case
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-[#1A1A1A]"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            導入事例
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100"
                    >
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1">
                                <p className="text-[#0D9488] font-bold mb-2">鹿児島県 製茶組合</p>
                                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
                                    茶摘みシーズンに20名を一斉派遣
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    毎年の繁忙期、人手の確保に苦労していました。スグクルさんに相談したところ、
                                    南大隅から霧島エリアまで、20名のチームを一斉に派遣いただきました。
                                    作業の質も高く、今では毎年お願いしています。
                                </p>
                                <ClipboardCheck className="w-8 h-8 text-[#D4A853]" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-gradient-to-br from-[#0D9488] via-[#14b8a6] to-[#0D9488]">
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
                            繁忙期の作業、<br />
                            丸ごとお任せください。
                        </h2>
                        <p className="text-white/80 mb-8 max-w-xl mx-auto">
                            収穫から出荷まで、チームで完結。まずはお気軽にご相談ください。
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="btn bg-white text-[#0D9488] hover:bg-gray-100 text-lg group"
                            >
                                お見積もり依頼
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
