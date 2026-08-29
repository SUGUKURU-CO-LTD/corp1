import type { Metadata } from "next";
import Link from "next/link";
import {
    ArrowRight,
    Phone,
    Plane,
    RefreshCw,
    CalendarClock,
    Check,
    AlertTriangle,
    FileText,
} from "lucide-react";

// 制度ガイド＆必要書類ページ。一般的な制度知識をわかりやすく図解する。
// Guide & required-documents page. Explains the system clearly (general guidance).
// Halaman panduan & dokumen. Menjelaskan sistem dengan jelas (panduan umum).

export const metadata: Metadata = {
    title: "制度ガイド・必要書類 | スグクル株式会社",
    description:
        "特定技能（農業）の受入れに関する制度の基本、申請種別、試験免除の考え方、重要な期限、必要書類チェックリストをわかりやすくご案内します。",
    alternates: { canonical: "https://sugu-kuru.co.jp/guide" },
};

// 申請の3種別
const applicationTypes = [
    {
        icon: Plane,
        title: "在留資格認定証明書交付申請",
        when: "海外から新規で入国する場合",
        desc: "まだ日本にいない人材を、海外から呼び寄せて受け入れるときの申請です。",
    },
    {
        icon: RefreshCw,
        title: "在留資格変更許可申請",
        when: "国内で在留資格を変更する場合",
        desc: "技能実習などから特定技能へ、日本国内で在留資格を切り替えるときの申請です。",
    },
    {
        icon: CalendarClock,
        title: "在留期間更新許可申請",
        when: "同じ在留資格で期間を延長する場合",
        desc: "すでに特定技能で在留している人材の在留期間を延長するときの申請です。",
    },
];

// 受入れの流れ
const flow = [
    { step: 1, title: "お問い合わせ・ヒアリング", desc: "課題・必要人数・時期を確認" },
    { step: 2, title: "人材のご提案・マッチング", desc: "経験・資格を踏まえてご提案" },
    { step: 3, title: "契約・受入れ準備", desc: "条件合意、住居・手続きの手配" },
    { step: 4, title: "申請・入国/変更", desc: "在留資格の手続きを支援" },
    { step: 5, title: "就業開始・定着支援", desc: "多言語サポートで継続支援" },
];

// 試験免除の早見
const examRules = [
    { case: "技能実習2号・3号を同一分野で良好に修了", result: "技能試験・日本語試験が免除される場合があります", ok: true },
    { case: "技能実習1号のみ", result: "免除なし（技能・日本語試験の合格が必要）", ok: false },
];

// 重要な期限
const deadlines = [
    { label: "随時届出", value: "事由の発生から14日以内", note: "雇用契約の変更等" },
    { label: "定期届出", value: "毎年4/1〜5/31", note: "受入れ状況の報告" },
    { label: "更新申請", value: "在留期限の3ヶ月前から可能", note: "余裕をもって準備" },
    { label: "通算在留期間", value: "特定技能1号は通算5年が上限", note: "計画的な受入れを" },
];

// 必要書類チェックリスト
const companyDocs = [
    "会社の登記事項証明書",
    "直近の決算書類",
    "労働保険・社会保険関係の書類",
    "雇用条件書・雇用契約書（候補者ごと）",
    "受入れに関する各種誓約・支援体制の書類",
];

const workerDocs = [
    "パスポート・在留カード（該当者）",
    "技能・日本語試験の合格証明、または技能実習修了の証明",
    "履歴・職務経歴に関する書類",
    "証明写真 など",
];

