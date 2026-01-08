"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Scale, ArrowLeft } from "lucide-react";

export default function LegalPage() {
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
                            <Scale className="w-7 h-7 text-[#D4A853]" />
                        </div>
                        <div>
                            <h1
                                className="text-3xl md:text-4xl font-bold"
                                style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                            >
                                利用規約
                            </h1>
                            <p className="text-gray-400 mt-1">Terms of Service</p>
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
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-600 mb-8">
                                本利用規約（以下「本規約」）は、スグクル株式会社（以下「当社」）が提供するウェブサイトおよびサービス（以下「本サービス」）の利用条件を定めるものです。本サービスをご利用いただく前に、本規約をよくお読みください。
                            </p>

                            <div className="space-y-10">
                                {/* Section 1 */}
                                <div className="bg-[#FAFAF7] rounded-xl p-6 md:p-8">
                                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-[#D4A853] text-white flex items-center justify-center text-sm font-bold">1</span>
                                        適用範囲
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        本規約は、本サービスの利用に関わる一切の関係に適用されます。
                                        当社が本サービス上で別途定める個別規定は、本規約の一部を構成します。
                                        本規約と個別規定が矛盾する場合は、個別規定が優先されます。
                                    </p>
                                </div>

                                {/* Section 2 */}
                                <div className="bg-[#FAFAF7] rounded-xl p-6 md:p-8">
                                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-[#D4A853] text-white flex items-center justify-center text-sm font-bold">2</span>
                                        サービス内容
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        当社は、以下のサービスを提供します：
                                    </p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#D4A853] mt-1">•</span>
                                            農業・畜産分野における外国人材の派遣サービス
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#D4A853] mt-1">•</span>
                                            有料職業紹介サービス
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#D4A853] mt-1">•</span>
                                            農作業受託サービス
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#D4A853] mt-1">•</span>
                                            IT関連サービス
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#D4A853] mt-1">•</span>
                                            その他当社が提供するサービス
                                        </li>
                                    </ul>
                                </div>

                                {/* Section 3 */}
                                <div className="bg-[#FAFAF7] rounded-xl p-6 md:p-8">
                                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-[#D4A853] text-white flex items-center justify-center text-sm font-bold">3</span>
                                        禁止事項
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        利用者は、本サービスの利用にあたり、以下の行為をしてはなりません：
                                    </p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#D4A853] mt-1">•</span>
                                            法令または公序良俗に違反する行為
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#D4A853] mt-1">•</span>
                                            犯罪行為に関連する行為
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#D4A853] mt-1">•</span>
                                            当社または第三者の知的財産権を侵害する行為
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#D4A853] mt-1">•</span>
                                            当社または第三者の名誉・信用を毀損する行為
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#D4A853] mt-1">•</span>
                                            本サービスの運営を妨害する行為
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#D4A853] mt-1">•</span>
                                            不正アクセス、または不正アクセスを試みる行為
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#D4A853] mt-1">•</span>
                                            虚偽の情報を登録・送信する行為
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#D4A853] mt-1">•</span>
                                            その他、当社が不適切と判断する行為
                                        </li>
                                    </ul>
                                </div>

                                {/* Section 4 */}
                                <div className="bg-[#FAFAF7] rounded-xl p-6 md:p-8">
                                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-[#D4A853] text-white flex items-center justify-center text-sm font-bold">4</span>
                                        知的財産権
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        本サービスに含まれるすべてのコンテンツ（テキスト、画像、ロゴ、デザイン等）に関する知的財産権は、当社または正当な権利者に帰属します。
                                        利用者は、当社の書面による事前の承諾なく、これらのコンテンツを複製、転載、改変、配布することはできません。
                                    </p>
                                </div>

                                {/* Section 5 */}
                                <div className="bg-[#FAFAF7] rounded-xl p-6 md:p-8">
                                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-[#D4A853] text-white flex items-center justify-center text-sm font-bold">5</span>
                                        免責事項
                                    </h2>
                                    <ul className="space-y-3 text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#D4A853] mt-1">•</span>
                                            当社は、本サービスの内容の正確性、完全性、有用性等について、いかなる保証も行いません。
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#D4A853] mt-1">•</span>
                                            当社は、本サービスの提供の中断、停止、終了、利用不能または変更について、利用者に事前に通知する義務を負いません。
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#D4A853] mt-1">•</span>
                                            当社は、本サービスの利用により生じた損害について、当社の故意または重過失による場合を除き、一切の責任を負いません。
                                        </li>
                                    </ul>
                                </div>

                                {/* Section 6 */}
                                <div className="bg-[#FAFAF7] rounded-xl p-6 md:p-8">
                                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-[#D4A853] text-white flex items-center justify-center text-sm font-bold">6</span>
                                        サービスの変更・中断・終了
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        当社は、利用者への事前の通知なく、本サービスの内容を変更し、または本サービスの提供を中断・終了することができます。
                                        これにより利用者に生じた損害について、当社は一切の責任を負いません。
                                    </p>
                                </div>

                                {/* Section 7 */}
                                <div className="bg-[#FAFAF7] rounded-xl p-6 md:p-8">
                                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-[#D4A853] text-white flex items-center justify-center text-sm font-bold">7</span>
                                        利用規約の変更
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        当社は、必要と判断した場合には、利用者への事前の通知なく本規約を変更することができます。
                                        変更後の利用規約は、当社ウェブサイトに掲載した時点から効力を生じます。
                                        変更後も本サービスの利用を継続された場合、利用者は変更後の規約に同意したものとみなされます。
                                    </p>
                                </div>

                                {/* Section 8 */}
                                <div className="bg-[#FAFAF7] rounded-xl p-6 md:p-8">
                                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-[#D4A853] text-white flex items-center justify-center text-sm font-bold">8</span>
                                        準拠法・管轄裁判所
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        本規約の解釈および適用は、日本法に準拠します。
                                        本サービスに関して紛争が生じた場合には、鹿児島地方裁判所を第一審の専属的合意管轄裁判所とします。
                                    </p>
                                </div>

                                {/* Section 9 */}
                                <div className="bg-[#FAFAF7] rounded-xl p-6 md:p-8">
                                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-[#D4A853] text-white flex items-center justify-center text-sm font-bold">9</span>
                                        分離可能性
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        本規約のいずれかの条項が無効または執行不能と判断された場合でも、
                                        残りの条項は引き続き完全に有効であり、執行可能であるものとします。
                                    </p>
                                </div>

                                {/* Contact */}
                                <div className="bg-[#D4A853]/10 rounded-xl p-6 md:p-8 border border-[#D4A853]/20">
                                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
                                        お問い合わせ窓口
                                    </h2>
                                    <div className="text-gray-600 space-y-2">
                                        <p><strong>スグクル株式会社</strong></p>
                                        <p>〒899-4332 鹿児島県霧島市国府中央3丁目42-8 翔陽A103</p>
                                        <p>TEL: 0995-73-9939</p>
                                        <p>Email: info@sugu-kuru.co.jp</p>
                                    </div>
                                </div>

                                {/* Date */}
                                <div className="text-right text-gray-500 text-sm">
                                    <p>制定日：2024年1月1日</p>
                                    <p>最終改定日：2024年12月1日</p>
                                </div>
                            </div>
                        </div>

                        {/* Back Link */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-[#1B5E38] hover:underline"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                トップページに戻る
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
