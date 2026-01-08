"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Tractor, Wrench, Users, Code, ArrowRight, Check, Sparkles } from "lucide-react";
import { useRef } from "react";

const services = [
    {
        id: "dispatch",
        name: "特定技能 農業・畜産派遣",
        tagline: "最短2週間で、即戦力をあなたの農場へ",
        description:
            "インドネシア・フィリピン出身の経験豊富な特定技能人材を、最短2週間で派遣。大型特殊免許・フォークリフト資格保持者も多数在籍。繁忙期に合わせた短期から長期まで柔軟に対応します。",
        icon: Tractor,
        color: "#1B5E38",
        features: [
            "最短2週間・通常1.5ヶ月で派遣開始",
            "大型特殊・フォークリフト免許保持者在籍",
            "病院同行・行政手続きまでフルサポート",
            "緊急時24時間対応・多言語通訳",
            "ミスマッチ時の交代対応あり",
            "住宅手配・入退去サポート込み",
        ],
        pricing: {
            baseRate: "1,550円/時間〜（税抜）",
            initialFee: "採用コスト・住宅費用削減",
        },
        href: "/services/dispatch",
        isMain: true,
        delay: 0,
    },
    {
        id: "contracting",
        name: "農作業受託",
        tagline: "繁忙期の作業を丸ごとお任せ",
        description:
            "収穫、選果、梱包などの作業を一括でお任せいただけます。人材の管理・労務はすべて当社が担当。お客様は本業に集中できます。",
        icon: Wrench,
        color: "#0D9488",
        features: ["作業単位での契約可能", "スタッフ管理不要", "繁忙期のみの利用OK", "品質管理体制あり"],
        href: "/services/contracting",
        isMain: false,
        delay: 0.1,
    },
    {
        id: "placement",
        name: "有料職業紹介",
        tagline: "正社員採用をサポート",
        description:
            "派遣ではなく正社員として外国人材を採用したい方向けのサービス。マッチングから入社後のフォローまで一貫してサポートします。",
        icon: Users,
        color: "#7C3AED",
        features: ["成功報酬型", "入社後3ヶ月保証", "ビザ変更サポート", "定着支援プログラム"],
        href: "/services/placement",
        isMain: false,
        delay: 0.2,
    },
    {
        id: "it",
        name: "IT事業",
        tagline: "農業DXから業務システムまで",
        description:
            "Webアプリ、モバイルアプリ、業務システムの企画・開発・運用を提供。農業分野のDX推進から一般企業の業務効率化まで対応します。",
        icon: Code,
        color: "#2563EB",
        features: ["要件定義から運用まで一貫対応", "アジャイル開発", "クラウドネイティブ", "技術コンサルティング"],
        href: "/services/it",
        isMain: false,
        delay: 0.3,
    },
];

