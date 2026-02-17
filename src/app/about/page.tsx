"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Award, Users, Building2, Target, Eye, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const companyInfo = {
    name: "スグクル株式会社",
    nameEn: "SUGUKURU., CO., LTD",
    established: "2023年12月",
    capital: "2,000万円",
    employees: "60名（派遣社員含む）",
    business: [
        "特定技能 農業・畜産派遣事業",
        "農作業受託事業",
        "有料職業紹介事業（紹介予定派遣）",
        "IT事業（システム開発・コンサルティング）",
    ],
    address: "〒899-4332 鹿児島県霧島市国分中央3丁目42-8 翔陽A103",
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
    { name: "労働者派遣事業許可", number: "派46-300156", color: "#1B5E38" },
    { name: "有料職業紹介事業許可", number: "46-ユ-300117", color: "#D4A853" },
    { name: "特定技能派遣認定", number: "入国管理局認定済", color: "#7C3AED" },
];

const offices = [
    { name: "本社", location: "鹿児島県霧島市国分中央3丁目42-8", isHQ: true },
    { name: "名古屋支所", location: "愛知県名古屋市名東区牧の原2-901", isHQ: false },
];

const timeline = [
    { year: "2022年2月", event: "WIN国際協同組合 鹿児島支部として活動開始" },
    { year: "2023年12月", event: "スグクル株式会社 設立" },
    { year: "2024年4月", event: "労働者派遣事業許可 取得" },
    { year: "2024年6月", event: "有料職業紹介事業許可 取得" },
    { year: "2024年8月", event: "IT事業部 設立" },
    { year: "2024年10月", event: "福島・愛知・愛媛・青森に拠点展開" },
    { year: "2025年1月", event: "スグスタ（学習支援プラットフォーム）リリース" },
    { year: "2025年7月", event: "名古屋支所 開設" },
];