export default function GuidePage() {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="bg-accent-dark text-white">
                <div className="container mx-auto px-6 py-20 md:py-24">
                    <div className="max-w-3xl">
                        <span className="text-accent-light text-sm font-medium tracking-wider uppercase">
                            Guide
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
                            制度ガイド・必要書類
                        </h1>
                        <p className="text-white/80 leading-relaxed">
                            特定技能（農業）の受入れで「気になること・準備すること」を、
                            制度の基本からわかりやすくまとめました。手続きの実務はスグクルが支援しますので、
                            まずは全体像をつかんでいただければ大丈夫です。
                        </p>
                    </div>
                </div>
            </section>

            {/* 申請の3種別 */}
            <section className="bg-canvas">
                <div className="container mx-auto px-6 py-24 md:py-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-ink text-center mb-3">
                        申請は大きく3種類
                    </h2>
                    <p className="text-center text-ink-muted text-sm mb-12">
                        受け入れる人材の状況によって、必要な申請が変わります。
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {applicationTypes.map((t) => (
                            <div key={t.title} className="bg-white rounded-2xl border border-line shadow-sm p-7">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                                    <t.icon className="w-6 h-6 text-accent" />
                                </div>
                                <p className="text-xs text-accent font-medium mb-1">{t.when}</p>
                                <h3 className="font-bold text-ink mb-2 text-[15px] leading-snug">{t.title}</h3>
                                <p className="text-ink-muted text-sm leading-relaxed">{t.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 受入れの流れ（図解） */}
            <section className="bg-white">
                <div className="container mx-auto px-6 py-24 md:py-32">
                    <h2 className="text-2xl md:text-3xl font-bold text-ink text-center mb-12">
                        受入れの流れ
                    </h2>
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">
                        {flow.map((item, i) => (
                            <div key={item.step} className="relative">
                                <div className="h-full rounded-xl border border-line bg-canvas p-5 text-center">
                                    <div className="w-9 h-9 mx-auto mb-3 rounded-full bg-accent text-white font-bold flex items-center justify-center">
                                        {item.step}
                                    </div>
                                    <h3 className="font-bold text-ink text-sm mb-1">{item.title}</h3>
                                    <p className="text-ink-muted text-xs leading-relaxed">{item.desc}</p>
                                </div>
                                {i < flow.length - 1 && (
                                    <div className="hidden md:flex absolute top-1/2 -right-2 -translate-y-1/2 text-accent z-10">
                                        →
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 試験免除の早見 */}
            <section className="bg-canvas">
                <div className="container mx-auto px-6 py-24 md:py-32">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-ink text-center mb-3">
                            試験免除の考え方（早見）
                        </h2>
                        <p className="text-center text-ink-muted text-sm mb-12">
                            技能実習の経歴により、試験が免除される場合があります。
                        </p>
                        <div className="space-y-4">
                            {examRules.map((r) => (
                                <div
                                    key={r.case}
                                    className={`rounded-xl border p-5 flex items-start gap-4 ${r.ok ? "border-accent/25 bg-accent/[0.04]" : "border-amber-300/40 bg-amber-50"}`}
                                >
                                    <div className={`mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${r.ok ? "bg-accent" : "bg-amber-500"}`}>
                                        {r.ok ? <Check className="w-4 h-4 text-white" /> : <AlertTriangle className="w-4 h-4 text-white" />}
                                    </div>
                                    <div>
                                        <p className="font-bold text-ink text-sm">{r.case}</p>
                                        <p className="text-ink-muted text-sm mt-1">{r.result}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 重要な期限 */}
            <section className="bg-white">
                <div className="container mx-auto px-6 py-24 md:py-32">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-ink text-center mb-12">
                            知っておきたい重要な期限
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {deadlines.map((d) => (
                                <div key={d.label} className="rounded-xl border border-line bg-canvas p-5">
                                    <p className="text-xs text-accent font-medium mb-1">{d.label}</p>
                                    <p className="font-bold text-ink">{d.value}</p>
                                    <p className="text-ink-muted text-xs mt-1">{d.note}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 必要書類チェックリスト */}
            <section className="bg-canvas">
                <div className="container mx-auto px-6 py-24 md:py-32">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-ink text-center mb-3">
                            必要書類チェックリスト
                        </h2>
                        <p className="text-center text-ink-muted text-sm mb-12">
                            状況により異なります。多くはスグクルが作成・取得を支援します。
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl border border-line shadow-sm p-7">
                                <h3 className="font-bold text-ink mb-4 flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-accent" />
                                    受入企業側
                                </h3>
                                <ul className="space-y-3">
                                    {companyDocs.map((d) => (
                                        <li key={d} className="flex items-start gap-2 text-ink text-sm">
                                            <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white rounded-2xl border border-line shadow-sm p-7">
                                <h3 className="font-bold text-ink mb-4 flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-accent" />
                                    候補者側
                                </h3>
                                <ul className="space-y-3">
                                    {workerDocs.map((d) => (
                                        <li key={d} className="flex items-start gap-2 text-ink text-sm">
                                            <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 注意書き（誇張しない・正確性の担保） */}
            <section className="bg-white">
                <div className="container mx-auto px-6 py-16 md:py-20">
                    <div className="max-w-4xl mx-auto rounded-xl border border-amber-300/40 bg-amber-50 p-5 flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-ink leading-relaxed">
                            本ページは一般的な制度の概要をわかりやすくまとめたものです。
                            制度・要件・必要書類は変更される場合があり、個別事情により取り扱いが異なります。
                            最新かつ正確な内容は出入国在留管理庁の公表情報をご確認いただくか、スグクルへお問い合わせください。
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-accent">
                <div className="container mx-auto px-6 py-20 md:py-24 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        手続きの不安は、まるごとお任せください
                    </h2>
                    <p className="text-white/80 mb-8 max-w-xl mx-auto">
                        複雑な在留資格や書類の準備は、グループ内の体制と連携して支援します。
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact" className="btn bg-white text-accent hover:bg-gray-100">
                            無料で相談する
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="tel:0995-73-9939"
                            className="btn bg-transparent border-2 border-white/50 text-white hover:bg-white/10"
                        >
                            <Phone className="w-5 h-5" />
                            0995-73-9939
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
