"use client";

import { motion } from "framer-motion";
import { Globe, Users, Heart } from "lucide-react";

// 私たちの使命セクション。明るい背景で読みやすいソリッドカードに統一する。
// Mission section. Solid, high-contrast cards that stay readable on a light background.
// Bagian misi. Kartu solid berkontras tinggi yang tetap mudah dibaca di latar terang.

const missions = [
    {
        icon: Globe,
        title: "ローカルをグローバルでつなぐ",
        description:
            "過疎化が進む地方、人手が足りない現場。日本人だけでは届かない場所に、海外の人材の力を届けます。土地と人をつなぐ架け橋になります。",
    },
    {
        icon: Users,
        title: "人材に「居場所」をつくる",
        description:
            "単なる労働力ではなく、暮らす人として。住居・医療・言葉・文化のサポートまで、働く前後の生活を一貫して支えます。",
    },
    {
        icon: Heart,
        title: "耕作放棄地を、実りへ",
        description:
            "全国で農地が静かに減っています。人手の確保を通じて、使われなくなった土地が再び実りある大地に戻る後押しをします。",
    },
];

export default function MissionSection() {
    return (
        <section className="section bg-white">
            <div className="container mx-auto">
                {/* セクション見出し */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block px-4 py-1.5 bg-accent/8 text-accent font-medium text-sm tracking-wider uppercase mb-4 rounded-full">
                        Our Mission
                    </span>
                    <h2
                        className="text-3xl md:text-5xl font-bold text-ink mb-5"
                    >
                        私たちの使命
                    </h2>
                    <p className="text-ink-muted max-w-2xl mx-auto leading-relaxed">
                        人手不足を解決するだけでなく、人材が安心して働き、暮らせる環境をつくる。
                        その先に、日本の産業の持続を見据えています。
                    </p>
                    <div className="w-20 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-accent to-accent" />
                </motion.div>

                {/* ミッションカード */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
                    {missions.map((mission, i) => (
                        <motion.div
                            key={mission.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white rounded-2xl border border-gray-150 shadow-sm hover:shadow-md transition-shadow p-8"
                            style={{ borderColor: "var(--color-line)" }}
                        >
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-accent/[0.08]">
                                <mission.icon className="w-7 h-7 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold text-ink mb-3">
                                {mission.title}
                            </h3>
                            <p className="text-ink-muted leading-relaxed">
                                {mission.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
