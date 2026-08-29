"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    Phone,
    CheckCircle2,
    Handshake,
    Building,
    UtensilsCrossed,
    Smartphone,
    FileSpreadsheet,
    Factory,
    HardHat,
} from "lucide-react";
import { EmploymentTypeCompare } from "@/components/diagrams/EmploymentTypeCompare";
import { VisaEligibilityMatrix } from "@/components/diagrams/VisaEligibilityMatrix";
import { TempToPermTimeline } from "@/components/diagrams/TempToPermTimeline";

const industries = [
    {
        icon: Building,
        name: "ホテル・宿泊",
        roles: "フロント・接客・企画",
        visas: "技人国（通訳・海外顧客対応）／身分系",
        note: "インバウンド需要の回復で人手不足が続く分野。語学力がそのまま職務要件になり、技人国での採用が通りやすい業種です。",
    },
    {
        icon: UtensilsCrossed,
        name: "外食・飲食",
        roles: "店舗運営・ホール",
        visas: "身分系（永住者・定住者等）",
        note: "求人量の多い業種ですが、ホール接客そのものは技人国の対象外です。店舗管理・本部業務であれば技人国も対象になります。",
    },
    {
        icon: Smartphone,
        name: "携帯電話ショップ等の販売",
        roles: "通訳を兼ねた接客・販売",
        visas: "技人国／身分系",
        note: "外国人顧客への通訳を伴う販売として、技人国の適合実績が多い業種です。紹介予定派遣にも向いています。",
    },
    {
        icon: FileSpreadsheet,
        name: "JA・団体の事務職",
        roles: "総合事務・書類対応",
        visas: "技人国（人文知識・総合事務）／身分系",
        note: "単純作業ではない事務職務であることが前提です。日本語力（目安：N1相当）が実質的な要件になります。",
    },
    {
        icon: Factory,
        name: "製造業",
        roles: "生産管理・品質保証・通訳翻訳",
        visas: "技人国",
        note: "学歴・専門性と職務内容の関連づけが必要です。現場のライン作業への専従はできません（詳しくは技人国ページで解説）。",
    },
    {
        icon: HardHat,
        name: "建設",
        roles: "施工管理・現場監督・設備管理",
        visas: "技人国・身分系・特定技能建設（直接雇用のみ）",
        note: "現場作業そのものへの紹介・派遣は法律上できません。管理・監督業務に限って対応可能です（詳しくは技人国ページで解説）。",
    },
];

const flow = [
    { step: 1, title: "ご相談・条件確認", description: "求める人材像と業務内容をヒアリング" },
    { step: 2, title: "労働条件の明示", description: "賃金・業務内容等を書面で交付（職安法5条の3）" },
    { step: 3, title: "候補者のご紹介", description: "条件に合う方を選定してご紹介" },
    { step: 4, title: "面接・選考", description: "紹介予定派遣の場合は事前面接も可能" },
    { step: 5, title: "内定・入社", description: "内定後は入社後のフォローも継続" },
];

