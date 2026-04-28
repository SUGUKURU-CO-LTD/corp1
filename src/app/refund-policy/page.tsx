"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RefreshCw, ArrowLeft, Calendar, AlertCircle } from "lucide-react";

export default function RefundPolicyPage() {
    return (
        <div className="pt-20">
            {/* Hero - Compact */}
            <section className="py-16 bg-[#1A1A1A] text-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-4"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-[#D4A853]/20 flex items-center justify-center">
                            <RefreshCw className="w-7 h-7 text-[#D4A853]" />
                        </div>
                        <div>
                            <h1
                                className="text-3xl md:text-4xl font-bold"
                                style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                            >
                                返戻金制度
                            </h1>
                            <p className="text-gray-400 mt-1">Refund Policy</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        {/* Introduction */}
                        <div className="prose prose-lg max-w-none mb-10">
                            <p className="text-gray-600 leading-relaxed">
                                スグクル株式会社（以下「当社」）の有料職業紹介事業において、当社のご紹介により入社された求職者様が、入社後一定期間内に自己都合により退職された場合、求人企業様にお支払いいただいた紹介手数料の一部を返金する制度を設けております。
                            </p>
                        </div>

                        {/* Refund Schedule */}
                        <div className="bg-[#FAFAF7] rounded-2xl p-6 md:p-10 mb-10 border border-[#1B5E38]/10">
                            <div className="flex items-start gap-4 mb-8">
                                <div className="w-12 h-12 bg-[#1B5E38]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Calendar className="w-6 h-6 text-[#1B5E38]" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                                        返金規定
                                    </h2>
                                    <p className="text-gray-600">
                                        退職時期に応じて、以下の通り紹介手数料の一部を返金いたします。
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                {/* Tier 1: 1 month */}
                                <div className="bg-white rounded-xl p-6 border-2 border-[#D4A853]/30 shadow-sm">
                                    <div className="flex items-baseline justify-between mb-3">
                                        <span className="text-sm font-medium text-gray-500">
                                            入社後 1ヶ月以内
                                        </span>
                                        <span className="text-3xl font-bold text-[#D4A853]">
                                            50<span className="text-lg">%</span>
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        紹介手数料の <span className="font-bold text-[#1A1A1A]">50％</span> を返金
                                    </p>
                                </div>

                                {/* Tier 2: 3 months */}
                                <div className="bg-white rounded-xl p-6 border-2 border-[#1B5E38]/20 shadow-sm">
                                    <div className="flex items-baseline justify-between mb-3">
                                        <span className="text-sm font-medium text-gray-500">
                                            入社後 3ヶ月以内
                                        </span>
                                        <span className="text-3xl font-bold text-[#1B5E38]">
                                            30<span className="text-lg">%</span>
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        紹介手数料の <span className="font-bold text-[#1A1A1A]">30％</span> を返金
                                    </p>
                                </div>
                            </div>

                            <p className="text-sm text-gray-500 mt-6">
                                ※ 返金額の算定基準は、求人企業様より実際にお支払いいただいた紹介手数料（消費税等を除いた本体価格）といたします。
                            </p>
                        </div>

                        {/* Exclusions */}
                        <div className="bg-white rounded-2xl p-6 md:p-10 mb-10 border border-gray-200">
                            <div className="flex items-start gap-4 mb-6">
                                <div className="w-12 h-12 bg-[#EF4444]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <AlertCircle className="w-6 h-6 text-[#EF4444]" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                                        返金対象外となる場合
                                    </h2>
                                    <p className="text-gray-600">
                                        次のいずれかに該当する場合、返金の対象外となります。
                                    </p>
                                </div>
                            </div>

                            <ul className="space-y-3">
                                <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                    <span className="w-6 h-6 rounded-full bg-[#EF4444]/10 text-[#EF4444] flex items-center justify-center text-sm font-bold flex-shrink-0">
                                        1
                                    </span>
                                    <span className="text-gray-700 leading-relaxed">
                                        会社都合による解雇または退職勧奨等による退職
                                    </span>
                                </li>
                                <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                    <span className="w-6 h-6 rounded-full bg-[#EF4444]/10 text-[#EF4444] flex items-center justify-center text-sm font-bold flex-shrink-0">
                                        2
                                    </span>
                                    <span className="text-gray-700 leading-relaxed">
                                        天災、疾病、傷害その他やむを得ない事由による退職
                                    </span>
                                </li>
                                <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                    <span className="w-6 h-6 rounded-full bg-[#EF4444]/10 text-[#EF4444] flex items-center justify-center text-sm font-bold flex-shrink-0">
                                        3
                                    </span>
                                    <span className="text-gray-700 leading-relaxed">
                                        求人企業様が提示された労働条件と実際の労働条件が著しく異なることに起因する退職
                                    </span>
                                </li>
                                <li className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                    <span className="w-6 h-6 rounded-full bg-[#EF4444]/10 text-[#EF4444] flex items-center justify-center text-sm font-bold flex-shrink-0">
                                        4
                                    </span>
                                    <span className="text-gray-700 leading-relaxed">
                                        その他、当社の責に帰さない事由による退職
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Notes */}
                        <div className="bg-[#FAFAF7] rounded-2xl p-6 md:p-8 mb-10">
                            <h3 className="text-lg font-bold text-[#1A1A1A] mb-4">
                                ご利用にあたっての注意事項
                            </h3>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#D4A853] mt-1">•</span>
                                    返金のご請求は、退職日から30日以内にご連絡ください。
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#D4A853] mt-1">•</span>
                                    退職日は、求人企業様と求職者様との間で合意された日付を基準といたします。
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#D4A853] mt-1">•</span>
                                    返金手続きには、退職を証明する書類のご提出をお願いする場合がございます。
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#D4A853] mt-1">•</span>
                                    本制度の内容は、予告なく変更される場合がございます。最新の内容は本ページにてご確認ください。
                                </li>
                            </ul>
                        </div>

                        {/* Last Updated */}
                        <div className="text-right text-sm text-gray-500 mb-10">
                            最終更新日: 2026年4月27日
                        </div>

                        {/* Back to top */}
                        <div className="flex justify-center">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-[#1B5E38] hover:text-[#D4A853] transition-colors font-medium"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                トップページに戻る
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 bg-[#1B5E38]">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2
                            className="text-2xl md:text-3xl font-bold text-white mb-6"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            返戻金制度に関するお問い合わせ
                        </h2>
                        <p className="text-white/80 mb-8">
                            ご不明な点がございましたら、お気軽にお問い合わせください。
                        </p>
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
