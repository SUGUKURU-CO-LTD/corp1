"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Zap, FileCheck, Globe, Home, Dumbbell, ClipboardCheck } from "lucide-react";
import { useRef } from "react";

// Modern card with hover effects
const ModernCard = ({ reason, index }: { reason: any; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, rotateX: -5 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            whileHover={{
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
            }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.8, delay: reason.delay, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative group bg-white dark:bg-gray-900 rounded-2xl p-6 overflow-hidden"
        >
            {/* Hover gradient overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 50% 0%, ${reason.color}15 0%, transparent 70%)`,
                }}
            />

            {/* Animated border accent */}
            <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ background: reason.color }}
            />

            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute top-0 right-0 w-10 h-10"
                    style={{
                        background: `linear-gradient(135deg, ${reason.color}30 50%, transparent 50%)`,
                    }}
                />
            </div>

            <div className="flex items-start gap-4 relative z-10">
                {/* Number badge */}
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg text-white shadow-lg relative overflow-hidden"
                    style={{ backgroundColor: reason.color }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        {index + 1}
                    </motion.span>
                    {/* Shine effect */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    />
                </motion.div>

                <div className="flex-1">
                    {/* Icon & Title */}
                    <div className="flex items-center gap-3 mb-3">
                        <motion.div
                            whileHover={{ scale: 1.2, rotate: -10 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            className="relative"
                        >
                            <reason.icon className="w-6 h-6" style={{ color: reason.color }} />
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileHover={{ opacity: 0.3, scale: 1.5 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 blur-md"
                                style={{ color: reason.color }}
                            />
                        </motion.div>
                        <motion.h3
                            initial={{ opacity: 0.9 }}
                            whileHover={{ opacity: 1, x: 5 }}
                            className="text-lg font-bold text-[#1A1A1A] dark:text-white"
                        >
                            {reason.title}
                        </motion.h3>
                    </div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0.6 }}
                        whileHover={{ opacity: 1 }}
                        className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed"
                    >
                        {reason.description}
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
};

const reasons = [
    {
        icon: Zap,
        title: "最短2週間。それが私たちのスピード。",
        description: "人手不足は待ってくれない。だから私たちは、通常1.5ヶ月、最短2週間で即戦力を届ける。",
        color: "#1B5E38",
        delay: 0,
    },
    {
        icon: FileCheck,
        title: "ビザの迷路を、最速で抜ける",
        description: "複雑な在留資格、煩雑な書類。グループ内監理組合との連携で、すべてお任せください。",
        color: "#D4A853",
        delay: 0.1,
    },
    {
        icon: Globe,
        title: "言葉の壁は、私たちが壊す",
        description: "日本語・英語・インドネシア語。24時間体制で、現場の「困った」に即座に応える。",
        color: "#0D9488",
        delay: 0.2,
    },
    {
        icon: Home,
        title: "住む場所から、私たちは創る",
        description: "住居手配、入退去、行政手続き——彼らが「働く」前に「暮らす」場所を整える。",
        color: "#7C3AED",
        delay: 0.3,
    },
    {
        icon: Dumbbell,
        title: "大型特殊もフォークリフトも。",
        description: "ただの人材ではない。農業・畜産の経験者、免許保持者を厳選。現場で即戦力。",
        color: "#2563EB",
        delay: 0.4,
    },
    {
        icon: ClipboardCheck,
        title: "合わなければ、交代する。",
        description: "ミスマッチは起こりうる。起きたときに、迅速に対応する——それが私たちの責任。",
        color: "#E91E63",
        delay: 0.5,
    },
];

export default function WhyUsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={sectionRef} className="section relative bg-gray-50 overflow-hidden">
            {/* Background decorations */}
            <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#D4A853]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-10 w-64 h-64 bg-[#1B5E38]/5 rounded-full blur-3xl" />
            </motion.div>

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
                        Why SUGUKURU
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-bold text-[#1A1A1A]" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="block"
                        >
                            選ばれる6つの理由
                        </motion.span>
                    </h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-[#1B5E38] to-[#D4A853]"
                    />
                </motion.div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, index) => (
                        <ModernCard key={reason.title} reason={reason} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
