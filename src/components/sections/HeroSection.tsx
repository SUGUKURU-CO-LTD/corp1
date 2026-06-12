"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Clock, MapPin } from "lucide-react";

// 公開トップのヒーロー。誇張せず、誠実で読みやすいファーストビューにする。
// Public hero. Honest, readable first view without exaggeration.
// Hero publik. Tampilan pertama yang jujur dan mudah dibaca tanpa berlebihan.

// 信頼バッジ（許認可・スピード・地域）
// Trust badges (license, speed, region)
// Lencana kepercayaan (lisensi, kecepatan, wilayah)
const trustBadges = [
    { icon: ShieldCheck, label: "労働者派遣事業許可 派46-300262" },
    { icon: ShieldCheck, label: "有料職業紹介事業許可 46-ユ-300203" },
    { icon: Clock, label: "最短2週間で就業開始（条件により異なります）" },
    { icon: MapPin, label: "鹿児島・霧島が本拠地" },
];

export default function HeroSection() {
    return (
        <section className="relative bg-[#0E2A1B] text-white overflow-hidden">
            {/* 実写真の背景（可読性のため濃いオーバーレイ） */}
            {/* Real photo background with dark overlay for readability */}
            {/* Latar foto asli dengan lapisan gelap agar mudah dibaca */}
            <div
                className="absolute inset-0 bg-center bg-cover opacity-30"
                style={{ backgroundImage: 'url("/images/cases/organic-tea-cultivation.png")' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E2A1B] via-[#0E2A1B]/90 to-[#0E2A1B]/60" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center py-24 md:py-28">
                    {/* 左: メッセージ */}
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-sm text-white/90 mb-6"
                        >
                            農業 × 特定技能 × 一貫サポート
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.05 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-5"
                        >
                            鹿児島の農業に、
                            <br className="hidden md:block" />
                            <span className="text-[#E8C77A]">すぐ来る即戦力</span>を。
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.12 }}
                            className="text-base md:text-lg text-white/85 leading-relaxed mb-8"
                        >
                            特定技能の外国人材を、住まいの手配から行政手続き・多言語サポートまで
                            一貫して支援し、農場へ派遣します。人手不足のご相談から、お気軽にどうぞ。
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.18 }}
                            className="flex flex-wrap gap-3"
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0E2A1B] font-bold hover:bg-gray-100 transition-colors"
                            >
                                無料で相談する
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/pricing"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/40 text-white font-bold hover:bg-white/10 transition-colors"
                            >
                                料金を見る
                            </Link>
                            <a
                                href="tel:0995-73-9939"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white/90 font-medium hover:text-white transition-colors"
                            >
                                <Phone className="w-5 h-5" />
                                0995-73-9939
                            </a>
                        </motion.div>

                        {/* 信頼バッジ帯 */}
                        <motion.ul
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.28 }}
                            className="mt-10 grid sm:grid-cols-2 gap-2.5"
                        >
                            {trustBadges.map((badge) => (
                                <li
                                    key={badge.label}
                                    className="flex items-center gap-2.5 text-sm text-white/80"
                                >
                                    <badge.icon className="w-4 h-4 text-[#E8C77A] flex-shrink-0" />
                                    {badge.label}
                                </li>
                            ))}
                        </motion.ul>
                    </div>

                    {/* 右: 実写真カード */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="hidden lg:block"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/40">
                            <img
                                src="/images/cases/tea-farm-workers.png"
                                alt="スグクルの派遣スタッフが農場で働く様子"
                                className="w-full h-[460px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="text-white text-lg font-bold mb-1">
                                    現場で機能する即戦力を、最短2週間で。
                                </p>
                                <p className="text-white/75 text-sm">
                                    農業・畜産の経験者を、現場のニーズに合わせて派遣します。
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
