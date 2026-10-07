"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { useRef } from "react";

// 水和不一致を避けるため、乱数は使わず固定値にする
// Avoid hydration mismatch: use fixed values, not Math.random
// Hindari mismatch hidrasi: pakai nilai tetap, bukan Math.random
const CTA_PARTICLES = [
    { delay: 0, duration: 4.2, width: 7, height: 5, color: "var(--color-accent-light)" },
    { delay: 0.3, duration: 6.1, width: 11, height: 8, color: "#ffffff" },
    { delay: 0.6, duration: 5.0, width: 9, height: 6, color: "var(--color-accent-light)" },
    { delay: 0.9, duration: 5.4, width: 5, height: 9, color: "#ffffff" },
    { delay: 1.2, duration: 6.2, width: 8, height: 4, color: "var(--color-accent-light)" },
    { delay: 1.5, duration: 4.8, width: 10, height: 9, color: "#ffffff" },
    { delay: 1.8, duration: 6.4, width: 8, height: 11, color: "var(--color-accent-light)" },
    { delay: 2.1, duration: 5.7, width: 5, height: 7, color: "#ffffff" },
    { delay: 2.4, duration: 6.3, width: 10, height: 4, color: "var(--color-accent-light)" },
    { delay: 2.7, duration: 6.2, width: 12, height: 5, color: "#ffffff" },
] as const;

const FloatingParticle = ({
    delay,
    duration,
    color,
    width,
    height,
}: {
    delay: number;
    duration: number;
    color: string;
    width: number;
    height: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.5, 0], scale: [0, 1, 0] }}
            transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full"
            style={{
                width,
                height,
                backgroundColor: color,
            }}
        />
    );
};

export default function CTASection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -30]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);

    return (
        <section ref={sectionRef} className="section relative overflow-hidden">
            {/* Animated gradient background */}
            <motion.div
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-br from-accent via-accent-light to-accent"
                style={{
                    backgroundSize: "200% 200%",
                }}
            />

            {/* Animated glow orbs */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    x: [0, -50, 0],
                    y: [0, -30, 0],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
            />

            {/* Floating particles */}
            {CTA_PARTICLES.map((particle, i) => (
                <FloatingParticle key={i} {...particle} />
            ))}

            {/* Parallax content */}
            <motion.div style={{ y, scale }} className="relative z-10">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto text-center">
                        {/* Sparkles decoration */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex justify-center gap-2 mb-6"
                        >
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                >
                                    <Sparkles className="w-5 h-5 text-white" />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Animated Heading */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="block"
                            >
                                人手が、足りない。
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="block text-white"
                            >
                                その声に、応えに行く。
                            </motion.span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed"
                        >
                            人手不足のご相談から、お気軽にどうぞ。まずはお話をお聞かせください。
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link
                                    href="/contact"
                                    className="relative inline-flex items-center gap-2 px-8 py-4 bg-white text-accent text-lg font-bold rounded-full shadow-xl shadow-black/20 overflow-hidden group"
                                >
                                    {/* Animated gradient overlay */}
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "100%" }}
                                        transition={{ duration: 0.5 }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent"
                                    />
                                    <span className="relative z-10 flex items-center gap-2">
                                        無料で相談する
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <a
                                    href="tel:0995-73-9939"
                                    className="inline-flex items-center gap-2 px-6 py-4 text-white text-lg font-bold rounded-full border-2 border-white/40 hover:border-white transition-colors"
                                >
                                    <motion.span
                                        animate={{ x: [0, 2, 0] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="flex items-center gap-2"
                                    >
                                        <Phone className="w-5 h-5" />
                                        0995-73-9939
                                    </motion.span>
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="mt-16 flex flex-wrap justify-center gap-8 text-white/70 text-sm"
                        >
                            {[
                                { text: "派遣事業許可取得", delay: 0.8 },
                                { text: "職業紹介事業許可取得", delay: 0.9 },
                                { text: "コンプライアンス重視", delay: 1 },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.text}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: item.delay }}
                                    className="flex items-center gap-2"
                                >
                                    <motion.span
                                        animate={{ scale: [1, 1.3, 1] }}
                                        transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                                        className="w-2 h-2 rounded-full bg-white"
                                    />
                                    {item.text}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Bottom gradient overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-canvas to-transparent pointer-events-none"
            />
        </section>
    );
}
