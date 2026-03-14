"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// Animated counter with glow
function Counter({ end, duration = 2, color }: { end: number; duration?: number; color: string }) {
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
                className="absolute -inset-4 rounded-full blur-xl"
                style={{ backgroundColor: color }}
            />
            <motion.span
                ref={ref}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{ color }}
            >
                {count}
            </motion.span>
        </div>
    );
}

const stats = [
    { value: 120, suffix: "名", label: "派遣スタッフ", description: "インドネシア・フィリピン出身", color: "#1B5E38", delay: 0 },
    { value: 5, suffix: "拠点", label: "全国展開", description: "鹿児島から青森まで", color: "#D4A853", delay: 0.1 },
    { value: 40, suffix: "+", label: "取引先農家", description: "全国の主要農場と提携", color: "#0D9488", delay: 0.2 },
    { value: 2, suffix: "週間", label: "最短派遣", description: "スピード感のある対応", color: "#7C3AED", delay: 0.3 },
];

// Animated region badge
const RegionBadge = ({ region, crops, color, delay }: { region: string; crops: string; color: string; delay: number }) => {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#1B5E38]/10 border border-[#1B5E38]/30 rounded-full text-[#D4A853] text-sm font-medium cursor-default"
        >
            <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: delay * 0.5 }}
            >
                📍
            </motion.span>
            {region}（{crops}）
        </motion.span>
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
        <section ref={sectionRef} className="section relative bg-[#0A0A0A] overflow-hidden">
            {/* Animated background */}
            <motion.div style={{ y: backgroundY }} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#1B5E38]/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#D4A853]/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-[#1B5E38]/20 to-[#D4A853]/20 rounded-full blur-3xl" />
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
                        linear-gradient(rgba(212, 168, 83, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(212, 168, 83, 0.1) 1px, transparent 1px)
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
                        className="inline-block px-4 py-2 bg-gradient-to-r from-[#1B5E38]/10 to-[#D4A853]/10 text-[#D4A853] font-medium text-sm tracking-wider uppercase mb-4 rounded-full border border-[#D4A853]/20"
                    >
                        Results
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="block"
                        >
                            実績で証明する信頼
                        </motion.span>
                    </h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-[#1B5E38] via-[#D4A853] to-[#1B5E38]"
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
                                    background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`,
                                }}
                            />

                            <div className="mb-4 relative">
                                <Counter end={stat.value} color={stat.color} />
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: stat.delay + 0.3 }}
                                    className="text-3xl md:text-4xl font-bold ml-1"
                                    style={{ color: stat.color }}
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
                            <div
                                className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold opacity-15"
                                style={{ backgroundColor: stat.color, color: stat.color }}
                            >
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
                    className="mt-20 text-center"
                >
                    <div className="inline-flex flex-wrap justify-center gap-3">
                        {[
                            { region: "鹿児島", crops: "サツマイモ・お茶", color: "#1B5E38" },
                            { region: "福島", crops: "野菜", color: "#D4A853" },
                            { region: "愛知", crops: "野菜", color: "#0D9488" },
                            { region: "愛媛", crops: "柑橘", color: "#7C3AED" },
                            { region: "青森", crops: "りんご", color: "#E91E63" },
                        ].map((item, i) => (
                            <RegionBadge key={item.region} {...item} delay={0.7 + i * 0.1} />
                        ))}
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 }}
                        className="text-gray-500 text-sm mt-6"
                    >
                        全国「収穫リレー」で年間安定雇用を実現
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
