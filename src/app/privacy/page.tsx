"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
                        <div className="w-14 h-14 rounded-2xl bg-[#1B5E38]/20 flex items-center justify-center">
                            <Shield className="w-7 h-7 text-[#1B5E38]" />
                        </div>
                        <div>
                            <h1
                                className="text-3xl md:text-4xl font-bold"
                                style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                            >
                                プライバシーポリシー
                            </h1>
                            <p className="text-gray-400 mt-1">Privacy Policy</p>
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
                                スグクル株式会社（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、
                                以下のとおりプライバシーポリシーを定め、これを遵守します。
                            </p>

                            <div className="space-y-10">
                                {/* Section 1 */}
                                <div className="bg-[#FAFAF7] rounded-xl p-6 md:p-8">
                                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-[#1B5E38] text-white flex items-center justify-center text-sm font-bold">1</span>
                                        個人情報の定義
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        本プライバシーポリシーにおいて「個人情報」とは、生存する個人に関する情報であって、
                                        当該情報に含まれる氏名、生年月日、住所、電話番号、メールアドレス、その他の記述により
                                        特定の個人を識別できるもの、または他の情報と容易に照合することができ、
                                        それにより特定の個人を識別できるものを指します。
                                    </p>
                                </div>

                                {/* Section 2 */}
                                <div className="bg-[#FAFAF7] rounded-xl p-6 md:p-8">
                                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-[#1B5E38] text-white flex items-center justify-center text-sm font-bold">2</span>
                                        個人情報の収集
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        当社は、以下の場合に個人情報を収集することがあります：
                                    </p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#1B5E38] mt-1">•</span>
                                            お問い合わせフォームからのご連絡時
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#1B5E38] mt-1">•</span>
                                            人材派遣・職業紹介サービスへのお申し込み時
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#1B5E38] mt-1">•</span>
                                            採用応募時
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#1B5E38] mt-1">•</span>
                                            その他、当社サービスをご利用いただく際
                                        </li>
                                    </ul>
                                </div>

                                {/* Section 3 */}
                                <div className="bg-[#FAFAF7] rounded-xl p-6 md:p-8">
                                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-[#1B5E38] text-white flex items-center justify-center text-sm font-bold">3</span>
                                        個人情報の利用目的
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        当社は、収集した個人情報を以下の目的で利用します：
                                    </p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#1B5E38] mt-1">•</span>
                                            人材派遣・職業紹介サービスの提供
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#1B5E38] mt-1">•</span>
                                            お問い合わせへの回答・対応
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#1B5E38] mt-1">•</span>
                                            サービス向上のための調査・分析
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#1B5E38] mt-1">•</span>
                                            法令に基づく届出・報告
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#1B5E38] mt-1">•</span>
                                            採用選考および人事管理
                                        </li>
                                    </ul>
                                </div>

                                {/* Section 4 */}
                                <div className="bg-[#FAFAF7] rounded-xl p-6 md:p-8">
                                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-[#1B5E38] text-white flex items-center justify-center text-sm font-bold">4</span>
                                        個人情報の第三者提供
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        当社は、以下の場合を除き、個人情報を第三者に提供することはありません：
                                    </p>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#1B5E38] mt-1">•</span>
                                            ご本人の同意がある場合
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#1B5E38] mt-1">•</span>
                                            法令に基づく場合
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#1B5E38] mt-1">•</span>
                                            人材派遣・職業紹介サービスにおいて、派遣先・紹介先企業への情報提供が必要な場合
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-[#1B5E38] mt-1">•</span>
                                            業務委託先に対して、業務遂行上必要な範囲で提供する場合
                                        </li>
                                    </ul>
                                </div>

                                {/* Section 5 */}
                                <div className="bg-[#FAFAF7] rounded-xl p-6 md:p-8">
                                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-[#1B5E38] text-white flex items-center justify-center text-sm font-bold">5</span>
                                        個人情報の安全管理
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        当社は、個人情報の漏洩、滅失、毀損を防止するため、適切なセキュリティ対策を講じます。
                                        また、個人情報を取り扱う従業員に対して、適切な教育・監督を行います。
                                    </p>
                                </div>

                                {/* Section 6 */}
                                <div className="bg-[#FAFAF7] rounded-xl p-6 md:p-8">
                                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-[#1B5E38] text-white flex items-center justify-center text-sm font-bold">6</span>
                                        個人情報の開示・訂正・削除
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        ご本人から個人情報の開示、訂正、削除のご請求があった場合は、
                                        ご本人確認を行った上で、合理的な期間内に対応いたします。
                                        ご請求は、下記のお問い合わせ窓口までご連絡ください。
                                    </p>
                                </div>

                                {/* Section 7 */}
                                <div className="bg-[#FAFAF7] rounded-xl p-6 md:p-8">
                                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-[#1B5E38] text-white flex items-center justify-center text-sm font-bold">7</span>
                                        Cookieの使用について
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        当社ウェブサイトでは、サービス向上のためCookieを使用することがあります。
                                        Cookieにより個人を特定することはできませんが、ブラウザの設定により
                                        Cookieの受け入れを拒否することも可能です。
                                    </p>
                                </div>

                                {/* Section 8 */}
                                <div className="bg-[#FAFAF7] rounded-xl p-6 md:p-8">
                                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-[#1B5E38] text-white flex items-center justify-center text-sm font-bold">8</span>
                                        プライバシーポリシーの変更
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed">
                                        当社は、法令の変更や事業内容の変化に応じて、本プライバシーポリシーを
                                        変更することがあります。変更後のプライバシーポリシーは、
                                        当社ウェブサイトに掲載した時点から効力を生じます。
                                    </p>
                                </div>

                                {/* Contact */}
                                <div className="bg-[#1B5E38]/10 rounded-xl p-6 md:p-8 border border-[#1B5E38]/20">
                                    <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">
                                        お問い合わせ窓口
                                    </h2>
                                    <div className="text-gray-600 space-y-2">
                                        <p><strong>スグクル株式会社</strong></p>
                                        <p>〒899-4332 鹿児島県霧島市国分中央3丁目42-8 翔陽A103</p>
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
