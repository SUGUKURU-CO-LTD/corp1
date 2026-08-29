"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Tractor, Wrench, Users, Code, GraduationCap, ArrowRight, Check, Sparkles } from "lucide-react";
import { useRef } from "react";

const services = [
    {
        id: "dispatch",
        name: "特定技能 農業・畜産派遣",
        tagline: "最短2週間で、即戦力をあなたの農場へ",
        description:
            "インドネシア・フィリピン出身の経験豊富な特定技能人材を、最短2週間で派遣。大型特殊免許・フォークリフト資格保持者も多数在籍。繁忙期に合わせた短期から長期まで柔軟に対応します。",
        icon: Tractor,
        features: [
            "最短2週間・通常1.5ヶ月で派遣開始",
            "大型特殊・フォークリフト免許保持者在籍",
            "病院同行・行政手続きまでフルサポート",
            "緊急時24時間対応・多言語通訳",
            "ミスマッチ時の交代対応あり",
            "住宅手配・入退去サポート込み",
        ],
        pricing: {
            baseRate: "1,600円/時間〜（税抜）",
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
        features: ["成功報酬型", "入社後3ヶ月保証", "ビザ変更サポート", "定着支援プログラム"],
        href: "/services/placement",
        isMain: false,
        delay: 0.2,
    },
    {
        id: "gijinkoku",
        name: "技人国 派遣・紹介",
        tagline: "九州の製造・建設・サービス業へ、専門職人材を",
        description:
            "技術・人文知識・国際業務（技人国）人材を、派遣・職業紹介・紹介予定派遣でご案内。生産管理・品質保証・通訳翻訳・施工管理等、専門性を活かせる職務を設計します。",
        icon: GraduationCap,
        features: ["派遣・紹介・紹介予定派遣に対応", "許可待ちなしで立ち上がりが速い", "業種別の職務設計を伴走", "建設は管理・監督業務に限定"],
        href: "/services/gijinkoku",
        isMain: false,
        delay: 0.3,
    },
    {
        id: "it",
        name: "IT事業",
        tagline: "農業DXから業務システムまで",
        description:
            "Webアプリ、モバイルアプリ、業務システムの企画・開発・運用を提供。農業分野のDX推進から一般企業の業務効率化まで対応します。",
        icon: Code,
        features: ["要件定義から運用まで一貫対応", "アジャイル開発", "クラウドネイティブ", "技術コンサルティング"],
        href: "/services/it",
        isMain: false,
        delay: 0.4,
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
                        background: i % 2 === 0 ? "var(--color-accent)" : "var(--color-accent-light)",
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
            className={`relative overflow-hidden rounded-3xl ${service.isMain
                    ? "bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent"
                    : "bg-white border border-line"
                }`}
        >
            {/* Hover gradient overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at 50% 0%, var(--color-accent-soft) 0%, transparent 70%)",
                }}
            />

            {/* Animated border accent */}
            <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
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
                                className="w-16 h-16 rounded-2xl flex items-center justify-center bg-accent/[0.125]"
                            >
                                <service.icon className="w-8 h-8 text-accent" />
                            </motion.div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3">
                                    <h2 className="text-2xl font-bold text-ink">{service.name}</h2>
                                    {service.isMain && (
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            className="px-3 py-1 bg-accent text-white text-xs font-bold rounded-full"
                                        >
                                            メイン事業
                                        </motion.span>
                                    )}
                                </div>
                                <p className="text-ink-muted mt-1">{service.tagline}</p>
                            </div>
                        </div>

                        <p className="text-ink-muted mb-8 leading-relaxed">{service.description}</p>

                        <div className="grid md:grid-cols-2 gap-4">
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
                                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-accent/[0.125]"
                                    >
                                        <Check className="w-3 h-3 text-accent" />
                                    </motion.div>
                                    <span className="text-ink text-sm">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Pricing / CTA */}
                    <div className="lg:w-1/3 lg:border-l lg:border-line lg:pl-8 flex flex-col justify-center">
                        {service.pricing && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: service.delay + 0.3 }}
                                className="mb-6 p-4 bg-canvas rounded-2xl"
                            >
                                <p className="text-sm text-ink-muted mb-2">料金目安</p>
                                <p className="text-2xl font-bold text-ink">{service.pricing.baseRate}</p>
                                <p className="text-sm text-ink-muted mt-1">{service.pricing.initialFee}</p>
                            </motion.div>
                        )}

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Link
                                href="/contact"
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-white font-bold rounded-full transition-colors shadow-lg bg-accent"
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
                    className="w-14 h-14 bg-gradient-to-br from-accent to-accent-light text-white rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg shadow-accent/30"
                >
                    {step.step}
                </motion.div>
                <h3 className="font-bold text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-ink-muted">{step.desc}</p>
            </div>
            {index < 4 && (
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10"
                >
                    <ArrowRight className="w-8 h-8 text-accent" />
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
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent to-accent z-50"
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-ink-strong min-h-[60vh] flex items-center">
                {/* Aurora Background */}
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-40"
                    style={{
                        background: `radial-gradient(ellipse at 30% 30%, var(--color-accent) 0%, transparent 50%),
                                     radial-gradient(ellipse at 70% 70%, var(--color-accent-light) 0%, transparent 50%)`,
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
                            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                            <span className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-sm font-medium text-white/90">
                                Our Services
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
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
                            className="text-xl text-ink-inverse-muted leading-relaxed max-w-2xl"
                        >
                            派遣、受託、紹介、技人国、そしてテクノロジー。<br />
                            私たちは「人手不足」という複雑な課題を、あらゆる角度から解きほぐす。
                        </motion.p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-canvas to-transparent"
                />
            </section>

            {/* Services List */}
            <section className="section bg-canvas">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold text-ink"
                        >
                            サービス一覧
                        </h2>
                        <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-accent to-accent" />
                    </motion.div>

                    <div className="space-y-8">
                        {services.map((service) => (
                            <GlassServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Achievements Section */}
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
                            className="text-4xl md:text-5xl font-bold text-ink"
                        >
                            導入実績
                        </h2>
                        <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-accent to-accent-light" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-12">
                        {[
                            { number: "120", label: "稼働スタッフ数", icon: "👥" },
                            { number: "60+", label: "導入企業数", icon: "🏢" },
                            { number: "5", label: "稼働エリア", icon: "📍" },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                                    className="text-5xl mb-4"
                                >
                                    {stat.icon}
                                </motion.div>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 + 0.3 }}
                                    className="text-4xl font-bold mb-2 text-accent"
                                >
                                    {stat.number}
                                </motion.p>
                                <p className="text-ink-muted font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h3 className="text-2xl font-bold text-ink text-center mb-8">対応地域（農業派遣）</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                { region: "鹿児島県", type: "お茶・野菜・畜産", icon: "🌿" },
                                { region: "福島県", type: "野菜", icon: "🥬" },
                                { region: "愛媛県", type: "柑橘", icon: "🍊" },
                                { region: "青森県", type: "りんご", icon: "🍎" },
                                { region: "愛知県", type: "野菜・IT", icon: "💻" },
                                { region: "その他", type: "全国対応可", icon: "🗾" },
                            ].map((area, i) => (
                                <motion.div
                                    key={area.region}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-accent/5 to-transparent rounded-xl"
                                >
                                    <span className="text-2xl">{area.icon}</span>
                                    <div>
                                        <p className="font-bold text-ink">{area.region}</p>
                                        <p className="text-sm text-ink-muted">{area.type}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Service Flow */}
            <section className="section bg-canvas">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold text-ink"
                        >
                            ご利用の流れ
                        </h2>
                        <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-accent to-accent" />
                    </motion.div>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-5 gap-6">
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
            <section className="section relative overflow-hidden bg-ink-strong">
                {/* Animated background */}
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-br from-accent via-accent-light to-accent"
                    style={{ backgroundSize: "200% 200%" }}
                />
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
                />

                <div className="container mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
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
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent text-lg font-bold rounded-full shadow-xl shadow-black/20"
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
                    className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-canvas to-transparent pointer-events-none"
                />
            </section>
        </div>
    );
}
