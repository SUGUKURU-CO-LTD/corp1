"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Send, Phone, Mail, MapPin, Check, ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";

type InquiryType = "dispatch" | "it" | "recruit" | "other";

const inquiryTypes = [
    { id: "dispatch", label: "派遣・人材のご相談", icon: "👨‍🌾", color: "#1B5E38" },
    { id: "it", label: "IT開発のご相談", icon: "💻", color: "#2563EB" },
    { id: "recruit", label: "採用について", icon: "👥", color: "#7C3AED" },
    { id: "other", label: "その他", icon: "📝", color: "#D4A853" },
];

// Floating particles component
const FloatingParticles = () => {
    return (
        <>
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: i * 0.3 }}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                        background: i % 2 === 0 ? "#1B5E38" : "#D4A853",
                        left: `${10 + i * 10}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}
        </>
    );
};

// Glass card component
const GlassCard = ({ children, delay }: { children: React.ReactNode; delay?: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay }}
            className="relative group"
        >
            <div className="relative p-6 bg-white/[0.05] backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                {children}
            </div>
        </motion.div>
    );
};

export default function ContactPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        inquiryType: "" as InquiryType | "",
        companyName: "",
        name: "",
        email: "",
        phone: "",
        workerCount: "",
        period: "",
        location: "",
        projectType: "",
        budget: "",
        deadline: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 50]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div ref={containerRef} className="pt-20 min-h-screen bg-[#FAFAF7] flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                    className="text-center max-w-md mx-auto p-8"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-24 h-24 bg-[#1B5E38] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg shadow-[#1B5E38]/30"
                    >
                        <Check className="w-12 h-12 text-white" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl font-bold text-[#1A1A1A] mb-4"
                    >
                        お問い合わせありがとうございます
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-gray-600 mb-8"
                    >
                        内容を確認の上、担当者より3営業日以内にご連絡いたします。
                    </motion.p>
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B5E38] text-white font-bold rounded-full hover:bg-[#1B5E38]/90 transition-colors"
                    >
                        トップページに戻る
                    </motion.a>
                </motion.div>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="pt-20">
            {/* Scroll Progress */}
            <motion.div
                style={{ scaleX: scrollYProgress, originX: 0 }}
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1B5E38] via-[#D4A853] to-[#7C3AED] z-50"
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[#0A0A0A] min-h-[60vh] flex items-center">
                {/* Aurora Background */}
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-40"
                    style={{
                        background: `radial-gradient(ellipse at 30% 30%, #1B5E38 0%, transparent 50%),
                                     radial-gradient(ellipse at 70% 70%, #D4A853 0%, transparent 50%)`,
                        backgroundSize: "200% 200%",
                    }}
                />
                <FloatingParticles />

                <motion.div style={{ y: heroY }} className="container mx-auto relative z-10 px-6">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "backOut" }}
                            className="inline-flex items-center gap-2 mb-6"
                        >
                            <Sparkles className="w-5 h-5 text-[#D4A853] animate-pulse" />
                            <span className="px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-sm font-medium text-white/90">
                                Contact
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            <motion.span
                                initial={{ clipPath: "inset(0 100% 0 0)" }}
                                animate={{ clipPath: "inset(0 0 0 0)" }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="block"
                            >
                                お問い合わせ
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-xl text-gray-300 leading-relaxed max-w-2xl"
                        >
                            ご質問・ご相談がございましたら、お気軽にお問い合わせください。
                            担当者より迅速にご対応いたします。
                        </motion.p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAF7] to-transparent"
                />
            </section>

            {/* Form Section */}
            <section className="section -mt-24 relative z-20">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 40, rotateX: -5 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                        className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                    >
                        {/* Progress Bar */}
                        <div className="px-8 py-6 bg-gradient-to-r from-[#1B5E38]/10 to-[#D4A853]/10 border-b border-white/10">
                            <div className="flex items-center justify-between max-w-md mx-auto">
                                {[1, 2, 3].map((s) => (
                                    <motion.div
                                        key={s}
                                        initial={{ scale: 0.8 }}
                                        animate={{ scale: step >= s ? 1 : 0.8 }}
                                        className="flex items-center"
                                    >
                                        <motion.div
                                            animate={{
                                                scale: step >= s ? [1, 1.1, 1] : 1,
                                                backgroundColor: step >= s ? "#1B5E38" : "#e5e7eb",
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                                                step >= s ? "text-white" : "text-gray-500"
                                            }`}
                                        >
                                            {step >= s ? <Check className="w-5 h-5" /> : s}
                                        </motion.div>
                                        {s < 3 && (
                                            <motion.div
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: step > s ? 1 : 0 }}
                                                className={`w-16 h-1 mx-2 rounded-full ${
                                                    step > s ? "bg-[#1B5E38]" : "bg-gray-200"
                                                }`}
                                            />
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                            <div className="flex justify-between max-w-md mx-auto mt-3 text-xs font-medium text-gray-500">
                                <span className={step >= 1 ? "text-[#1B5E38]" : ""}>種類を選択</span>
                                <span className={step >= 2 ? "text-[#1B5E38]" : ""}>基本情報</span>
                                <span className={step >= 3 ? "text-[#1B5E38]" : ""}>詳細・送信</span>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8">
                            {/* Step 1: Inquiry Type */}
                            {step === 1 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -30 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8 text-center">
                                        お問い合わせの種類を選択してください
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {inquiryTypes.map((type, index) => (
                                            <motion.button
                                                key={type.id}
                                                type="button"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                whileHover={{ scale: 1.02, y: -3 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => {
                                                    setFormData({ ...formData, inquiryType: type.id as InquiryType });
                                                    setStep(2);
                                                }}
                                                className={`p-6 rounded-2xl border-2 text-left transition-all relative overflow-hidden ${
                                                    formData.inquiryType === type.id
                                                        ? "border-[#1B5E38] bg-[#1B5E38]/5"
                                                        : "border-gray-200 hover:border-gray-300 bg-white"
                                                }`}
                                            >
                                                <motion.div
                                                    initial={{ x: "-100%" }}
                                                    whileHover={{ x: "100%" }}
                                                    transition={{ duration: 0.5 }}
                                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none"
                                                />
                                                <div className="flex items-center gap-4 relative z-10">
                                                    <motion.span
                                                        animate={{ scale: formData.inquiryType === type.id ? 1.1 : 1 }}
                                                        className="text-4xl"
                                                    >
                                                        {type.icon}
                                                    </motion.span>
                                                    <span className="font-bold text-[#1A1A1A]">{type.label}</span>
                                                </div>
                                                {formData.inquiryType === type.id && (
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        className="absolute top-3 right-3 w-6 h-6 bg-[#1B5E38] rounded-full flex items-center justify-center"
                                                    >
                                                        <Check className="w-4 h-4 text-white" />
                                                    </motion.div>
                                                )}
                                            </motion.button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 2: Basic Info */}
                            {step === 2 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -30 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-6"
                                >
                                    <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6 text-center">
                                        基本情報をご入力ください
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {[
                                            { label: "会社名", key: "companyName", required: true, placeholder: "株式会社○○" },
                                            { label: "お名前", key: "name", required: true, placeholder: "山田 太郎" },
                                            { label: "メールアドレス", key: "email", required: true, type: "email", placeholder: "example@company.co.jp" },
                                            { label: "電話番号", key: "phone", required: false, type: "tel", placeholder: "090-1234-5678" },
                                        ].map((field, index) => (
                                            <motion.div
                                                key={field.key}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    {field.label} {field.required && <span className="text-red-500">*</span>}
                                                </label>
                                                <input
                                                    type={field.type || "text"}
                                                    required={field.required}
                                                    value={(formData as any)[field.key]}
                                                    onChange={(e) =>
                                                        setFormData({ ...formData, [field.key]: e.target.value })
                                                    }
                                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1B5E38] focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                                                    placeholder={field.placeholder}
                                                />
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between pt-8">
                                        <motion.button
                                            type="button"
                                            onClick={() => setStep(1)}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors"
                                        >
                                            戻る
                                        </motion.button>
                                        <motion.button
                                            type="button"
                                            onClick={() => setStep(3)}
                                            disabled={!formData.companyName || !formData.name || !formData.email}
                                            whileHover={{ scale: !formData.companyName || !formData.name || !formData.email ? 1 : 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="px-8 py-3 bg-[#1B5E38] text-white font-bold rounded-full hover:bg-[#1B5E38]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                        >
                                            次へ
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3: Details & Submit */}
                            {step === 3 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -30 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-6"
                                >
                                    <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6 text-center">
                                        詳細をお聞かせください
                                    </h2>

                                    {/* Dispatch specific fields */}
                                    {formData.inquiryType === "dispatch" && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="grid md:grid-cols-3 gap-6 p-6 bg-[#1B5E38]/5 rounded-2xl"
                                        >
                                            {[
                                                { label: "希望人数", key: "workerCount", placeholder: "例: 5名" },
                                                { label: "希望期間", key: "period", placeholder: "例: 3ヶ月" },
                                                { label: "勤務地", key: "location", placeholder: "例: 宮崎県都城市" },
                                            ].map((field, index) => (
                                                <motion.div
                                                    key={field.key}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                >
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        {field.label}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        value={(formData as any)[field.key]}
                                                        onChange={(e) =>
                                                            setFormData({ ...formData, [field.key]: e.target.value })
                                                        }
                                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1B5E38] focus:border-transparent outline-none bg-white"
                                                        placeholder={field.placeholder}
                                                    />
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}

                                    {/* IT specific fields */}
                                    {formData.inquiryType === "it" && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="grid md:grid-cols-3 gap-6 p-6 bg-[#2563EB]/5 rounded-2xl"
                                        >
                                            {[
                                                { label: "開発種別", key: "projectType", options: ["選択してください", "Webアプリ開発", "モバイルアプリ開発", "業務システム開発", "技術コンサルティング"] },
                                                { label: "予算感", key: "budget", options: ["選択してください", "〜100万円", "100〜300万円", "300〜500万円", "500万円〜"] },
                                                { label: "希望納期", key: "deadline", placeholder: "例: 2025年4月" },
                                            ].map((field, index) => (
                                                <motion.div
                                                    key={field.key}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                >
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        {field.label}
                                                    </label>
                                                    {"options" in field && field.options ? (
                                                        <select
                                                            value={(formData as any)[field.key]}
                                                            onChange={(e) =>
                                                                setFormData({ ...formData, [field.key]: e.target.value })
                                                            }
                                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none bg-white"
                                                        >
                                                            {field.options.map((opt, optIndex) => (
                                                                <option key={opt} value={optIndex === 0 ? "" : opt}>
                                                                    {opt}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    ) : (
                                                        <input
                                                            type="text"
                                                            value={(formData as any)[field.key]}
                                                            onChange={(e) =>
                                                                setFormData({ ...formData, [field.key]: e.target.value })
                                                            }
                                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#2563EB] focus:border-transparent outline-none bg-white"
                                                            placeholder={field.placeholder}
                                                        />
                                                    )}
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            お問い合わせ内容 <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1B5E38] focus:border-transparent outline-none resize-none bg-gray-50 focus:bg-white"
                                            placeholder="ご相談内容をご記入ください"
                                        />
                                    </motion.div>

                                    <div className="flex justify-between pt-8">
                                        <motion.button
                                            type="button"
                                            onClick={() => setStep(2)}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors"
                                        >
                                            戻る
                                        </motion.button>
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting || !formData.message}
                                            whileHover={{ scale: isSubmitting || !formData.message ? 1 : 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="px-8 py-3 bg-[#1B5E38] text-white font-bold rounded-full hover:bg-[#1B5E38]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg shadow-[#1B5E38]/30"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-2">
                                                    <motion.span
                                                        animate={{ rotate: 360 }}
                                                        transition={{ repeat: Infinity, duration: 1 }}
                                                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                    />
                                                    送信中...
                                                </span>
                                            ) : (
                                                <>
                                                    送信する
                                                    <Send className="w-4 h-4" />
                                                </>
                                            )}
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="section bg-[#FAFAF7]">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-bold text-[#1A1A1A]"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            直接のお問い合わせ
                        </h2>
                        <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-[#1B5E38] to-[#D4A853]" />
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: Phone, title: "お電話", value: "0995-73-9939", sub: "平日 9:00〜18:00", color: "#1B5E38" },
                            { icon: Mail, title: "メール", value: "info@sugu-kuru.co.jp", sub: "24時間受付", color: "#D4A853" },
                            { icon: MapPin, title: "所在地", value: "鹿児島県霧島市国分中央3-42-8", sub: "翔陽A103", color: "#7C3AED" },
                        ].map((item, index) => (
                            <GlassCard key={item.title} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                    className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center`}
                                    style={{ backgroundColor: `${item.color}20` }}
                                >
                                    <item.icon className="w-7 h-7" style={{ color: item.color }} />
                                </motion.div>
                                <h3 className="font-bold text-[#1A1A1A] mb-2">{item.title}</h3>
                                {item.title === "お電話" ? (
                                    <a href="tel:0995-73-9939" className="text-[#1B5E38] font-bold text-lg hover:underline block">
                                        {item.value}
                                    </a>
                                ) : item.title === "メール" ? (
                                    <a href="mailto:info@sugu-kuru.co.jp" className="text-[#1B5E38] hover:underline block">
                                        {item.value}
                                    </a>
                                ) : (
                                    <p className="text-gray-600">{item.value}</p>
                                )}
                                <p className="text-sm text-gray-500 mt-2">{item.sub}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