export default function PlacementPage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="section bg-accent text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent-light to-accent" />
                <div className="container mx-auto relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm font-medium mb-6">
                                Placement Service ─ 九州の企業様へ
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            正社員採用も、<br />
                            <span className="text-white">まず働きぶりを見てからも。</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed"
                        >
                            鹿児島を拠点に、九州の企業様へ外国人材の有料職業紹介・紹介予定派遣を提供しています。<br />
                            直接雇用ならすぐに。じっくり見極めたいなら、紹介予定派遣で。
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                href="/contact"
                                className="btn bg-white text-accent hover:bg-gray-100 text-lg group"
                            >
                                採用相談をする
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="tel:0995-73-9939"
                                className="btn bg-transparent border-2 border-white/50 hover:bg-white/10"
                            >
                                <Phone className="w-5 h-5" />
                                0995-73-9939
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 図① 3つの採用形態くらべ */}
            <section className="section bg-canvas">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                            Compare
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-ink mb-4"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            3つの採用形態、雇用主で見分ける
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            違いを分けるのは「今、誰が雇用主か」です。まずはこの1点から整理します。
                        </p>
                    </motion.div>

                    <EmploymentTypeCompare />
                </div>
            </section>

            {/* 紹介予定派遣の深掘り + 図③6ヶ月フロー */}
            <section className="section bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center mb-12"
                    >
                        <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                            Temp-to-Perm
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-ink mb-6"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            紹介予定派遣という選択肢
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            採用は、賭けではありません。履歴書だけでは見えない、仕事への姿勢やチームとの相性。<br />
                            紹介予定派遣は、実際に働いてもらう期間を設けることで、雇用する側もされる側も
                            納得の上で次の一歩に進める仕組みです。
                        </p>
                    </motion.div>

                    <TempToPermTimeline />
                </div>
            </section>

            {/* 図② 在留資格×形態 可否マトリクス */}
            <section className="section bg-canvas">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                            Eligibility
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-ink mb-4"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            在留資格ごとに、できる受け入れ方が違います
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            とくに特定技能は、<strong className="text-ink">派遣が認められるのは農業・漁業の2分野のみ</strong>
                            です。それ以外の分野では、紹介（直接雇用）でのご案内が基本となります。
                        </p>
                    </motion.div>

                    <VisaEligibilityMatrix />
                </div>
            </section>

            {/* 業種別レーン */}
            <section className="section bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                            Industries
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-ink"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            業種別・受け入れの具体例
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {industries.map((ind, i) => (
                            <motion.div
                                key={ind.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ duration: 0.5, delay: i * 0.06 }}
                                className="card"
                            >
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                                    <ind.icon className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="font-bold text-ink mb-1">{ind.name}</h3>
                                <p className="text-sm text-gray-500 mb-3">{ind.roles}</p>
                                <p className="text-xs font-medium text-accent-strong mb-3">{ind.visas}</p>
                                <p className="text-sm text-gray-600 leading-relaxed">{ind.note}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flow */}
            <section className="section bg-ink">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                            Flow
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-white"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            ご利用の流れ
                        </h2>
                    </motion.div>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-5 gap-4">
                            {flow.map((item, i) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    className="relative"
                                >
                                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 h-full">
                                        <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                                            {item.step}
                                        </div>
                                        <h3 className="font-bold text-white mb-2 text-sm">{item.title}</h3>
                                        <p className="text-xs text-gray-400">{item.description}</p>
                                    </div>
                                    {i < flow.length - 1 && (
                                        <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-accent">
                                            →
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 料金（金額なし） */}
            <section className="section bg-canvas">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-12"
                        >
                            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                                Pricing
                            </span>
                            <h2
                                className="text-3xl md:text-4xl font-bold text-ink"
                                style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                            >
                                料金の考え方
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100"
                        >
                            <div className="flex items-start gap-4 mb-8">
                                <Handshake className="w-8 h-8 text-accent flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-ink mb-2">
                                        成功報酬型
                                    </h3>
                                    <p className="text-gray-600">
                                        紹介手数料は、就職が成立した場合にのみ発生します。
                                        紹介予定派遣の場合、派遣期間中は派遣料金のみで、
                                        直接雇用への転換時に紹介手数料が発生します。
                                        具体的な料金は求人内容により異なるため、まずはお見積りをご案内します。
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-gray-100 pt-8">
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "求職者からは一切費用をいただきません（職業安定法）",
                                        "成功報酬型で初期費用のリスクを抑制",
                                        "ビザ変更・在留手続きのご案内",
                                        "入社後の定着フォロー",
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                                            <span className="text-gray-600 text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 私たちがやらないこと */}
            <section className="section bg-white">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="text-center mb-10">
                            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                                Compliance
                            </span>
                            <h2
                                className="text-3xl md:text-4xl font-bold text-ink"
                                style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                            >
                                私たちが「やらないこと」
                            </h2>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
                            {[
                                "建設現場での作業そのものへの紹介・派遣（施工管理・現場監督等の管理業務は対象内）",
                                "特定技能人材の製造業等での派遣（派遣が認められるのは農業・漁業のみ）",
                                "求職者からの手数料の徴収",
                                "在職中の方への直接的な転職勧誘",
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                    <span className="text-gray-400 font-bold flex-shrink-0">✕</span>
                                    <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-gradient-to-br from-accent via-accent-light to-accent">
                <div className="container mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2
                            className="text-3xl md:text-4xl font-bold text-white mb-6"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            まずは、条件のご相談から。
                        </h2>
                        <p className="text-white/80 mb-8 max-w-xl mx-auto">
                            直接雇用か、紹介予定派遣か。九州の事業所様の状況に合わせてご提案します。
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="btn bg-white text-accent hover:bg-gray-100 text-lg group"
                            >
                                採用相談をする
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
