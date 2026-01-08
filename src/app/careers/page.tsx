"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    Rocket,
    Globe,
    Bot,
    TrendingUp,
    Users,
    Briefcase,
    MapPin,
    Banknote,
    Clock,
    Gift,
    CheckCircle2,
    Sparkles,
    Phone,
    Mail,
    Zap,
    Target,
    Award,
} from "lucide-react";

const positions = [
    {
        id: "sales",
        title: "営業部",
        subtitle: "Business Development",
        description: "外国人材の派遣先開拓から、既存クライアントのサポートまで。農業・畜産業界のパートナーと共に、人手不足という社会課題を解決する最前線で活躍していただきます。",
        responsibilities: [
            "新規クライアント（農家・農業法人）への提案営業",
            "既存クライアントのフォローアップ・関係構築",
            "派遣スタッフの現場訪問・状況確認",
            "業界イベント・展示会への参加",
        ],
        icon: Target,
        color: "#1B5E38",
    },
    {
        id: "admin",
        title: "管理部",
        subtitle: "Operations & Support",
        description: "外国人スタッフの日常サポートから、行政手続き、住居手配まで。バックオフィスから事業を支え、スタッフが安心して働ける環境を作る重要なポジションです。",
        responsibilities: [
            "外国人スタッフの生活サポート・通訳業務",
            "ビザ申請・在留資格関連の書類作成",
            "住居手配・行政手続きのサポート",
            "スタッフ研修の企画・運営",
        ],
        icon: Users,
        color: "#D4A853",
    },
];

const benefits = [
    { icon: Banknote, title: "月給22万円〜", desc: "経験・能力に応じて優遇" },
    { icon: Clock, title: "固定残業手当含む", desc: "超過分は別途支給" },
    { icon: Gift, title: "各種手当充実", desc: "通勤・住宅手当など" },
    { icon: TrendingUp, title: "成果報酬制度", desc: "研修後、実績に応じたコミッション" },
];

const requirements = [
    {
        icon: Globe,
        title: "海外生活経験1年以上",
        description: "語学力だけでなく、異文化理解・適応力を重視しています",
    },
    {
        icon: Bot,
        title: "テクノロジーへの関心",
        description: "AIツールを活用した業務効率化に積極的に取り組める方",
    },
    {
        icon: Rocket,
        title: "挑戦を楽しめる方",
        description: "変化の早いスタートアップ環境で成長したい方",
    },
];

