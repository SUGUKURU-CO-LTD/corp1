"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { IS_MARGIN_RATE_PUBLISHED } from "@/lib/feature-flags";

// Animated counter with glow
function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isInView]);

    return (
        <div className="relative inline-block">
            {/* Glow effect */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.4, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute -inset-4 rounded-full blur-xl bg-accent"
            />
            <motion.span
                ref={ref}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative text-5xl md:text-6xl lg:text-7xl font-bold text-accent"
            >
                {count}
            </motion.span>
        </div>
    );
}

// 誇張しないため、会社概要と整合する検証可能な数値のみ掲載する。
// Show only verifiable figures consistent with the company profile (no exaggeration).
// Tampilkan hanya angka yang dapat diverifikasi sesuai profil perusahaan (tanpa berlebihan).
// 稼働スタッフ数はトップページでは訴求せず、会社概要に定義付きで記載する。
// Headcount is disclosed on the company profile page, not promoted here.
// Jumlah staf dicantumkan di halaman profil perusahaan, bukan dipromosikan di sini.
const stats = [
    { value: 60, suffix: "社+", label: "導入企業", description: "農業法人・JA・食品関連など", delay: 0 },
    { value: 5, suffix: "エリア", label: "稼働地域", description: "鹿児島・福島・愛知・愛媛・青森", delay: 0.1 },
    { value: 2, suffix: "拠点", label: "事業所", description: "本社（霧島）・ロンボク", delay: 0.2 },
    { value: 2, suffix: "週間", label: "最短就業開始", description: "条件により異なります", delay: 0.3 },
];

// 稼働エリアのカード（収穫リレー）。地域・作目・繁忙期を見やすく示す。
// Region card (harvest relay): region, crops, peak season — easy to scan.
// Kartu wilayah (estafet panen): wilayah, tanaman, musim sibuk.
const RegionBadge = ({ region, crops, season, delay }: { region: string; crops: string; season: string; delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay }}
            className="flex items-start gap-3 px-5 py-4 bg-white/[0.04] border border-white/10 rounded-xl text-left"
        >
            <span className="mt-0.5 h-2.5 w-2.5 rounded-full flex-shrink-0 bg-accent" />
            <div>
                <p className="text-white font-bold text-sm">{region}</p>
                <p className="text-white/70 text-xs mt-0.5">{crops}</p>
                <p className="text-accent-light text-xs mt-1">繁忙期: {season}</p>
            </div>
        </motion.div>
    );
};

export default function NumbersSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);

    return (
        <section ref={sectionRef} className="section relative bg-ink-strong overflow-hidden">
            {/* Animated background */}
            <motion.div style={{ y: backgroundY }} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-accent/20 to-accent/20 rounded-full blur-3xl" />
            </motion.div>

            {/* Grid pattern */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.15 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(color-mix(in oklch, var(--color-accent) 10%, transparent) 1px, transparent 1px),
                        linear-gradient(90deg, color-mix(in oklch, var(--color-accent) 10%, transparent) 1px, transparent 1px)
                    `,
                    backgroundSize: "50px 50px",
                    maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
                }}
            />

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
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
                        transition={{ delay: 0.1 }}
                        className="inline-block px-4 py-2 bg-gradient-to-r from-accent/10 to-accent/10 text-accent font-medium text-sm tracking-wider uppercase mb-4 rounded-full border border-accent/20"
                    >
                        Results
                    </motion.span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="block"
                        >
                            数字で見るスグクル
                        </motion.span>
                    </h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-accent via-accent to-accent"
                    />
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: stat.delay }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="text-center group relative"
                        >
                            {/* Animated border */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                                className="absolute bottom-0 left-0 right-0 h-0.5"
                                style={{
                                    background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
                                }}
                            />

                            <div className="mb-4 relative">
                                <Counter end={stat.value} />
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: stat.delay + 0.3 }}
                                    className="text-3xl md:text-4xl font-bold ml-1 text-accent"
                                >
                                    {stat.suffix}
                                </motion.span>
                            </div>

                            <motion.h3
                                initial={{ opacity: 0.8 }}
                                whileHover={{ opacity: 1, scale: 1.05 }}
                                className="text-xl font-bold text-white mb-2"
                            >
                                {stat.label}
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0.5 }}
                                whileHover={{ opacity: 1 }}
                                className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors"
                            >
                                {stat.description}
                            </motion.p>

                            {/* Number badge */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold opacity-15 bg-accent text-accent">
                                {index + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Map Visual */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20"
                >
                    <h3 className="text-center text-xl font-bold text-white mb-2">
                        全国の収穫リレー（稼働エリア）
                    </h3>
                    <p className="text-center text-gray-400 text-sm mb-8">
                        地域ごとの繁忙期に合わせて人材を配置し、年間を通じた安定就業につなげます。
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
                        {[
                            { region: "鹿児島", crops: "さつまいも・お茶・畜産", season: "4〜5月 / 10〜11月" },
                            { region: "福島", crops: "野菜", season: "夏〜秋" },
                            { region: "愛知", crops: "野菜", season: "通年" },
                            { region: "愛媛", crops: "柑橘", season: "11〜2月" },
                            { region: "青森", crops: "りんご", season: "9〜11月" },
                        ].map((item, i) => (
                            <RegionBadge key={item.region} {...item} delay={0.1 + i * 0.08} />
                        ))}
                    </div>
                    <p className="text-center text-gray-500 text-xs mt-8">
                        ※ 労働者派遣法に基づく許可事業所の派遣労働者数（78名・2026年6月1日現在）と、農作業受託・請負受託を含む稼働スタッフ総数は定義が異なります。稼働スタッフ数・許認可情報は
                        <a href="/about" className="underline hover:text-gray-300">会社概要</a>
                        {IS_MARGIN_RATE_PUBLISHED && (
                            <>
                                ・
                                <a href="/margin-rate" className="underline hover:text-gray-300">マージン率等の情報公開</a>
                            </>
                        )}
                        をご確認ください。
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
