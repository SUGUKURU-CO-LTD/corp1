"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Tractor, Wrench, Users, Code, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

// Holographic card effect
const HolographicCard = ({ service, children }: { service: any; children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: service.delay }}
            className="relative group"
        >
            {/* Holographic border gradient */}
            <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                        background: "conic-gradient(from 0deg, transparent, var(--color-accent), transparent 120deg)",
                        filter: "blur(2px)",
                    }}
                />
            </div>

            {/* Main card */}
            <div
                className={`relative h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden ${service.size === "large" ? "p-8" : "p-6"}`}
                style={{
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
                }}
            >
                {/* Subtle pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />

                {/* Hover shine effect */}
                <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none skew-x-12"
                />

                {children}
            </div>
        </motion.div>
    );
};

// Animated icon with rotation
const RotatingIcon = ({ icon: Icon }: { icon: any }) => {
    return (
        <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative"
        >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-accent/[0.08]">
                <Icon className="w-6 h-6 text-accent" />
            </div>
        </motion.div>
    );
};

const services = [
    {
        id: "dispatch",
        name: "農業派遣",
        description: "人手が足りない——その声に、最短2週間で応える。即戦力の外国人材をあなたの農場へ。",
        icon: Tractor,
        href: "/services/dispatch",
        size: "large",
        delay: 0,
    },
    {
        id: "contracting",
        name: "農作業受託",
        description: "収穫も選果も、丸ごと任せる。繁忙期の「困った」を、チームで解決。",
        icon: Wrench,
        href: "/services/contracting",
        size: "small",
        delay: 0.1,
    },
    {
        id: "placement",
        name: "有料職業紹介",
        description: "派遣ではなく、仲間として迎えたい。直接雇用へ導く、じっくりマッチング。",
        icon: Users,
        href: "/services/placement",
        size: "small",
        delay: 0.2,
    },
    {
        id: "it",
        name: "IT事業",
        description: "農業にもデジタルを。Webシステム・アプリ開発で、現場を進化させる。",
        icon: Code,
        href: "/services/it",
        size: "medium",
        delay: 0.3,
    },
];

export default function ServicesSection() {
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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-3xl" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
                        Our Services
                    </motion.span>
                    <h2 className="text-3xl md:text-5xl font-bold text-ink" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="block"
                        >
                            私たちができること
                        </motion.span>
                    </h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-accent to-accent-light"
                    />
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service) => (
                        <HolographicCard key={service.id} service={service}>
                            <Link href={service.href} className="block h-full">
                                <RotatingIcon icon={service.icon} />

                                <h3
                                    className={`font-bold text-ink mb-2 mt-4 ${service.size === "large" ? "text-2xl" : "text-lg"}`}
                                >
                                    {service.name}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>

                                {/* Arrow indicator */}
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileHover={{ opacity: 1, x: 0 }}
                                    className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-accent"
                                >
                                    <ArrowUpRight className="w-4 h-4 text-white" />
                                </motion.div>
                            </Link>
                        </HolographicCard>
                    ))}
                </div>

            </div>
        </section>
    );
}
