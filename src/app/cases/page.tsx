"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    Building2,
    Users,
    MapPin,
    Quote,
    Phone,
    TrendingUp,
    CheckCircle2,
    Leaf,
} from "lucide-react";

// 取引先の実名は開示しない。地域・業種のみを記載し「〜様」として匿名化する。
// Client company names are not disclosed. Only region and industry are shown, anonymized as "〜様".
// Nama perusahaan klien tidak diungkapkan. Hanya wilayah dan jenis usaha yang dicantumkan, dianonimkan sebagai "〜様".
const caseStudies = [
    {
        id: 1,
        company: "霧島市 お茶生産法人様",
        industry: "茶業（製茶・茶園管理）",
        location: "鹿児島県霧島市",
        staffCount: 10,
        image: "/images/cases/tea-farm-workers.png",
        challenge:
            "繁忙期の茶摘みシーズンに人手が大幅に不足。地元の雇用だけでは対応しきれず、収穫期の品質維持が課題でした。",
        solution:
            "インドネシアからの特定技能人材10名を派遣。茶摘みから製茶工程まで、一貫したサポート体制を構築しました。",
        result: "繁忙期も安定した人材確保ができるようになり、品質を保った茶葉の生産を続けています。",
        testimonial:
            "スグクルさんのおかげで、繁忙期も安心して乗り越えられるようになりました。スタッフの皆さんは真面目で、技術の習得も早いです。",
        testimonialAuthor: "代表取締役",
    },
    {
        id: 2,
        company: "鹿児島県 有機茶生産法人様",
        industry: "茶業（有機茶栽培）",
        location: "鹿児島県",
        staffCount: 8,
        image: "/images/cases/organic-tea-cultivation.png",
        challenge:
            "有機茶栽培は機械化が難しく、手作業が中心。熟練した労働力の確保が長年の課題でした。",
        solution:
            "農業経験のあるインドネシア人材8名を派遣。有機栽培の特性を理解した丁寧な指導で、即戦力として活躍。",
        result: "品質を維持しながら、有機認証の基準をクリアし続けています。",
        testimonial:
            "有機栽培は手間がかかりますが、派遣スタッフの皆さんは細かい作業も丁寧にこなしてくれます。言葉の壁もスグクルさんが通訳してくれるので安心です。",
        testimonialAuthor: "農場長",
    },
    {
        id: 3,
        company: "鹿児島県 農業物流法人様",
        industry: "農業物流（集出荷・配送）",
        location: "鹿児島県",
        staffCount: null,
        image: "/images/cases/ja-logistics-kagoshima.jpg",
        challenge:
            "集出荷場での仕分け・積み込み作業の人手が不足し、繁忙期の出荷対応に課題を抱えていました。",
        solution:
            "特定技能人材を派遣し、集出荷場での仕分け・積み込み業務からサポートしています。",
        result: "2025年9月から受け入れを継続中です。",
        testimonial: null,
        testimonialAuthor: null,
    },
];

const stats = [
    { value: "60+", label: "導入企業数", icon: Building2 },
    { value: "120", label: "稼働スタッフ", icon: Users },
    { value: "5", label: "稼働エリア", icon: TrendingUp },
    { value: "15+", label: "連携産地", icon: MapPin },
];

