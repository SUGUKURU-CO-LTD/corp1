"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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

const caseStudies = [
    {
        id: 1,
        company: "霧島中央製茶",
        industry: "茶業（製茶・茶園管理）",
        location: "鹿児島県霧島市",
        staffCount: 10,
        image: "/images/cases/tea-farm-workers.png",
        challenge:
            "繁忙期の茶摘みシーズンに人手が大幅に不足。地元の雇用だけでは対応しきれず、収穫期の品質維持が課題でした。",
        solution:
            "インドネシアからの特定技能人材10名を派遣。茶摘みから製茶工程まで、一貫したサポート体制を構築しました。",
        result: "収穫効率が前年比30%向上。安定した人材確保により、品質の高い茶葉の生産が可能になりました。",
        testimonial:
            "スグクルさんのおかげで、繁忙期も安心して乗り越えられるようになりました。スタッフの皆さんは真面目で、技術の習得も早いです。",
        testimonialAuthor: "代表取締役",
        color: "#1B5E38",
    },
    {
        id: 2,
        company: "ヘンタ製茶",
        industry: "茶業（有機茶栽培）",
        location: "鹿児島県",
        staffCount: 8,
        image: "/images/cases/organic-tea-cultivation.png",
        challenge:
            "有機茶栽培は機械化が難しく、手作業が中心。熟練した労働力の確保が長年の課題でした。",
        solution:
            "農業経験のあるインドネシア人材8名を派遣。有機栽培の特性を理解した丁寧な指導で、即戦力として活躍。",
        result: "品質を維持しながら生産性が25%向上。有機認証の厳しい基準もクリアし続けています。",
        testimonial:
            "有機栽培は手間がかかりますが、派遣スタッフの皆さんは細かい作業も丁寧にこなしてくれます。言葉の壁もスグクルさんが通訳してくれるので安心です。",
        testimonialAuthor: "農場長",
        color: "#2d7a4e",
    },
    {
        id: 3,
        company: "南九州畜産組合",
        industry: "畜産業（和牛肥育）",
        location: "鹿児島県",
        staffCount: 12,
        image: "/images/cases/livestock-farm-workers.png",
        challenge:
            "和牛の飼育管理は24時間体制が必要。高齢化が進む中、若い労働力の確保が急務でした。",
        solution:
            "畜産経験のあるインドネシア・フィリピン人材12名を派遣。飼料管理から健康チェックまで、丁寧な指導のもとで即戦力に。",
        result: "牛舎の管理体制が安定し、肥育期間の効率が20%改善。品質評価でA5ランクの比率も向上しました。",
        testimonial:
            "動物が好きで真剣に仕事に取り組んでくれるスタッフばかり。牛の体調変化にもすぐ気づいて報告してくれるので、とても助かっています。",
        testimonialAuthor: "組合長",
        color: "#D4A853",
    },
];

const stats = [
    { value: "20+", label: "導入企業数", icon: Building2 },
    { value: "60+", label: "派遣スタッフ", icon: Users },
    { value: "99%", label: "継続率", icon: TrendingUp },
    { value: "15+", label: "連携産地", icon: MapPin },
];

export default function CasesPage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section bg-[#1B5E38] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B5E38] via-[#2d7a4e] to-[#1B5E38]" />
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
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
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
            <section className="section bg-[#1A1A1A]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#D4A853]/20 flex items-center justify-center">
                                    <stat.icon className="w-6 h-6 text-[#D4A853]" />
                                </div>
                                <p
                                    className="text-4xl md:text-5xl font-bold text-[#D4A853] mb-2"
                                    style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
                                >
                                    {stat.value}
                                </p>
                                <p className="text-gray-400 text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
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
                            Success Stories
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-[#1A1A1A]"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            導入企業様の声
                        </h2>
                    </motion.div>

                    <div className="space-y-12">
                        {caseStudies.map((caseStudy, index) => (
                            <motion.div
                                key={caseStudy.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                            >
                                {/* Image Section */}
                                <div className="relative h-64 md:h-80 overflow-hidden">
                                    <Image
                                        src={caseStudy.image}
                                        alt={`${caseStudy.company}の現場写真`}
                                        fill
                                        className="object-cover"
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
                                                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
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
                                                <span className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                                    <Users className="w-4 h-4" />
                                                    {caseStudy.staffCount}名派遣
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 md:p-10">
                                    {/* Content Grid */}
                                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                                        <div className="bg-gray-50 rounded-xl p-6">
                                            <h4 className="font-bold text-[#1A1A1A] mb-3 flex items-center gap-2">
                                                <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">
                                                    課
                                                </span>
                                                導入前の課題
                                            </h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {caseStudy.challenge}
                                            </p>
                                        </div>
                                        <div className="bg-gray-50 rounded-xl p-6">
                                            <h4 className="font-bold text-[#1A1A1A] mb-3 flex items-center gap-2">
                                                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                                                    解
                                                </span>
                                                スグクルの対応
                                            </h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {caseStudy.solution}
                                            </p>
                                        </div>
                                        <div className="bg-gray-50 rounded-xl p-6">
                                            <h4 className="font-bold text-[#1A1A1A] mb-3 flex items-center gap-2">
                                                <CheckCircle2 className="w-6 h-6 text-[#1B5E38]" />
                                                導入後の成果
                                            </h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {caseStudy.result}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Testimonial */}
                                    <div
                                        className="rounded-xl p-6 relative"
                                        style={{ backgroundColor: `${caseStudy.color}08` }}
                                    >
                                        <Quote
                                            className="absolute top-4 left-4 w-8 h-8 opacity-20"
                                            style={{ color: caseStudy.color }}
                                        />
                                        <p className="text-gray-700 leading-relaxed pl-8 italic">
                                            「{caseStudy.testimonial}」
                                        </p>
                                        <p className="text-right mt-4 text-sm text-gray-500">
                                            — {caseStudy.company} {caseStudy.testimonialAuthor}
                                        </p>
                                    </div>
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
                        <span className="text-[#D4A853] font-medium text-sm tracking-wider uppercase mb-4 block">
                            Why Choose Us
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-[#1A1A1A]"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            選ばれる理由
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            { title: "最短2週間で派遣開始", desc: "スピード感のある対応力" },
                            { title: "24時間多言語サポート", desc: "日本語・英語・インドネシア語対応" },
                            { title: "住居・行政手続き代行", desc: "受け入れの手間を最小化" },
                            { title: "農業・畜産経験者を厳選", desc: "即戦力人材をマッチング" },
                            { title: "ミスマッチ時の交代対応", desc: "リスクを最小限に" },
                            { title: "継続率99%", desc: "長期パートナーシップ実現" },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="flex items-start gap-3 p-4"
                            >
                                <CheckCircle2 className="w-5 h-5 text-[#1B5E38] mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-[#1A1A1A]">{item.title}</p>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-gradient-to-br from-[#1B5E38] via-[#2d7a4e] to-[#1B5E38]">
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
                            次は、あなたの農場で。
                        </h2>
                        <p className="text-white/80 mb-8 max-w-xl mx-auto">
                            人手不足の課題、お聞かせください。<br />
                            最適な解決策を一緒に考えます。
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="btn bg-white text-[#1B5E38] hover:bg-gray-100 text-lg group"
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
