"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, BookOpen, Users, Globe, Heart, ArrowRight, Check } from "lucide-react";

const features = [
    {
        icon: BookOpen,
        title: "体系的な学習コンテンツ",
        description: "特定技能2号試験に必要な知識を、基礎から応用まで段階的に学べます。",
    },
    {
        icon: Globe,
        title: "多言語対応",
        description: "日本語、英語、インドネシア語など、母国語での学習をサポート。",
    },
    {
        icon: Users,
        title: "コミュニティ機能",
        description: "同じ目標を持つ仲間と情報交換。モチベーションを維持できます。",
    },
];

const benefits = [
    "特定技能2号試験の合格率向上",
    "日本での長期就労・永住の道を開く",
    "スキルアップによるキャリア向上",
    "同胞とのネットワーク構築",
    "困ったときの相談窓口",
];

export default function SugustaPage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section bg-gradient-to-br from-[#FFB7C5] via-[#FFD4DC] to-[#FFE4E9] text-[#1A1A1A]">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <GraduationCap className="w-5 h-5 text-[#E91E63]" />
                            <span className="text-[#E91E63] font-bold text-sm">完全無償で提供中</span>
                        </div>

                        <h1
                            className="text-4xl md:text-6xl font-bold mb-6"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            スグスタ
                            <span className="block text-2xl md:text-3xl mt-2 font-normal text-gray-600">
                                SUGUSTA Learning Platform
                            </span>
                        </h1>

                        <p className="text-lg text-gray-700 mb-8">
                            特定技能2号取得を目指すすべての外国人材へ。<br />
                            外国人移民時代の社会インフラとして、学びの機会を提供します。
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#"
                                className="btn bg-[#E91E63] text-white hover:bg-[#C2185B]"
                            >
                                無料で始める
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="#about"
                                className="btn bg-white text-[#1A1A1A] hover:bg-gray-100"
                            >
                                詳しく見る
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Free Section */}
            <section id="about" className="section bg-white">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="w-20 h-20 bg-[#FFB7C5]/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                            <Heart className="w-10 h-10 text-[#E91E63]" />
                        </div>

                        <h2
                            className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            なぜ無償なのか
                        </h2>

                        <div className="bg-[#FAFAF7] rounded-2xl p-8 md:p-12 text-left">
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                私たちは、外国人材が日本社会で活躍することが、日本の未来を支えると信じています。
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                少子高齢化が進む日本において、農業をはじめとする多くの産業は、
                                外国人材なしには成り立たなくなっています。彼らが日本で長く安心して働けるよう、
                                特定技能2号の取得をサポートすることは、私たちの社会的使命です。
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                だからこそ、<strong className="text-[#E91E63]">学びの機会に経済的な障壁があってはならない</strong>と考え、
                                スグスタを完全無償で提供し続けます。
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="section bg-[#FAFAF7]">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2
                            className="text-3xl md:text-4xl font-bold text-[#1A1A1A]"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            スグスタの特長
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#FFB7C5]/20 flex items-center justify-center">
                                    <feature.icon className="w-8 h-8 text-[#E91E63]" />
                                </div>
                                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section bg-white">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2
                            className="text-3xl md:text-4xl font-bold text-[#1A1A1A] text-center mb-12"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            スグスタで得られること
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-center gap-4 p-4 bg-[#FAFAF7] rounded-xl"
                                >
                                    <div className="w-8 h-8 bg-[#E91E63] rounded-full flex items-center justify-center flex-shrink-0">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-gray-700 font-medium">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Languages */}
            <section className="section bg-[#1A1A1A] text-white">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2
                            className="text-3xl md:text-4xl font-bold mb-8"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            対応言語
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {["🇯🇵 日本語", "🇬🇧 English", "🇮🇩 Bahasa Indonesia"].map((lang) => (
                                <span
                                    key={lang}
                                    className="px-6 py-3 bg-white/10 rounded-full text-lg"
                                >
                                    {lang}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-400 mt-6">
                            ※ 今後、ベトナム語、ミャンマー語などの追加を予定しています
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-gradient-to-r from-[#FFB7C5] to-[#FFD4DC]">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2
                            className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            今すぐ学習を始めよう
                        </h2>
                        <p className="text-gray-700 mb-8 max-w-xl mx-auto">
                            登録は無料、学習も無料。<br />
                            特定技能2号への第一歩を、スグスタと一緒に。
                        </p>
                        <a
                            href="#"
                            className="btn bg-[#E91E63] text-white hover:bg-[#C2185B] text-lg"
                        >
                            無料アカウントを作成
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Contact for Companies */}
            <section className="section bg-white">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#FAFAF7] rounded-2xl p-8 md:p-12 text-center"
                    >
                        <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                            企業様へ
                        </h3>
                        <p className="text-gray-600 mb-6">
                            スグスタの法人導入や、外国人材の教育支援についてのご相談も承っております。
                        </p>
                        <Link
                            href="/contact"
                            className="btn btn-primary"
                        >
                            法人向けお問い合わせ
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