const values = [
    {
        icon: Target,
        title: "ミッション",
        description: "疲弊する地方、消えゆく農地。日本人だけでは届かない場所へ、世界から手を伸ばす。1%の耕作放棄地を、私たちは取り戻す。",
        color: "#1B5E38",
        delay: 0,
    },
    {
        icon: Eye,
        title: "ビジョン",
        description: "食料自給率が高く、地方が笑顔で溢れる日本へ。収穫の喜びが、次の世代へと受け継がれる社会を創る。",
        color: "#D4A853",
        delay: 0.1,
    },
    {
        icon: Heart,
        title: "バリュー",
        description: "言葉にならない不安も、解決する。住居から医療、言葉の壁まで——フルコースのサポートで、彼らの「居場所」を創り出す。",
        color: "#0D9488",
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
const GlowingIcon = ({ icon: Icon, color, delay }: { icon: any; color: string; delay: number }) => {
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
                className="absolute inset-0 rounded-2xl blur-xl"
                style={{ backgroundColor: color }}
            />
            <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center bg-white/[0.1] border border-white/10 backdrop-blur-sm">
                <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Icon className="w-8 h-8" style={{ color }} />
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
            <div
                className="p-6 rounded-2xl text-center relative overflow-hidden"
                style={{
                    background: `linear-gradient(135deg, ${license.color}20 0%, ${license.color}30 100%)`,
                    border: `1px solid ${license.color}30`,
                }}
            >
                <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                />
                <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${license.color}20` }}
                >
                    <Award className="w-6 h-6" style={{ color: license.color }} />
                </motion.div>
                <p className="text-sm text-gray-600 mb-2">{license.name}</p>
                <p className="text-xl font-bold text-[#1A1A1A]">{license.number}</p>
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
                <span className="text-[#1B5E38] font-bold text-lg">{item.year}</span>
                <div className="absolute right-0 top-1/2 w-3 h-3 bg-[#1B5E38] rounded-full -translate-y-1/2 translate-x-[18px] group-hover:scale-150 transition-transform" />
            </div>
            <div className="relative flex-1 pb-8 border-l-2 border-[#1B5E38]/20 pl-8">
                <div className="absolute left-0 top-1 w-4 h-4 bg-[#1B5E38] rounded-full -translate-x-1/2 shadow-lg shadow-[#1B5E38]/30" />
                <motion.p
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                    className="text-gray-700 text-lg leading-relaxed"
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
                    ? "bg-gradient-to-br from-[#1B5E38]/10 to-[#1B5E38]/5 border-2 border-[#1B5E38]"
                    : "bg-white border border-gray-200"
                }`}
        >
            <div className="flex items-start gap-4">
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${office.isHQ ? "bg-[#1B5E38]" : "bg-[#D4A853]"
                        }`}
                >
                    <MapPin className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                    <h3 className="font-bold text-[#1A1A1A] text-lg flex items-center gap-2">
                        {office.name}
                        {office.isHQ && (
                            <motion.span
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                className="text-xs bg-[#1B5E38] text-white px-2 py-0.5 rounded-full"
                            >
                                本社
                            </motion.span>
                        )}
                    </h3>
                    <p className="text-gray-600 mt-2">{office.location}</p>
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
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1B5E38] via-[#D4A853] to-[#7C3AED] z-50"
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[#0A0A0A] min-h-[70vh] flex items-center">
                {/* Aurora Background */}
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-40"
                    style={{
                        background: `radial-gradient(ellipse at 30% 30%, #1B5E38 0%, transparent 50%),
                                     radial-gradient(ellipse at 70% 70%, #D4A853 0%, transparent 50%),
                                     radial-gradient(ellipse at 50% 50%, #7C3AED 0%, transparent 50%)`,
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
                            background: i % 2 === 0 ? "#1B5E38" : "#D4A853",
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
                            <Image
                                src="/images/logo-horizontal-white.png"
                                alt="スグクル"
                                width={240}
                                height={60}
                                className="h-12 md:h-16 w-auto"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "backOut" }}
                            className="inline-flex items-center gap-2 mb-6"
                        >
                            <Sparkles className="w-5 h-5 text-[#D4A853] animate-pulse" />
                            <span className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-sm font-medium text-white/90">
                                About Us
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
                                火山の麓から、
                            </motion.span>
                            <motion.span
                                initial={{ clipPath: "inset(0 100% 0 0)" }}
                                animate={{ clipPath: "inset(0 0 0 0)" }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="block bg-gradient-to-r from-[#D4A853] via-[#F0C850] to-[#D4A853] bg-clip-text text-transparent"
                            >
                                日本を耕す。
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="text-xl text-gray-300 leading-relaxed max-w-2xl"
                        >
                            鹿児島・霧島。桜島の灰が降り注ぐこの地で、私たちは「スグクル」という名前を掲げた。
                            すぐに来る——その約束を胸に、日本中の農地へ即戦力を届ける。
                        </motion.p>
                    </div>
                </motion.div>

                {/* Bottom gradient */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAF7] to-transparent"
                />
            </section>

            {/* Values */}
            <section className="section bg-[#FAFAF7]">
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
                            className="inline-block px-4 py-2 bg-gradient-to-r from-[#1B5E38]/10 to-[#D4A853]/10 text-[#D4A853] font-medium text-sm tracking-wider uppercase mb-4 rounded-full border border-[#D4A853]/20"
                        >
                            Philosophy
                        </motion.span>
                        <h2
                            className="text-4xl md:text-5xl font-bold text-[#1A1A1A]"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            企業理念
                        </h2>
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-[#1B5E38] to-[#D4A853]"
                        />
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value) => (
                            <GlassCard key={value.title} delay={value.delay}>
                                <GlowingIcon icon={value.icon} color={value.color} delay={0} />
                                <motion.h3
                                    initial={{ opacity: 0.8 }}
                                    whileHover={{ opacity: 1 }}
                                    className="text-xl font-bold text-[#1A1A1A] mt-4 mb-3 relative z-10"
                                >
                                    {value.title}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0.6 }}
                                    whileHover={{ opacity: 1 }}
                                    className="text-gray-600 leading-relaxed relative z-10"
                                >
                                    {value.description}
                                </motion.p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Info */}
            <section className="section bg-gray-50">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold text-[#1A1A1A]"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            会社概要
                        </h2>
                        <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-[#1B5E38] to-[#D4A853]" />
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
                            <div className="p-8 border-b md:border-b-0 md:border-r border-gray-100">
                                <table className="w-full">
                                    <tbody>
                                        <tr className="border-b border-gray-50">
                                            <td className="px-4 py-4 bg-gray-50/50 font-medium text-[#1A1A1A] w-1/3">会社名</td>
                                            <td className="px-4 py-4 text-gray-700">{companyInfo.name}</td>
                                        </tr>
                                        <tr className="border-b border-gray-50">
                                            <td className="px-4 py-4 bg-gray-50/50 font-medium text-[#1A1A1A]">英語表記</td>
                                            <td className="px-4 py-4 text-gray-700">{companyInfo.nameEn}</td>
                                        </tr>
                                        <tr className="border-b border-gray-50">
                                            <td className="px-4 py-4 bg-gray-50/50 font-medium text-[#1A1A1A]">設立</td>
                                            <td className="px-4 py-4 text-gray-700">{companyInfo.established}</td>
                                        </tr>
                                        <tr className="border-b border-gray-50">
                                            <td className="px-4 py-4 bg-gray-50/50 font-medium text-[#1A1A1A]">資本金</td>
                                            <td className="px-4 py-4 text-gray-700">{companyInfo.capital}</td>
                                        </tr>
                                        <tr className="border-b border-gray-50">
                                            <td className="px-4 py-4 bg-gray-50/50 font-medium text-[#1A1A1A]">所在地</td>
                                            <td className="px-4 py-4 text-gray-700">{companyInfo.address}</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-4 bg-gray-50/50 font-medium text-[#1A1A1A]">電話番号</td>
                                            <td className="px-4 py-4 text-gray-700">{companyInfo.phone}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Right: Officers & Business */}
                            <div className="p-8">
                                <div className="mb-8">
                                    <h3 className="font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                                        <Users className="w-5 h-5 text-[#1B5E38]" />
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
                                                    style={{ backgroundColor: index < 2 ? "#1B5E38" : "#D4A853" }}
                                                >
                                                    {index + 1}
                                                </motion.span>
                                                <span className="font-medium text-[#1A1A1A]">{officer.position}</span>
                                                <span className="text-gray-600">{officer.name}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                                        <Building2 className="w-5 h-5 text-[#1B5E38]" />
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
                                                <span className="w-2 h-2 rounded-full bg-[#D4A853] mt-2 flex-shrink-0" />
                                                <span className="text-gray-700 text-sm">{item}</span>
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
                            className="text-4xl md:text-5xl font-bold text-[#1A1A1A]"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            許認可情報
                        </h2>
                        <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-[#1B5E38] to-[#D4A853]" />
                    </motion.div>

                    <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6">
                        {licenses.map((license, index) => (
                            <LicenseBadge key={license.name} license={license} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
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
                            沿革
                        </h2>
                        <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-[#1B5E38] to-[#D4A853]" />
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
                            className="text-4xl md:text-5xl font-bold text-[#1A1A1A]"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            拠点・アクセス
                        </h2>
                        <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-[#1B5E38] to-[#D4A853]" />
                    </motion.div>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
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
                        <div className="bg-gradient-to-br from-[#1B5E38]/10 to-[#D4A853]/10 rounded-3xl overflow-hidden h-80 flex items-center justify-center relative">
                            <motion.div
                                animate={{ scale: [1, 1.02, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="text-center"
                            >
                                <MapPin className="w-12 h-12 text-[#1B5E38] mx-auto mb-4" />
                                <p className="text-gray-600">鹿児島県霧島市国分中央3丁目42-8</p>
                                <p className="text-sm text-gray-500 mt-2">Google Maps 埋め込み</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-[#0A0A0A] relative overflow-hidden">
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

                <div className="container mx-auto relative z-10 text-center">
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
                            お問い合わせ
                        </h2>
                        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                            ご質問・ご相談がございましたら、お気軽にお問い合わせください。
                        </p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1B5E38] text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-shadow"
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
                    className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAF7] to-transparent"
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
// テスト送信
// テスト送信2

