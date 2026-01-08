"use client";

import { motion } from "framer-motion";
import { FileText, Users, GraduationCap, Phone, Download, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Margin rate disclosure data (sample)
const marginData = {
    fiscalYear: "2024年度",
    dispatchFee: "2,200",
    workerWage: "1,550",
    marginRate: "29.5",
    workerCount: 60,
    dispatchCount: 20,
};

const trainingInfo = [
    {
        category: "入職時研修",
        content: "安全衛生教育、就業規則説明、マナー研修",
        hours: "8時間",
    },
    {
        category: "技能向上研修",
        content: "農業技術研修、機械操作研修、日本語教育",
        hours: "年間40時間以上",
    },
    {
        category: "キャリアアップ研修",
        content: "特定技能試験対策、リーダーシップ研修",
        hours: "希望者に随時提供",
    },
];

const careerConsulting = {
    available: "あり（無料）",
    contact: "担当者に直接連絡、または下記相談窓口まで",
    hours: "平日 9:00〜18:00",
};

const complaintHandling = {
    contact: "0995-73-9939",
    email: "soudan@sugu-kuru.co.jp",
    process: "受付後、担当者より3営業日以内に回答",
};

export default function CompliancePage() {
    const [openSections, setOpenSections] = useState<string[]>(["margin"]);

    const toggleSection = (section: string) => {
        setOpenSections((prev) =>
            prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
        );
    };

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section bg-[#1A1A1A] text-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <span className="text-[#D4A853] font-medium text-sm tracking-wider uppercase mb-4 block">
                            Compliance
                        </span>
                        <h1
                            className="text-4xl md:text-5xl font-bold mb-6"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            法令遵守情報
                        </h1>
                        <p className="text-white/80 text-lg">
                            労働者派遣法に基づく情報開示を行っています。
                            私たちは法令を遵守し、透明性の高い事業運営に努めています。
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction */}
            <section className="section bg-[#FAFAF7]">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl p-8 shadow-sm border border-[#1B5E38]/20"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-[#1B5E38]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <FileText className="w-6 h-6 text-[#1B5E38]" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-[#1A1A1A] mb-2">
                                    労働者派遣法第23条第5項に基づく情報公開
                                </h2>
                                <p className="text-gray-600">
                                    当社は、労働者派遣法に基づき、派遣労働者の待遇に関する情報を公開しています。
                                    この情報は、派遣労働者の保護と適正な派遣事業の運営を目的としています。
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Margin Rate Disclosure */}
            <section id="dispatch-law" className="section bg-white">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Margin Rate Section */}
                        <div className="mb-6">
                            <button
                                onClick={() => toggleSection("margin")}
                                className="w-full flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-[#1B5E38] rounded-lg flex items-center justify-center">
                                        <Users className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1A1A1A]">
                                        マージン率等の情報
                                    </h3>
                                </div>
                                {openSections.includes("margin") ? (
                                    <ChevronUp className="w-5 h-5 text-gray-400" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                            </button>

                            {openSections.includes("margin") && (
                                <div className="mt-4 bg-white border border-gray-200 rounded-xl overflow-hidden">
                                    <div className="p-6 border-b border-gray-100">
                                        <p className="text-sm text-gray-500 mb-4">
                                            対象期間: {marginData.fiscalYear}
                                        </p>
                                        <table className="w-full">
                                            <tbody>
                                                <tr className="border-b border-gray-100">
                                                    <td className="py-4 text-gray-600">派遣料金（1時間あたり平均）</td>
                                                    <td className="py-4 text-right font-bold text-[#1A1A1A]">
                                                        ¥{marginData.dispatchFee}
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-gray-100">
                                                    <td className="py-4 text-gray-600">派遣労働者の賃金（1時間あたり平均）</td>
                                                    <td className="py-4 text-right font-bold text-[#1A1A1A]">
                                                        ¥{marginData.workerWage}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-4 text-gray-600">マージン率</td>
                                                    <td className="py-4 text-right font-bold text-2xl text-[#1B5E38]">
                                                        {marginData.marginRate}%
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="p-6 bg-gray-50">
                                        <p className="text-sm text-gray-500">
                                            ※ マージンには、社会保険料、有給休暇引当金、教育訓練費、福利厚生費等が含まれます。
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Training Section */}
                        <div className="mb-6">
                            <button
                                onClick={() => toggleSection("training")}
                                className="w-full flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-[#D4A853] rounded-lg flex items-center justify-center">
                                        <GraduationCap className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1A1A1A]">
                                        教育訓練に関する事項
                                    </h3>
                                </div>
                                {openSections.includes("training") ? (
                                    <ChevronUp className="w-5 h-5 text-gray-400" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                            </button>

                            {openSections.includes("training") && (
                                <div className="mt-4 bg-white border border-gray-200 rounded-xl overflow-hidden">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="bg-gray-50">
                                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">区分</th>
                                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">内容</th>
                                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">時間</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {trainingInfo.map((training, index) => (
                                                <tr key={index} className="border-t border-gray-100">
                                                    <td className="px-6 py-4 font-medium text-[#1A1A1A]">
                                                        {training.category}
                                                    </td>
                                                    <td className="px-6 py-4 text-gray-600">{training.content}</td>
                                                    <td className="px-6 py-4 text-gray-600">{training.hours}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="p-6 bg-gray-50">
                                        <p className="text-sm text-gray-500">
                                            ※ 教育訓練はすべて有給・無償で実施しています。
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Career Consulting */}
                        <div className="mb-6">
                            <button
                                onClick={() => toggleSection("career")}
                                className="w-full flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-[#2563EB] rounded-lg flex items-center justify-center">
                                        <Users className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1A1A1A]">
                                        キャリアコンサルティング
                                    </h3>
                                </div>
                                {openSections.includes("career") ? (
                                    <ChevronUp className="w-5 h-5 text-gray-400" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                            </button>

                            {openSections.includes("career") && (
                                <div className="mt-4 bg-white border border-gray-200 rounded-xl p-6">
                                    <dl className="space-y-4">
                                        <div>
                                            <dt className="text-sm text-gray-500 mb-1">相談窓口</dt>
                                            <dd className="font-medium text-[#1A1A1A]">{careerConsulting.available}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-sm text-gray-500 mb-1">利用方法</dt>
                                            <dd className="font-medium text-[#1A1A1A]">{careerConsulting.contact}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-sm text-gray-500 mb-1">対応時間</dt>
                                            <dd className="font-medium text-[#1A1A1A]">{careerConsulting.hours}</dd>
                                        </div>
                                    </dl>
                                </div>
                            )}
                        </div>

                        {/* Complaint Handling */}
                        <div className="mb-6">
                            <button
                                onClick={() => toggleSection("complaint")}
                                className="w-full flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-[#EF4444] rounded-lg flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1A1A1A]">
                                        苦情処理・相談窓口
                                    </h3>
                                </div>
                                {openSections.includes("complaint") ? (
                                    <ChevronUp className="w-5 h-5 text-gray-400" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                )}
                            </button>

                            {openSections.includes("complaint") && (
                                <div className="mt-4 bg-white border border-gray-200 rounded-xl p-6">
                                    <dl className="space-y-4">
                                        <div>
                                            <dt className="text-sm text-gray-500 mb-1">電話番号</dt>
                                            <dd className="font-medium text-[#1A1A1A]">{complaintHandling.contact}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-sm text-gray-500 mb-1">メール</dt>
                                            <dd className="font-medium text-[#1A1A1A]">{complaintHandling.email}</dd>
                                        </div>
                                        <div>
                                            <dt className="text-sm text-gray-500 mb-1">対応フロー</dt>
                                            <dd className="font-medium text-[#1A1A1A]">{complaintHandling.process}</dd>
                                        </div>
                                    </dl>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Download Section */}
            <section className="section bg-[#F3F4F6]">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2
                            className="text-2xl font-bold text-[#1A1A1A] mb-4"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            PDF版ダウンロード
                        </h2>
                        <p className="text-gray-600 mb-8">
                            上記情報のPDF版をダウンロードいただけます。
                        </p>
                        <button className="btn btn-primary">
                            <Download className="w-5 h-5" />
                            PDF をダウンロード
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="section bg-[#1B5E38]">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2
                            className="text-3xl font-bold text-white mb-6"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            ご不明点はお気軽にお問い合わせください
                        </h2>
                        <Link
                            href="/contact"
                            className="btn bg-white text-[#1B5E38] hover:bg-gray-100"
                        >
                            お問い合わせ
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