export default function CareersPage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="py-20 md:py-28 bg-[#1A1A1A] text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-[#1B5E38] rounded-full blur-[100px]" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4A853] rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="px-4 py-2 bg-[#D4A853]/20 text-[#D4A853] rounded-full text-sm font-medium">
                                We&apos;re Hiring
                            </span>
                            <span className="px-4 py-2 bg-[#1B5E38]/20 text-[#1B5E38] rounded-full text-sm font-medium flex items-center gap-1">
                                <Sparkles className="w-4 h-4" />
                                急成長中
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
                            <span className="text-[#D4A853]">世界</span>と<span className="text-[#1B5E38]">農業</span>を繋ぐ<br />
                            新しい仲間を募集
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed"
                        >
                            スグクルは、AI×グローバル人材で日本の農業を変えるスタートアップ。<br />
                            毎年成長を続ける私たちと一緒に、社会課題に挑戦しませんか？
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href="#positions"
                                className="btn bg-[#1B5E38] text-white hover:bg-[#164a2d] group"
                            >
                                募集ポジションを見る
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <Link
                                href="/contact"
                                className="btn bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                            >
                                カジュアル面談を申し込む
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#D4A853] font-medium text-sm tracking-wider uppercase mb-4 block">
                            Why Join Us
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-[#1A1A1A]"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            スグクルで働く魅力
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: Rocket,
                                title: "毎年成長するスタートアップ",
                                description: "設立以来、右肩上がりの成長を続けています。あなたの活躍が会社の成長に直結する、手応えのある環境です。",
                                color: "#1B5E38",
                            },
                            {
                                icon: Bot,
                                title: "AI × 業務効率化",
                                description: "ChatGPT、翻訳AI、自動化ツールを積極導入。最先端技術を使いながら働くことで、市場価値の高いスキルが身につきます。",
                                color: "#D4A853",
                            },
                            {
                                icon: Globe,
                                title: "グローバルな環境",
                                description: "インドネシア、フィリピン、ベトナムなど多国籍なスタッフと協働。毎日が異文化交流の場です。",
                                color: "#1B5E38",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className="card h-full">
                                    <div
                                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                                        style={{ backgroundColor: `${item.color}15` }}
                                    >
                                        <item.icon className="w-7 h-7" style={{ color: item.color }} />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Requirements */}
            <section className="py-20 bg-[#FAFAF7]">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#D4A853] font-medium text-sm tracking-wider uppercase mb-4 block">
                            Who We&apos;re Looking For
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-[#1A1A1A]"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            こんな方を求めています
                        </h2>
                    </motion.div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        {requirements.map((req, index) => (
                            <motion.div
                                key={req.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start gap-5"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#1B5E38]/10 flex items-center justify-center flex-shrink-0">
                                    <req.icon className="w-6 h-6 text-[#1B5E38]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#1A1A1A] text-lg mb-1">{req.title}</h3>
                                    <p className="text-gray-600">{req.description}</p>
                                </div>
                                <CheckCircle2 className="w-6 h-6 text-[#1B5E38] flex-shrink-0 ml-auto" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="positions" className="py-20 bg-white scroll-mt-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#D4A853] font-medium text-sm tracking-wider uppercase mb-4 block">
                            Open Positions
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-[#1A1A1A]"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            募集ポジション
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {positions.map((position, index) => (
                            <motion.div
                                key={position.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow"
                            >
                                <div
                                    className="p-6 text-white"
                                    style={{ backgroundColor: position.color }}
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <p className="text-white/70 text-sm mb-1">{position.subtitle}</p>
                                            <h3 className="text-2xl font-bold">{position.title}</h3>
                                        </div>
                                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                                            <position.icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {position.description}
                                    </p>
                                    <h4 className="font-bold text-[#1A1A1A] mb-3 flex items-center gap-2">
                                        <Briefcase className="w-4 h-4" />
                                        主な仕事内容
                                    </h4>
                                    <ul className="space-y-2 mb-6">
                                        {position.responsibilities.map((resp) => (
                                            <li key={resp} className="flex items-start gap-2 text-gray-600 text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-[#1B5E38] mt-0.5 flex-shrink-0" />
                                                {resp}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/contact"
                                        className="btn w-full justify-center"
                                        style={{ backgroundColor: position.color, color: "white" }}
                                    >
                                        このポジションに応募
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-[#1A1A1A] text-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#D4A853] font-medium text-sm tracking-wider uppercase mb-4 block">
                            Compensation
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            待遇・給与
                        </h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="text-center p-6"
                            >
                                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#D4A853]/20 flex items-center justify-center">
                                    <benefit.icon className="w-7 h-7 text-[#D4A853]" />
                                </div>
                                <h3 className="font-bold text-white text-lg mb-1">{benefit.title}</h3>
                                <p className="text-gray-400 text-sm">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto mt-12 p-6 bg-white/5 rounded-xl border border-white/10"
                    >
                        <div className="flex items-start gap-4">
                            <Award className="w-8 h-8 text-[#D4A853] flex-shrink-0" />
                            <div>
                                <h3 className="font-bold text-white mb-2">成果報酬制度について</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    入社後の研修期間（約3ヶ月）を終えた後、成果に応じたコミッション制度があります。
                                    自分の頑張りがダイレクトに収入に反映される、モチベーションの高い環境です。
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Work Details */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#D4A853] font-medium text-sm tracking-wider uppercase mb-4 block">
                            Details
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-[#1A1A1A]"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            募集要項
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="bg-[#FAFAF7] rounded-2xl overflow-hidden">
                            <table className="w-full">
                                <tbody className="divide-y divide-gray-200">
                                    {[
                                        { label: "雇用形態", value: "正社員" },
                                        { label: "勤務地", value: "鹿児島県霧島市（本社）" },
                                        { label: "勤務時間", value: "9:00〜18:00（実働8時間）" },
                                        { label: "給与", value: "月給22万円〜 ※固定残業代含む、経験考慮" },
                                        { label: "賞与", value: "業績に応じて支給" },
                                        { label: "休日", value: "週休2日制、祝日、年末年始、有給休暇" },
                                        { label: "福利厚生", value: "社会保険完備、通勤手当、住宅手当" },
                                        { label: "応募資格", value: "海外生活経験1年以上、普通自動車免許" },
                                    ].map((row) => (
                                        <tr key={row.label}>
                                            <th className="px-6 py-4 text-left text-sm font-bold text-[#1A1A1A] bg-gray-100 w-1/3">
                                                {row.label}
                                            </th>
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                {row.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-[#1B5E38] via-[#2d7a4e] to-[#1B5E38] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-[80px]" />
                    <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#D4A853] rounded-full blur-[100px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Zap className="w-12 h-12 text-[#D4A853] mx-auto mb-6" />
                        <h2
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            まずは話を聞いてみませんか？
                        </h2>
                        <p className="text-white/80 mb-8 max-w-xl mx-auto">
                            カジュアル面談も大歓迎。<br />
                            スグクルの雰囲気や仕事内容について、気軽にお話しましょう。
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="btn bg-white text-[#1B5E38] hover:bg-gray-100 text-lg group"
                            >
                                <Mail className="w-5 h-5" />
                                応募・お問い合わせ
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
