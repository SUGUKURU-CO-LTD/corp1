"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    Phone,
    CheckCircle2,
    Factory,
    HardHat,
    Building,
    ShoppingBag,
    FileSpreadsheet,
    FileCheck,
    CalendarClock,
    ShieldCheck,
} from "lucide-react";
import { ScopeSplit } from "@/components/diagrams/ScopeSplit";
import { LeadTimeBars } from "@/components/diagrams/LeadTimeBars";

const industries = [
    {
        icon: Factory,
        name: "製造業",
        roles: "生産管理・品質保証・生産技術・通訳翻訳",
        note: "現場の実習生・特定技能人材と経営をつなぐ通訳・労務コーディネーターとしての需要が特に高まっています。",
    },
    {
        icon: HardHat,
        name: "建設",
        roles: "施工管理・現場監督・工事管理者・設備管理",
        note: "九州でもデータセンター建設等で需要が拡大している分野。現場作業ではなく、管理・監督業務が対象です。",
    },
    {
        icon: Building,
        name: "ホテル・宿泊",
        roles: "海外顧客対応・通訳・企画",
        note: "インバウンド対応の中核として、語学力を活かした職務設計がしやすい業種です。",
    },
    {
        icon: ShoppingBag,
        name: "小売・販売",
        roles: "通訳を兼ねた接客・販売",
        note: "外国人顧客への通訳販売として、許可実績が多数ある職務です。",
    },
    {
        icon: FileSpreadsheet,
        name: "JA・団体事務",
        roles: "総合事務・書類対応",
        note: "単純作業ではない事務職務であることが前提。日本語力（目安：N1相当）が実質的な要件になります。",
    },
];

const procedures = [
    {
        icon: FileCheck,
        title: "契約機関に関する届出",
        who: "本人",
        deadline: "入社・転籍から14日以内",
        description: "入管への届出。許可制ではなく届出制のため、審査待ちが発生しません。",
    },
    {
        icon: CalendarClock,
        title: "外国人雇用状況の届出",
        who: "事業主（御社）",
        deadline: "雇入れ翌月10日または末日まで",
        description: "雇用保険の被保険者かどうかで期限が異なります。労働施策総合推進法に基づく事業主の義務です。",
    },
    {
        icon: ShieldCheck,
        title: "就労資格証明書（任意）",
        who: "本人または取次",
        deadline: "就業開始前後に申請",
        description: "業務内容と在留資格の適合性を事前に確認できる制度。取得しないこと自体を理由に不利益に扱うことは禁じられています。",
    },
];

