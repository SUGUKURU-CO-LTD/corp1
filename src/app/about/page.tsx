"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Award, Users, Building2, Target, Eye, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { COMPANY_ADDRESS_FULL_JA, COMPANY_ADDRESS_LINE_JA } from "@/lib/company";

const companyInfo = {
    name: "スグクル株式会社",
    nameEn: "SUGUKURU., CO., LTD",
    established: "2023年12月",
    capital: "2,000万円",
    employees: "120名（労働者派遣・農作業受託・請負受託を含む・2026年8月1日現在）",
    business: [
        "特定技能 農業・畜産派遣事業",
        "農作業受託事業",
        "有料職業紹介事業",
        "IT事業（システム開発・コンサルティング、MCPサーバーベースのシステム開発）",
    ],
    address: COMPANY_ADDRESS_FULL_JA,
    phone: "0995-73-9939",
    email: "info@sugu-kuru.co.jp",
    officers: [
        { position: "代表取締役", name: "壁 晃弘" },
        { position: "取締役", name: "壁 美和子" },
        { position: "社外取締役", name: "花井 紀文" },
        { position: "監査", name: "高平 早紀" },
    ],
};

const licenses = [
    { name: "労働者派遣事業許可", number: "派46-300262" },
    { name: "有料職業紹介事業許可", number: "46-ユ-300203" },
];

const offices = [
    { name: "本社", location: COMPANY_ADDRESS_LINE_JA, isHQ: true },
    { name: "ロンボク拠点", location: "インドネシア・ロンボク島", isHQ: false },
];

const timeline = [
    { year: "2022年2月", event: "WIN国際協同組合 鹿児島支部として活動開始" },
    { year: "2023年12月", event: "スグクル株式会社 設立" },
    { year: "2024年4月", event: "労働者派遣事業許可 取得" },
    { year: "2024年6月", event: "有料職業紹介事業許可 取得" },
    { year: "2024年8月", event: "IT事業部 設立" },
    { year: "2024年10月", event: "福島・愛知・愛媛・青森など全国の就業エリアへ展開" },
    { year: "2025年7月", event: "名古屋支所 開設" },
    { year: "2025年9月", event: "農業物流分野への派遣開始" },
    { year: "2026年6月", event: "第4期事業年度 開始（派遣・農作業受託・ロンボク送り出しを主軸に）" },
    { year: "2026年8月", event: "ロンボク拠点（PT MIRAI JAPAN）設立" },
];

const values = [
    {
        icon: Target,
        title: "ミッション",
        description: "人手が足りない地方、担い手が減る産業。日本人だけでは届かない場所へ、世界から手を伸ばす。人材の確保を通じて、地域と産業の持続を後押しする。",
        delay: 0,
    },
    {
        icon: Eye,
        title: "ビジョン",
        description: "食料自給率を守り、地方が笑顔で溢れる日本へ。あらゆる産業の現場に活気を取り戻し、次の世代へ受け継がれる社会を創る。",
        delay: 0.1,
    },
    {
        icon: Heart,
        title: "バリュー",
        description: "言葉にならない不安も、解決する。住居から医療、言葉の壁まで——フルコースのサポートで、彼らの「居場所」を創り出す。",
        delay: 0.2,
    },
];

// Glass card component
const GlassCard = ({ children, delay }: { children: React.ReactNode; delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative group"
        >
            <div className="relative p-8 bg-white/[0.05] backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                {children}
            </div>
        </motion.div>
    );
};

// Glowing icon component
const GlowingIcon = ({ icon: Icon, delay }: { icon: any; delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, type: "spring", stiffness: 200 }}
            className="relative"
        >
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl blur-xl bg-accent"
            />
            <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center bg-white/[0.1] border border-white/10 backdrop-blur-sm">
                <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Icon className="w-8 h-8 text-accent" />
                </motion.div>
            </div>
        </motion.div>
    );
};

// Animated license badge
const LicenseBadge = ({ license, index }: { license: typeof licenses[0]; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
        >
            <div className="p-6 rounded-2xl text-center relative overflow-hidden bg-gradient-to-br from-accent/[0.125] to-accent/[0.188] border border-accent/[0.188]">
                <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                />
                <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center bg-accent/[0.125]"
                >
                    <Award className="w-6 h-6 text-accent" />
                </motion.div>
                <p className="text-sm text-ink-muted mb-2">{license.name}</p>
                <p className="text-xl font-bold text-ink">{license.number}</p>
            </div>
        </motion.div>
    );
};