export default function CasesPage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section bg-accent text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent-light to-accent" />
                <div className="container mx-auto relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-6">
                                Case Studies
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
                            導入事例・実績
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed"
                        >
                            全国の農業法人・農家様に、確かな成果をお届けしています。<br />
                            人手不足という課題を解決し、農業の未来を共に創る——<br />
                            私たちのパートナーシップの実例をご紹介します。
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section bg-ink">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                                    <stat.icon className="w-6 h-6 text-accent" />
                                </div>
                                <p
                                    className="text-4xl md:text-5xl font-bold text-accent mb-2"
                                    style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                                >
                                    {stat.value}
                                </p>
                                <p className="text-ink-inverse-muted text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="section bg-canvas">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                            Success Stories
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-ink"
                        >
                            導入企業様の声
                        </h2>
                        <p className="text-ink-muted text-xs mt-3">※ 掲載写真はイメージです。実際の現場の写真ではありません。</p>
                    </motion.div>

                    <div className="space-y-12">
                        {caseStudies.map((caseStudy, index) => (
                            <motion.div
                                key={caseStudy.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-sm border border-line overflow-hidden"
                            >
                                {/* Image Section */}
                                <div className="relative h-64 md:h-80 overflow-hidden">
                                    <img
                                        src={caseStudy.image}
                                        alt={`${caseStudy.industry}のイメージ写真`}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                        <div className="flex flex-wrap items-end justify-between gap-4">
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <div
                                                        className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/20 backdrop-blur-sm"
                                                    >
                                                        <Leaf className="w-5 h-5 text-white" />
                                                    </div>
                                                    <div>
                                                        <h3
                                                            className="text-2xl font-bold text-white"
                                                        >
                                                            {caseStudy.company}
                                                        </h3>
                                                        <p className="text-white/80 text-sm">{caseStudy.industry}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4 text-sm text-white/80">
                                                <span className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                                    <MapPin className="w-4 h-4" />
                                                    {caseStudy.location}
                                                </span>
                                                {caseStudy.staffCount !== null && (
                                                    <span className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                                        <Users className="w-4 h-4" />
                                                        {caseStudy.staffCount}名派遣
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 md:p-10">
                                    {/* Content Grid */}
                                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                                        <div className="bg-canvas rounded-xl p-6">
                                            <h4 className="font-bold text-ink mb-3 flex items-center gap-2">
                                                <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">
                                                    課
                                                </span>
                                                導入前の課題
                                            </h4>
                                            <p className="text-ink-muted text-sm leading-relaxed">
                                                {caseStudy.challenge}
                                            </p>
                                        </div>
                                        <div className="bg-canvas rounded-xl p-6">
                                            <h4 className="font-bold text-ink mb-3 flex items-center gap-2">
                                                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                                                    解
                                                </span>
                                                スグクルの対応
                                            </h4>
                                            <p className="text-ink-muted text-sm leading-relaxed">
                                                {caseStudy.solution}
                                            </p>
                                        </div>
                                        <div className="bg-canvas rounded-xl p-6">
                                            <h4 className="font-bold text-ink mb-3 flex items-center gap-2">
                                                <CheckCircle2 className="w-6 h-6 text-accent" />
                                                導入後の成果
                                            </h4>
                                            <p className="text-ink-muted text-sm leading-relaxed">
                                                {caseStudy.result}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Testimonial（掲載許諾を得たコメントがある場合のみ表示） */}
                                    {caseStudy.testimonial && (
                                        <div className="rounded-xl p-6 relative bg-accent/[0.03]">
                                            <Quote className="absolute top-4 left-4 w-8 h-8 opacity-20 text-accent" />
                                            <p className="text-ink leading-relaxed pl-8 italic">
                                                「{caseStudy.testimonial}」
                                            </p>
                                            <p className="text-right mt-4 text-sm text-ink-muted">
                                                — {caseStudy.company} {caseStudy.testimonialAuthor}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                            Why Choose Us
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-ink"
                        >
                            選ばれる理由
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            { title: "最短2週間で就業開始", desc: "条件が整えばスピード対応" },
                            { title: "多言語で現場をサポート", desc: "日本語・英語・インドネシア語対応" },
                            { title: "住居・行政手続き代行", desc: "受け入れの手間を最小化" },
                            { title: "農業・畜産経験者をご紹介", desc: "経験を踏まえたマッチング" },
                            { title: "ミスマッチ時の交代対応", desc: "受入れが続くよう支援" },
                            { title: "丁寧なアフターフォロー", desc: "長期的な受入れを支援" },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="flex items-start gap-3 p-4"
                            >
                                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-ink">{item.title}</p>
                                    <p className="text-ink-muted text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-gradient-to-br from-accent via-accent-light to-accent">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2
                            className="text-3xl md:text-4xl font-bold text-white mb-6"
                        >
                            次は、あなたの農場で。
                        </h2>
                        <p className="text-white/80 mb-8 max-w-xl mx-auto">
                            人手不足の課題、お聞かせください。<br />
                            最適な解決策を一緒に考えます。
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="btn bg-white text-accent hover:bg-gray-100 text-lg group"
                            >
                                無料相談を予約
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
