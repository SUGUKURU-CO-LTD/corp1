"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";

// Aurora gradient background component
const AuroraBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <motion.div
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    filter: ["hue-rotate(0deg)", "hue-rotate(30deg)", "hue-rotate(0deg)"],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-15"
                style={{
                    background: `radial-gradient(ellipse at 20% 20%, #1B5E38 0%, transparent 50%),
                                 radial-gradient(ellipse at 80% 80%, #D4A853 0%, transparent 50%),
                                 radial-gradient(ellipse at 40% 60%, #7C3AED 0%, transparent 50%),
                                 radial-gradient(ellipse at 60% 40%, #0D9488 0%, transparent 50%)`,
                    backgroundSize: "200% 200%",
                }}
            />
            {/* Animated gradient orbs */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                    className="absolute rounded-full blur-2xl opacity-8"
                    style={{
                        width: 300 + i * 100,
                        height: 300 + i * 100,
                        background: i % 2 === 0 ? "#1B5E38" : "#D4A853",
                        left: `${10 + i * 15}%`,
                        top: `${20 + i * 10}%`,
                    }}
                />
            ))}
        </div>
    );
};

// Noise texture overlay
const NoiseOverlay = () => {
    return (
        <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
        />
    );
};

// Kinetic text reveal
const KineticText = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
    return (
        <motion.span
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
            className="inline-block"
        >
            {children}
        </motion.span>
    );
};

// Glowing button
const GlowingButton = ({
    children,
    href,
    primary = false,
}: {
    children: React.ReactNode;
    href: string;
    primary?: boolean;
}) => {
    return (
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
                href={href}
                className={`relative inline-flex items-center gap-2 px-8 py-4 text-lg font-bold rounded-full overflow-hidden group ${primary
                        ? "bg-white text-[#1B5E38]"
                        : "bg-transparent text-white border-2 border-white/40"
                    }`}
            >
                {/* Glow effect */}
                <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
                />
                {/* Shimmer ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                        background: `conic-gradient(from 0deg, transparent, ${primary ? "#1B5E38" : "#D4A853"}, transparent)`,
                        filter: "blur(4px)",
                    }}
                />
                <span className="relative z-10 flex items-center gap-2">
                    {children}
                </span>
            </Link>
        </motion.div>
    );
};

// 3メッセージ
const heroMessages = [
    {
        headline: "「すぐ来る」と、約束した。",
        subline: "だから、私たちはここにいる。",
        description: "耕す手が足りない——その叫びに、私たちは走った。最短2週間で即戦力を届ける。それが「スグクル」という名前に込めた、私たちの誓い。",
    },
    {
        headline: "人手不足という社会課題。",
        subline: "私たちは、それを終わらせに来た。",
        description: "高齢化、後継者不足、増え続ける耕作放棄地。誰かがこの問題を解かなければならない。だから私たちは、世界中から仲間を集めた。",
    },
    {
        headline: "日本の農業が止まる前に。",
        subline: "私たちは、動き始めた。",
        description: "静かに消えていく農地を、ただ見ていられなかった。外国人材という希望を胸に、霧島の地から全国へ——農業を止めない戦いが始まる。",
    },
];

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Smooth scroll progress
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * heroMessages.length);
        setCurrentIndex(randomIndex);
    }, []);

    const currentMessage = heroMessages[currentIndex];

    return (
        <section ref={containerRef} className="hero relative bg-[#0A0A0A] overflow-hidden min-h-screen">
            {/* Scroll Progress Bar */}
            <motion.div
                style={{ scaleX: smoothProgress, originX: 0 }}
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1B5E38] via-[#D4A853] to-[#7C3AED] z-50"
            />

            {/* Aurora Background */}
            <AuroraBackground />

            {/* Noise Overlay */}
            <NoiseOverlay />

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-transparent" />

            {/* Animated mesh grid */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: "60px 60px",
                        transform: "perspective(500px) rotateX(60deg)",
                    }}
                />
            </div>

            {/* Parallax Content */}
            <motion.div style={{ y, opacity }} className="relative z-10">
                <div className="container mx-auto px-6 min-h-screen flex flex-col justify-center">
                    <div className="max-w-5xl">
                        {/* Badge with sparkles */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "backOut" }}
                            className="relative inline-flex items-center gap-2 mb-8"
                        >
                            <Sparkles className="w-4 h-4 text-[#D4A853] animate-pulse" />
                            <span className="relative px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-sm font-medium text-white/90">
                                <motion.span
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-[#D4A853]"
                                >
                                    農業 × 特定技能 × テクノロジー
                                </motion.span>
                            </span>
                        </motion.div>

                        {/* Kinetic Typography */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">
                            <KineticText delay={0.1}>
                                <span className="block">{currentMessage.headline}</span>
                            </KineticText>
                            <KineticText delay={0.2}>
                                <span
                                    className="block bg-gradient-to-r from-[#D4A853] via-[#F0C850] to-[#D4A853] bg-clip-text text-transparent"
                                    style={{ backgroundSize: "200% auto" }}
                                >
                                    <motion.span
                                        animate={{ backgroundPosition: ["0% center", "100% center", "0% center"] }}
                                        transition={{ duration: 5, repeat: Infinity }}
                                    >
                                        {currentMessage.subline}
                                    </motion.span>
                                </span>
                            </KineticText>
                        </h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
                        >
                            {currentMessage.description}
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <GlowingButton href="/contact" primary>
                                今すぐ相談する
                                <ArrowRight className="w-5 h-5" />
                            </GlowingButton>
                            <GlowingButton href="/services">
                                私たちができること
                            </GlowingButton>
                        </motion.div>

                        {/* Message Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-12 flex gap-3"
                        >
                            {heroMessages.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`relative w-12 h-3 rounded-full overflow-hidden ${index === currentIndex ? "bg-[#D4A853]" : "bg-white/20"
                                        }`}
                                >
                                    {/* Progress indicator */}
                                    {index === currentIndex && (
                                        <motion.div
                                            className="absolute inset-0 bg-[#D4A853]"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                            style={{ originX: 0 }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </motion.div>

                        {/* License Info */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="mt-10 flex flex-wrap gap-3"
                        >
                            {["労働者派遣事業許可", "有料職業紹介事業許可", "特定技能派遣認定"].map((item, i) => (
                                <motion.span
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1 + i * 0.1 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-400"
                                >
                                    <motion.span
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                        className="w-1.5 h-1.5 rounded-full bg-[#D4A853]"
                                    />
                                    {item}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.button
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, y: { repeat: Infinity, duration: 2 } }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white transition-colors"
            >
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ChevronDown className="w-8 h-8" />
                </motion.div>
            </motion.button>

            {/* Bottom gradient */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAF7] to-transparent"
            />
        </section>
    );
}
