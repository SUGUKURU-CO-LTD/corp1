"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    Code,
    Smartphone,
    Cloud,
    Cpu,
    GitBranch,
    Phone,
    CheckCircle2,
    Lightbulb,
} from "lucide-react";

const services = [
    {
        icon: Code,
        title: "Webシステム開発",
        description: "業務システム、管理画面、API——ビジネスを支えるシステムを構築。",
    },
    {
        icon: Smartphone,
        title: "モバイルアプリ開発",
        description: "iOS・Android対応。ユーザー体験を重視したアプリ開発。",
    },
    {
        icon: Cloud,
        title: "クラウドインフラ",
        description: "AWS、GCP、Azure。スケーラブルなインフラを設計・構築。",
    },
    {
        icon: Cpu,
        title: "農業DX支援",
        description: "農業現場のデジタル化。データ活用で生産性向上を支援。",
    },
];

const techStack = [
    "React / Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Go",
    "PostgreSQL",
    "AWS / GCP",
    "Docker / Kubernetes",
];

const flow = [
    { step: 1, title: "ヒアリング", description: "課題と目標を深掘り" },
    { step: 2, title: "要件定義", description: "実現方法を具体化" },
    { step: 3, title: "設計・開発", description: "アジャイルで進行" },
    { step: 4, title: "テスト・納品", description: "品質を担保" },
    { step: 5, title: "運用・保守", description: "継続的にサポート" },
];

export default function ITPage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section bg-[#2563EB] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] via-[#3b82f6] to-[#1d4ed8]" />
                <div className="container mx-auto relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-6">
                                IT Business
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            コードで、<br />
                            <span className="text-[#D4A853]">課題を解く。</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed"
                        >
                            農業にもデジタルを。ビジネスにもイノベーションを。<br />
                            Webシステム、モバイルアプリ、クラウドインフラ——<br />
                            テクノロジーの力で、複雑な課題を解きほぐす。
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                href="/contact"
                                className="btn bg-white text-[#2563EB] hover:bg-gray-100 text-lg group"
                            >
                                開発相談をする
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
                            技術は、手段に過ぎない。
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            私たちは、技術のための技術を追わない。<br />
                            大切なのは、「何を解決するか」——<br /><br />
                            業務の非効率、データの断絶、コミュニケーションの摩擦。<br />
                            現場の「困った」に耳を傾け、最適な技術で解決策を設計する。<br />
                            それが、私たちのIT事業。
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
                            提供サービス
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
                                <div className="w-14 h-14 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-[#2563EB]/20 transition-colors">
                                    <service.icon className="w-7 h-7 text-[#2563EB]" />
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

            {/* Tech Stack */}
            <section className="section bg-[#1A1A1A]">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="text-[#D4A853] font-medium text-sm tracking-wider uppercase mb-4 block">
                            Tech Stack
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-white"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            技術スタック
                        </h2>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                        {techStack.map((tech, index) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white text-sm font-medium"
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flow */}
            <section className="section bg-[#FAFAF7]">
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
                            className="text-3xl md:text-4xl font-bold text-[#1A1A1A]"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            開発の流れ
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
                                    <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100 h-full">
                                        <div className="w-10 h-10 bg-[#2563EB] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                                            {item.step}
                                        </div>
                                        <h3 className="font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-500">{item.description}</p>
                                    </div>
                                    {i < 4 && (
                                        <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-[#2563EB]">
                                            →
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Case - 自社開発プロダクト */}
            <section className="section bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="text-[#D4A853] font-medium text-sm tracking-wider uppercase mb-4 block">
                            Products
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-[#1A1A1A]"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            自社開発プロダクト
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* スグスタ */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-gradient-to-br from-[#FFB7C5] to-[#FFD4DC] rounded-2xl p-8 hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Lightbulb className="w-8 h-8 text-[#E91E63]" />
                                <span className="text-[#E91E63] font-bold text-xl">スグスタ</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                                外国人材のための学習支援プラットフォーム
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                                特定技能2号取得を目指す外国人材のための学習支援プラットフォーム。
                                「外国人移民時代の社会インフラ」として、完全無償で提供中。
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-white/50 backdrop-blur-sm rounded-full text-xs font-medium text-[#E91E63]">
                                    完全無償
                                </span>
                                <span className="px-3 py-1 bg-white/50 backdrop-blur-sm rounded-full text-xs font-medium text-[#E91E63]">
                                    学習支援
                                </span>
                                <span className="px-3 py-1 bg-white/50 backdrop-blur-sm rounded-full text-xs font-medium text-[#E91E63]">
                                    特定技能2号
                                </span>
                            </div>
                            <Link
                                href="https://www.sugu-study.com"
                                target="_blank"
                                className="btn bg-white text-[#E91E63] hover:bg-gray-50 w-full justify-center group"
                            >
                                スグスタを見る
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* NENKIN-PASS */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-gradient-to-br from-[#3b82f6] to-[#60a5fa] rounded-2xl p-8 hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <CheckCircle2 className="w-8 h-8 text-white" />
                                <span className="text-white font-bold text-xl">NENKIN-PASS</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                外国人のための年金申請支援サービス
                            </h3>
                            <p className="text-white/90 leading-relaxed mb-6 text-sm">
                                複雑な年金申請手続きを、AIとチャットで簡単に。
                                外国人材が安心して日本で働き続けるための、デジタル支援プラットフォーム。
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                                    AI対応
                                </span>
                                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                                    年金申請
                                </span>
                                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                                    多言語対応
                                </span>
                            </div>
                            <Link
                                href="https://nenkin1-9bihlgf5w-sugukurus-projects.vercel.app/"
                                target="_blank"
                                className="btn bg-white text-[#2563EB] hover:bg-gray-50 w-full justify-center group"
                            >
                                NENKIN-PASSを見る
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-gradient-to-br from-[#2563EB] via-[#3b82f6] to-[#1d4ed8]">
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
                            技術で、課題を解く。<br />
                            一緒に考えませんか。
                        </h2>
                        <p className="text-white/80 mb-8 max-w-xl mx-auto">
                            まずは課題をお聞かせください。最適な解決策をご提案します。
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="btn bg-white text-[#2563EB] hover:bg-gray-100 text-lg group"
                            >
                                開発相談をする
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