// Floating particles
const FloatingParticles = () => {
    return (
        <>
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: i * 0.4 }}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                        background: i % 2 === 0 ? "#1B5E38" : "#D4A853",
                        left: `${15 + i * 12}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}
        </>
    );
};

// Glass card component
const GlassServiceCard = ({ service }: { service: typeof services[0] }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: service.delay }}
            className={`relative overflow-hidden rounded-3xl ${
                service.isMain
                    ? "bg-gradient-to-br from-[#1B5E38]/10 to-[#1B5E38]/5 border-2 border-[#1B5E38]"
                    : "bg-white border border-gray-100"
            }`}
        >
            {/* Hover gradient overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 50% 0%, ${service.color}15 0%, transparent 70%)`,
                }}
            />

            {/* Animated border accent */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ background: service.color }}
            />

            <div className="p-8 md:p-10 relative z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Column */}
                    <div className="lg:w-2/3">
                        <div className="flex items-center gap-4 mb-6">
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                                style={{ backgroundColor: `${service.color}20` }}
                            >
                                <service.icon className="w-8 h-8" style={{ color: service.color }} />
                            </motion.div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3">
                                    <h2 className="text-2xl font-bold text-[#1A1A1A]">{service.name}</h2>
                                    {service.isMain && (
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            className="px-3 py-1 bg-[#1B5E38] text-white text-xs font-bold rounded-full"
                                        >
                                            メイン事業
                                        </motion.span>
                                    )}
                                </div>
                                <p className="text-gray-500 mt-1">{service.tagline}</p>
                            </div>
                        </div>

                        <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>

                        <div className="grid md:grid-cols-2 gap-3">
                            {service.features.map((feature, index) => (
                                <motion.div
                                    key={feature}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: service.delay + index * 0.05 }}
                                    className="flex items-center gap-3"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: `${service.color}20` }}
                                    >
                                        <Check className="w-3 h-3" style={{ color: service.color }} />
                                    </motion.div>
                                    <span className="text-gray-700 text-sm">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Pricing / CTA */}
                    <div className="lg:w-1/3 lg:border-l lg:border-gray-100 lg:pl-8 flex flex-col justify-center">
                        {service.pricing && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: service.delay + 0.3 }}
                                className="mb-6 p-4 bg-gray-50 rounded-2xl"
                            >
                                <p className="text-sm text-gray-500 mb-2">料金目安</p>
                                <p className="text-2xl font-bold text-[#1A1A1A]">{service.pricing.baseRate}</p>
                                <p className="text-sm text-gray-500 mt-1">{service.pricing.initialFee}</p>
                            </motion.div>
                        )}

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Link
                                href="/contact"
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-white font-bold rounded-full transition-colors shadow-lg"
                                style={{ backgroundColor: service.color }}
                            >
                                詳細を相談
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Animated flow step
const FlowStep = ({ step, index }: { step: { step: number; title: string; desc: string }; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
        >
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg h-full relative overflow-hidden">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    className="w-14 h-14 bg-gradient-to-br from-[#1B5E38] to-[#2d7a4e] text-white rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg shadow-[#1B5E38]/30"
                >
                    {step.step}
                </motion.div>
                <h3 className="font-bold text-[#1A1A1A] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
            </div>
            {index < 4 && (
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10"
                >
                    <ArrowRight className="w-8 h-8 text-[#1B5E38]" />
                </motion.div>
            )}
        </motion.div>
    );
};

export default function ServicesPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 50]);

    return (
        <div ref={containerRef} className="pt-20">
            {/* Scroll Progress */}
            <motion.div
                style={{ scaleX: scrollYProgress, originX: 0 }}
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1B5E38] via-[#D4A853] to-[#7C3AED] z-50"
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[#0A0A0A] min-h-[60vh] flex items-center">
                {/* Aurora Background */}
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-40"
                    style={{
                        background: `radial-gradient(ellipse at 30% 30%, #1B5E38 0%, transparent 50%),
                                     radial-gradient(ellipse at 70% 70%, #D4A853 0%, transparent 50%)`,
                        backgroundSize: "200% 200%",
                    }}
                />
                <FloatingParticles />

                <motion.div style={{ y: heroY }} className="container mx-auto relative z-10 px-6">
                    <div className="max-w-4xl">
                    <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "backOut" }}
                            className="inline-flex items-center gap-2 mb-6"
                        >
                            <Sparkles className="w-5 h-5 text-[#D4A853] animate-pulse" />
                            <span className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-sm font-medium text-white/90">
                            Our Services
                        </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            <motion.span
                                initial={{ clipPath: "inset(0 100% 0 0)" }}
                                animate={{ clipPath: "inset(0 0 0 0)" }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="block"
                        >
                            人が足りない、を解決する。
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-xl text-gray-300 leading-relaxed max-w-2xl"
                        >
                            派遣、受託、紹介、そしてテクノロジー。<br />
                            私たちは「農業の人手不足」という複雑な課題を、あらゆる角度から解きほぐす。
                        </motion.p>
                    </div>
                    </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAF7] to-transparent"
                />
            </section>

            {/* Services List */}
            <section className="section bg-[#FAFAF7]">
                <div className="container mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold text-[#1A1A1A]"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            サービス一覧
                                                    </h2>
                        <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-[#1B5E38] to-[#D4A853]" />
                            </motion.div>

                    <div className="space-y-8">
                        {services.map((service) => (
                            <GlassServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Sugusta Banner */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#FFB7C5] via-[#FFD4DC] to-[#FFE4E8]">
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-[#E91E63]/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -30, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-1/2 -left-1/4 w-[500px] h-[500px] bg-[#7C3AED]/10 rounded-full blur-3xl"
                />

                <div className="container mx-auto relative z-10 py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-2xl mx-auto"
                    >
                        <motion.span
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-[#E91E63] text-sm font-bold mb-6"
                        >
                            🌸 完全無償提供中
                        </motion.span>
                        <h2
                            className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            スグスタ - SUGUSTA
                        </h2>
                        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                            特定技能2号取得を目指す外国人材のための学習支援プラットフォーム。
                            外国人移民時代の社会インフラとして、完全無償で提供しています。
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                        <Link
                            href="https://www.sugu-study.com"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#E91E63] text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow"
                        >
                            スグスタについて詳しく
                                <ArrowRight className="w-5 h-5" />
                        </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="section bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold text-[#1A1A1A]"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            主要取引先
                        </h2>
                        <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-[#1B5E38] to-[#D4A853]" />
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {[
                            { name: "霧島中央製茶", area: "鹿児島", type: "お茶" },
                            { name: "ヘンタ製茶", area: "鹿児島", type: "お茶" },
                            { name: "カゴシマ農園", area: "鹿児島", type: "野菜" },
                            { name: "サングリーン", area: "鹿児島", type: "野菜" },
                            { name: "旬彩ファーム", area: "福島", type: "野菜" },
                            { name: "新口農園", area: "愛媛", type: "柑橘" },
                            { name: "日本農業", area: "青森", type: "りんご" },
                            { name: "新保農園", area: "鹿児島", type: "畜産" },
                        ].map((client, i) => (
                            <motion.div
                                key={client.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-shadow"
                            >
                                <motion.h3
                                    whileHover={{ scale: 1.05 }}
                                    className="font-bold text-[#1A1A1A] text-sm"
                                >
                                    {client.name}
                                </motion.h3>
                                <p className="text-xs text-gray-500 mt-2">
                                    <span className="inline-block px-2 py-1 bg-[#1B5E38]/10 text-[#1B5E38] rounded-full text-xs">
                                        {client.area}
                                    </span>
                                    <span className="ml-2 text-gray-400">{client.type}</span>
                                </p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-center text-gray-500 text-sm mt-8"
                    >
                        ...他、鹿児島県内の製茶組合約10社と提携
                    </motion.p>
                </div>
            </section>

            {/* Service Flow */}
            <section className="section bg-[#FAFAF7]">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold text-[#1A1A1A]"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            ご利用の流れ
                        </h2>
                        <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-[#1B5E38] to-[#D4A853]" />
                    </motion.div>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-5 gap-4">
                            {[
                                { step: 1, title: "お問い合わせ", desc: "Web・電話・SNS" },
                                { step: 2, title: "ヒアリング", desc: "オンライン・訪問" },
                                { step: 3, title: "ご契約", desc: "条件のすり合わせ" },
                                { step: 4, title: "準備", desc: "住宅・行政手続き" },
                                { step: 5, title: "派遣開始", desc: "最短2週間" },
                            ].map((item, i) => (
                                <FlowStep key={item.step} step={item} index={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative overflow-hidden bg-[#0A0A0A]">
                {/* Animated background */}
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-br from-[#1B5E38] via-[#2d7a4e] to-[#1B5E38]"
                    style={{ backgroundSize: "200% 200%" }}
                />
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-[#D4A853]/10 rounded-full blur-3xl"
                />

                <div className="container mx-auto relative z-10 text-center py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            どのサービスが最適かわからない？
                        </h2>
                        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                            お客様の状況に合わせて最適なご提案をいたします。
                            まずはお気軽にご相談ください。
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1B5E38] text-lg font-bold rounded-full shadow-xl shadow-black/20"
                            >
                            無料相談を予約
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAF7] to-transparent pointer-events-none"
                />
            </section>
        </div>
    );
}