export default function GijinkokuPage() {
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
                                Gijinkoku Service ─ 九州の企業様へ
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            管理と専門知識で、<br />
                            <span className="text-white">現場を動かす人材を。</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed"
                        >
                            技術・人文知識・国際業務（技人国）ビザを持つ人材を、
                            九州の製造・建設・サービス業へ派遣・職業紹介・紹介予定派遣でご案内します。
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

            {/* 技人国とは */}
            <section className="section bg-canvas">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                            About
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-ink mb-6"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            技人国とは
                        </h2>
                        <p className="text-ink-muted text-lg leading-relaxed">
                            大学卒業等の学歴・専門性と職務内容の関連が求められる在留資格です。<br />
                            すでに技人国ビザを保有する方の転職は、<strong className="text-ink">入管の許可が不要（届出のみ）</strong>
                            のため、特定技能等の在留資格変更に比べて立ち上がりが速いのが特長です
                            （目安として、最短1ヶ月台での稼働も可能です）。
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 図④ できる/できない境界線 */}
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
                            Scope
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-ink mb-4"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            できること／できないこと
                        </h2>
                        <p className="text-ink-muted max-w-2xl mx-auto">
                            技人国は専門職としての在留資格です。求人票の職種をそのまま当てはめるのではなく、
                            学歴・専門性と関連づく職務内容として設計する必要があります。
                        </p>
                    </motion.div>

                    <ScopeSplit
                        okTitle="できること"
                        okItems={[
                            "生産管理・工程管理・品質保証（データ分析・報告書作成を含む）",
                            "生産技術・CAD設計",
                            "通訳・翻訳、外国人スタッフの教育・労務サポート",
                            "海外取引・調達",
                            "施工管理・現場監督・現場事務・設計（建設分野）",
                        ]}
                        noTitle="できないこと"
                        noItems={[
                            "ライン作業・単純作業のみへの専従",
                            "現場の定型作業（成型・組立・研削等）専従",
                            "建設現場での作業そのもの（詳しくは下の建設の線引きを参照）",
                        ]}
                        noSubtext="要件は本人側の学歴・実務経験と職務内容の関連性です。判断が微妙な場合は「就労資格証明書」で事前確認することもできます。"
                    />
                </div>
            </section>

            {/* 業種別の職務具体例 */}
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
                            Industries
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-ink"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            業種別の職務具体例
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industries.map((ind, i) => (
                            <motion.div
                                key={ind.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="card"
                            >
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                                    <ind.icon className="w-6 h-6 text-accent" />
                                </div>
                                <h3 className="font-bold text-ink mb-1">{ind.name}</h3>
                                <p className="text-sm text-accent-strong font-medium mb-3">{ind.roles}</p>
                                <p className="text-sm text-ink-muted leading-relaxed">{ind.note}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 図⑤ 建設の法的線引き */}
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
                            Construction
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-ink mb-4"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            建設分野の法的な線引き
                        </h2>
                        <p className="text-ink-muted max-w-2xl mx-auto">
                            建設「現場作業」への職業紹介・労働者派遣は法律で禁止されています（職業安定法・労働者派遣法）。
                            一方で、施工管理・現場監督等の<strong className="text-ink">管理業務は対象外ではありません</strong>。
                            判定は実際の作業内容に基づいて行います。
                        </p>
                    </motion.div>

                    <ScopeSplit
                        okTitle="紹介・派遣ができる"
                        okItems={[
                            "施工管理",
                            "現場監督",
                            "現場事務",
                            "設計",
                        ]}
                        noTitle="紹介・派遣とも不可"
                        noItems={[
                            "現場での施工作業そのもの",
                            "単純作業を含む現場作業全般",
                        ]}
                        noSubtext="判定基準は「実際の作業内容」です。役職名ではなく、担当する業務の実態で確認します。"
                    />
                </div>
            </section>

            {/* 図⑥ 3つの受け入れ方とリードタイム */}
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
                            Lead Time
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-ink"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            受け入れ方によるリードタイムの違い
                        </h2>
                    </motion.div>

                    <div className="max-w-2xl mx-auto">
                        <LeadTimeBars />
                    </div>
                </div>
            </section>

            {/* 手続きの流れ */}
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
                            Procedures
                        </span>
                        <h2
                            className="text-3xl md:text-4xl font-bold text-white"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                        >
                            入社後に必要な手続き
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {procedures.map((proc, i) => (
                            <motion.div
                                key={proc.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                            >
                                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                                    <proc.icon className="w-5 h-5 text-accent-light" />
                                </div>
                                <h3 className="font-bold text-white mb-1">{proc.title}</h3>
                                <p className="text-xs text-accent-light font-medium mb-1">担当：{proc.who}</p>
                                <p className="text-xs text-ink-inverse-muted mb-3">{proc.deadline}</p>
                                <p className="text-sm text-ink-inverse-muted leading-relaxed">{proc.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 料金（金額なし） */}
            <section className="section bg-white">
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
                            className="bg-canvas rounded-2xl p-8 md:p-12 border border-line"
                        >
                            <p className="text-ink-muted mb-8 leading-relaxed">
                                職業紹介は成功報酬型、派遣は派遣料金、紹介予定派遣は派遣料金＋転換時の紹介手数料という
                                構成です。具体的な料金は職務内容・雇用形態により異なるため、まずはお見積りをご案内します。
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    "求職者からは一切費用をいただきません（職業安定法）",
                                    "職業紹介は成功報酬型",
                                    "在留資格の変更・更新費用の負担者は募集条件で取り決め",
                                    "業務内容と専門性の適合確認をサポート",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                                        <span className="text-ink-muted text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
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
                            御社の職務、技人国で設計できます。
                        </h2>
                        <p className="text-white/80 mb-8 max-w-xl mx-auto">
                            求人票の職種名ではなく、実際の業務内容から一緒に設計します。まずはご相談ください。
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