// Timeline item
const TimelineItem = ({ item, index }: { item: typeof timeline[0]; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex gap-6 group"
        >
            <div className="w-28 flex-shrink-0 text-right relative">
                <span className="text-accent font-bold text-lg">{item.year}</span>
                <div className="absolute right-0 top-1/2 w-3 h-3 bg-accent rounded-full -translate-y-1/2 translate-x-[18px] group-hover:scale-150 transition-transform" />
            </div>
            <div className="relative flex-1 pb-8 border-l-2 border-accent/20 pl-8">
                <div className="absolute left-0 top-1 w-4 h-4 bg-accent rounded-full -translate-x-1/2 shadow-lg shadow-accent/30" />
                <motion.p
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                    className="text-ink text-lg leading-relaxed"
                >
                    {item.event}
                </motion.p>
            </div>
        </motion.div>
    );
};

// Office card
const OfficeCard = ({ office }: { office: typeof offices[0] }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`relative p-6 rounded-2xl overflow-hidden ${office.isHQ
                    ? "bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent"
                    : "bg-white border border-line"
                }`}
        >
            <div className="flex items-start gap-4">
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${office.isHQ ? "bg-accent" : "bg-accent"
                        }`}
                >
                    <MapPin className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                    <h3 className="font-bold text-ink text-lg flex items-center gap-2">
                        {office.name}
                        {office.isHQ && (
                            <motion.span
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                className="text-xs bg-accent text-white px-2 py-0.5 rounded-full"
                            >
                                本社
                            </motion.span>
                        )}
                    </h3>
                    <p className="text-ink-muted mt-2">{office.location}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default function AboutPage() {
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
            <section className="relative overflow-hidden bg-ink-strong min-h-[70vh] flex items-center">
                {/* Aurora Background */}
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-40"
                    style={{
                        background: `radial-gradient(ellipse at 30% 30%, var(--color-accent) 0%, transparent 50%),
                                     radial-gradient(ellipse at 70% 70%, var(--color-accent-light) 0%, transparent 50%),
                                     radial-gradient(ellipse at 50% 50%, var(--color-accent-strong) 0%, transparent 50%)`,
                        backgroundSize: "200% 200%",
                    }}
                />
                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, -50, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{ duration: 5 + Math.random() * 3, repeat: Infinity, delay: i * 0.3 }}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                            background: i % 2 === 0 ? "var(--color-accent)" : "var(--color-accent-light)",
                            left: `${10 + i * 10}%`,
                            top: `${20 + Math.random() * 60}%`,
                        }}
                    />
                ))}

                <motion.div style={{ y: heroY }} className="container mx-auto relative z-10 px-6">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "backOut" }}
                            className="mb-8"
                        >
                            <img
                                src="/images/logo-horizontal-white.png"
                                alt="スグクル"
                                className="h-12 md:h-16 w-auto"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "backOut" }}
                            className="inline-flex items-center gap-2 mb-6"
                        >
                            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                            <span className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-sm font-medium text-white/90">
                                About Us
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
                                火山の麓から、
                            </motion.span>
                            <motion.span
                                initial={{ clipPath: "inset(0 100% 0 0)" }}
                                animate={{ clipPath: "inset(0 0 0 0)" }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="block bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent"
                            >
                                人を耕す。
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="text-xl text-ink-inverse-muted leading-relaxed max-w-2xl"
                        >
                            鹿児島・霧島。桜島の灰が降り注ぐこの地で、私たちは「スグクル」という名前を掲げた。
                            すぐに来る——その約束を胸に、日本中の現場へ即戦力を届ける。
                        </motion.p>
                    </div>
                </motion.div>

                {/* Bottom gradient */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-canvas to-transparent"
                />
            </section>

            {/* Values */}
            <section className="section bg-canvas">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-2 bg-gradient-to-r from-accent/10 to-accent/10 text-accent font-medium text-sm tracking-wider uppercase mb-4 rounded-full border border-accent/20"
                        >
                            Philosophy
                        </motion.span>
                        <h2
                            className="text-4xl md:text-5xl font-bold text-ink"
                        >
                            企業理念
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-accent to-accent"
                        />
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {values.map((value) => (
                            <GlassCard key={value.title} delay={value.delay}>
                                <GlowingIcon icon={value.icon} delay={0} />
                                <motion.h3
                                    initial={{ opacity: 0.8 }}
                                    whileHover={{ opacity: 1 }}
                                    className="text-xl font-bold text-ink mt-4 mb-3 relative z-10"
                                >
                                    {value.title}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0.6 }}
                                    whileHover={{ opacity: 1 }}
                                    className="text-ink-muted leading-relaxed relative z-10"
                                >
                                    {value.description}
                                </motion.p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Info */}
            <section className="section bg-canvas">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold text-ink"
                        >
                            会社概要
                        </h2>
                        <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-accent to-accent" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl"
                    >
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Left: Basic Info */}
                            <div className="p-8 border-b md:border-b-0 md:border-r border-line">
                                <table className="w-full">
                                    <tbody>
                                        <tr className="border-b border-gray-50">
                                            <td className="px-4 py-4 bg-canvas/50 font-medium text-ink w-1/3">会社名</td>
                                            <td className="px-4 py-4 text-ink">{companyInfo.name}</td>
                                        </tr>
                                        <tr className="border-b border-gray-50">
                                            <td className="px-4 py-4 bg-canvas/50 font-medium text-ink">英語表記</td>
                                            <td className="px-4 py-4 text-ink">{companyInfo.nameEn}</td>
                                        </tr>
                                        <tr className="border-b border-gray-50">
                                            <td className="px-4 py-4 bg-canvas/50 font-medium text-ink">設立</td>
                                            <td className="px-4 py-4 text-ink">{companyInfo.established}</td>
                                        </tr>
                                        <tr className="border-b border-gray-50">
                                            <td className="px-4 py-4 bg-canvas/50 font-medium text-ink">資本金</td>
                                            <td className="px-4 py-4 text-ink">{companyInfo.capital}</td>
                                        </tr>
                                        <tr className="border-b border-gray-50">
                                            <td className="px-4 py-4 bg-canvas/50 font-medium text-ink">所在地</td>
                                            <td className="px-4 py-4 text-ink">{companyInfo.address}</td>
                                        </tr>
                                        <tr className="border-b border-gray-50">
                                            <td className="px-4 py-4 bg-canvas/50 font-medium text-ink">電話番号</td>
                                            <td className="px-4 py-4 text-ink">{companyInfo.phone}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-4 bg-canvas/50 font-medium text-ink">稼働スタッフ</td>
                                            <td className="px-4 py-4 text-ink">{companyInfo.employees}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Right: Officers & Business */}
                            <div className="p-8">
                                <div className="mb-8">
                                    <h3 className="font-bold text-ink mb-4 flex items-center gap-2">
                                        <Users className="w-5 h-5 text-accent" />
                                        役員
                                    </h3>
                                    <div className="space-y-3">
                                        {companyInfo.officers.map((officer, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-center gap-2"
                                            >
                                                <motion.span
                                                    whileHover={{ scale: 1.1 }}
                                                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                                                    style={{ backgroundColor: index < 2 ? "var(--color-accent)" : "var(--color-accent-light)" }}
                                                >
                                                    {index + 1}
                                                </motion.span>
                                                <span className="font-medium text-ink">{officer.position}</span>
                                                <span className="text-ink-muted">{officer.name}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-bold text-ink mb-4 flex items-center gap-2">
                                        <Building2 className="w-5 h-5 text-accent" />
                                        事業内容
                                    </h3>
                                    <ul className="space-y-2">
                                        {companyInfo.business.map((item, index) => (
                                            <motion.li
                                                key={item}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.5 + index * 0.1 }}
                                                className="flex items-start gap-2"
                                            >
                                                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                                                <span className="text-ink text-sm">{item}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Licenses */}
            <section className="section bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold text-ink"
                        >
                            許認可情報
                        </h2>
                        <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-accent to-accent" />
                    </motion.div>

                    <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
                        {licenses.map((license, index) => (
                            <LicenseBadge key={license.name} license={license} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
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
                            沿革
                        </h2>
                        <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-accent to-accent" />
                    </motion.div>

                    <div className="max-w-3xl mx-auto">
                        {timeline.map((item, index) => (
                            <TimelineItem key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Offices */}
            <section className="section bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold text-ink"
                        >
                            拠点・アクセス
                        </h2>
                        <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-accent to-accent" />
                    </motion.div>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
                        {offices.map((office) => (
                            <OfficeCard key={office.name} office={office} />
                        ))}
                    </div>

                    {/* Map placeholder */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-gradient-to-br from-accent/10 to-accent/10 rounded-3xl overflow-hidden h-80 flex items-center justify-center relative">
                            <motion.div
                                animate={{ scale: [1, 1.02, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="text-center"
                            >
                                <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                                <p className="text-ink-muted">{COMPANY_ADDRESS_LINE_JA}</p>
                                <p className="text-sm text-ink-muted mt-2">Google Maps 埋め込み</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-ink-strong relative overflow-hidden">
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
                            お問い合わせ
                        </h2>
                        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                            ご質問・ご相談がございましたら、お気軽にお問い合わせください。
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-accent text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-shadow"
                            >
                                お問い合わせフォームへ
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom gradient */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-canvas to-transparent"
                />
            </section>
        </div>
    );
}

function ArrowRight({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
    );
}


