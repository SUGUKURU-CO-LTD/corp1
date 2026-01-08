"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Users, Heart } from "lucide-react";
import { useRef } from "react";

// Glassmorphic card with glow
const GlassCard = ({ children, delay }: { children: React.ReactNode; delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{
                y: -10,
                boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.3)",
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative group"
        >
            {/* Glow effect */}
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute -inset-1 rounded-3xl blur-xl opacity-0 group-hover:opacity-50"
                style={{
                    background: `conic-gradient(from 0deg, transparent, var(--glow-color, #1B5E38), transparent)`,
                    animation: "rotate 3s linear infinite",
                }}
            />
            {/* Glass card */}
            <div className="relative p-8 bg-white/[0.05] backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden">
                {/* Subtle noise */}
                <div
                    className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                {children}
            </div>
        </motion.div>
    );
};

// Animated icon with glow
const GlowingIcon = ({ icon: Icon, color, delay }: { icon: any; color: string; delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay, type: "spring", stiffness: 200 }}
            className="relative"
        >
            {/* Outer glow */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl blur-xl"
                style={{ backgroundColor: color }}
            />
            {/* Icon container */}
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

const missions = [
    {
        icon: Globe,
        title: "ローカルをグローバルで救う",
        description: "過疎化する地方、疲弊する農業。日本人だけでは届かない場所に、世界から手を差し伸べる。私たちは境界を越え、土地と人をつなぐ架け橋になる。",
        color: "#1B5E38",
        delay: 0.1,
    },
    {
        icon: Users,
        title: "人材に「居場所」を創る",
        description: "単なる労働力ではない。住居、医療、言葉、文化——あらゆる壁を取り払い、彼らが「生きる場所」を得られるよう、フルコースでサポートする。",
        color: "#D4A853",
        delay: 0.2,
    },
    {
        icon: Heart,
        title: "耕作放棄地を、希望へ",
        description: "日本の農地は今、静かに消えていく。私たちは年間1%の耕作放棄地削減を掲げ、放棄された土地を実りある大地へとを変えていく。",
        color: "#0D9488",
        delay: 0.3,
    },
];

export default function MissionSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

    return (
        <section ref={sectionRef} className="section relative bg-[#FAFAF7] overflow-hidden">
            {/* Animated background elements */}
            <motion.div style={{ y, rotate }} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#1B5E38]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D4A853]/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#1B5E38]/3 to-[#D4A853]/3 rounded-full blur-3xl" />
            </motion.div>

            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: i * 0.3 }}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                        background: i % 2 === 0 ? "#1B5E38" : "#D4A853",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}

            <div className="container mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="inline-block px-4 py-2 bg-gradient-to-r from-[#1B5E38]/10 to-[#D4A853]/10 text-[#D4A853] font-medium text-sm tracking-wider uppercase mb-4 rounded-full border border-[#D4A853]/20"
                    >
                        Our Mission
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="block"
                        >
                            私たちの使命
                        </motion.span>
                    </h2>
                    {/* Animated underline with gradient */}
                    <motion.div
                        initial={{ scaleX: 0, width: 0 }}
                        whileInView={{ scaleX: 1, width: 120 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="h-1 mx-auto rounded-full bg-gradient-to-r from-[#1B5E38] via-[#D4A853] to-[#1B5E38]"
                    />
                </motion.div>

                {/* Mission Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {missions.map((mission, index) => (
                        <GlassCard key={mission.title} delay={mission.delay}>
                            <GlowingIcon icon={mission.icon} color={mission.color} delay={0} />
                            <motion.h3
                                initial={{ opacity: 0.8 }}
                                whileHover={{ opacity: 1 }}
                                className="text-xl font-bold text-[#1A1A1A] mb-4 mt-4 relative z-10"
                            >
                                {mission.title}
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0.6 }}
                                whileHover={{ opacity: 1 }}
                                className="text-gray-600 leading-relaxed relative z-10"
                            >
                                {mission.description}
                            </motion.p>
                            {/* Hover line accent */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                                className="absolute bottom-0 left-0 right-0 h-0.5"
                                style={{ background: `linear-gradient(90deg, transparent, ${mission.color}, transparent)` }}
                            />
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
