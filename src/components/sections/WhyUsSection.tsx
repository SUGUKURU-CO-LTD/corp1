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
            className="relative group bg-white border border-line shadow-sm rounded-2xl p-6 overflow-hidden"
        >
            {/* Hover gradient overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at 50% 0%, var(--color-accent-soft) 0%, transparent 70%)",
                }}
            />

            {/* Animated border accent */}
            <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-accent"
            />

            {/* Corner decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute top-0 right-0 w-10 h-10"
                    style={{
                        background: "linear-gradient(135deg, var(--color-accent) 50%, transparent 50%)",
                        opacity: 0.3,
                    }}
                />
            </div>

            <div className="flex items-start gap-4 relative z-10">
                {/* Number badge */}
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg text-white shadow-lg relative overflow-hidden bg-accent"
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
                            <reason.icon className="w-6 h-6 text-accent" />
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileHover={{ opacity: 0.3, scale: 1.5 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 blur-md text-accent"
                            />
                        </motion.div>
                        <motion.h3
                            whileHover={{ x: 5 }}
                            className="text-lg font-bold text-ink"
                        >
                            {reason.title}
                        </motion.h3>
                    </div>

                    {/* Description */}
                    <p className="text-ink text-[15px] leading-relaxed">
                        {reason.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const reasons = [
    {
        icon: Zap,
        title: "最短2週間で就業開始",
        description: "条件が整っていれば最短2週間が目安です（状況により異なります）。お急ぎのご相談も承ります。",
        delay: 0,
    },
    {
        icon: FileCheck,
        title: "在留資格の手続きを支援",
        description: "複雑な在留資格や書類は、グループ内の体制と連携して支援します。お客様の負担を抑えます。",
        delay: 0.1,
    },
    {
        icon: Globe,
        title: "多言語で現場をサポート",
        description: "日本語・英語・インドネシア語で、現場のやり取りや緊急時の一次対応を支援します。",
        delay: 0.2,
    },
    {
        icon: Home,
        title: "住まいから整える",
        description: "住居手配、入退去、行政手続きまで。働く前の「暮らす」準備を整えます。",
        delay: 0.3,
    },
    {
        icon: Dumbbell,
        title: "経験・資格のある人材",
        description: "農業・畜産の経験者や、大型特殊・フォークリフト等の資格保持者をご紹介できます。",
        delay: 0.4,
    },
    {
        icon: ClipboardCheck,
        title: "ミスマッチ時は交代対応",
        description: "相性が合わない場合は、迅速な交代対応を行います。受入れが続くよう支援します。",
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
        <section ref={sectionRef} className="section relative bg-canvas overflow-hidden">
            {/* Background decorations */}
            <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-10 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
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
                        className="inline-block px-4 py-2 bg-gradient-to-r from-accent/10 to-accent/10 text-accent font-medium text-sm tracking-wider uppercase mb-4 rounded-full border border-accent/20"
                    >
                        Why SUGUKURU
                    </motion.span>
                    <h2 className="text-3xl md:text-5xl font-bold text-ink" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
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
                        className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-accent to-accent"
                    />
                </motion.div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <ModernCard key={reason.title} reason={reason} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
