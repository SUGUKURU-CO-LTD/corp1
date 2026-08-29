"use client";

import { useEffect, useState } from "react";
import {
    ShieldAlert,
    Compass,
    Users,
    Sprout,
    Beef,
    Loader2,
    Trophy,
} from "lucide-react";

// チーム限定の農業インテリジェンス・ダッシュボード（社内資料）。
// Team-only agriculture intelligence dashboard (internal).
// Dasbor intelijen pertanian khusus tim (internal).

type Breakdown = {
    automationDifficulty: number;
    valueDensity: number;
    seasonConcentration: number;
    skillAcquisition: number;
    laborShortage: number;
};

type SswEntry = {
    crop: string;
    score: number;
    grade: string;
    harvestMonths: string;
    tasks: string[];
    note: string;
    caution: string;
    regions: string[];
    breakdown: Breakdown;
};

type LivestockCategory = {
    name: string;
    score: number;
    scale: string;
    farms: string;
    shortage: string;
    tasks: string[];
    note: string;
};

type IntelData = {
    meta: { title: string; provider: string; license: string; accessed: string; prefecture: string; note: string };
    labor: {
        shortageLevel: string;
        summary: string;
        stats: {
            population2020: number;
            population2015: number;
            changePct: number;
            coreFarmers2020: number;
            averageAge: number;
            over65Pct: number;
            farmEntities: number;
        };
        trend: string;
        source: string;
    };
    cropProfile: {
        crops: { rank: number; name: string; harvestMonths: string; peak: string; intensity: string; marketNote: string }[];
        peakMonths: string;
        note: string;
        source: string;
    };
    sswCompass: SswEntry[];
    sswCompassSource: string;
    livestock: {
        summary: string;
        categories: LivestockCategory[];
        winPattern: string[];
        source: string;
    };
};

type ApiResponse = { dataMode: "live" | "snapshot"; fetchedAt: string | null; data: IntelData };

const breakdownLabels: { key: keyof Breakdown; label: string }[] = [
    { key: "automationDifficulty", label: "自動化困難度" },
    { key: "valueDensity", label: "価値密度" },
    { key: "seasonConcentration", label: "季節集中度" },
    { key: "skillAcquisition", label: "技能習得速度" },
    { key: "laborShortage", label: "労働力不足度" },
];

function ScoreRing({ score }: { score: number }) {
    const pct = Math.min(100, Math.max(0, score));
    return (
        <div
            className="relative w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
            style={{
                background: `conic-gradient(#1B5E38 ${pct}%, #E5E7EB ${pct}%)`,
            }}
        >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <span className="text-sm font-bold text-[#1B5E38]">{score}</span>
            </div>
        </div>
    );
}

export default function TeamIntelPage() {
    const [res, setRes] = useState<ApiResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch("/api/team/agri")
            .then(async (r) => {
                if (!r.ok) throw new Error(`API ${r.status}`);
                return r.json();
            })
            .then((json: ApiResponse) => setRes(json))
            .catch((e) => setError(String(e)));
    }, []);

    if (error) {
        return (
            <div className="pt-28 pb-20 container mx-auto px-6">
                <p className="text-red-600">データ取得に失敗しました: {error}</p>
            </div>
        );
    }

    if (!res) {
        return (
            <div className="pt-28 pb-20 container mx-auto px-6 flex items-center gap-3 text-ink-muted">
                <Loader2 className="w-5 h-5 animate-spin" />
                インテリジェンスを読み込み中…
            </div>
        );
    }

    const d = res.data;

    return (
        <div className="pt-24 pb-20 bg-[#FAFAF7] min-h-screen">
            <div className="container mx-auto px-6">
                {/* 社内限定バナー */}
                <div className="rounded-xl border border-amber-300/50 bg-amber-50 p-4 flex items-start gap-3 mb-8">
                    <ShieldAlert className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-ink">
                        <span className="font-bold">チーム限定 / 社内資料</span>
                        ：このページは Google Cloud IAP で保護されています。一般公開・外部共有は禁止です。
                    </div>
                </div>

                {/* ヘッダ */}
                <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-[#1A1A1A]">
                            {d.meta.title}
                        </h1>
                        <p className="text-ink-muted text-sm mt-1">
                            {d.meta.prefecture}｜提供: {d.meta.provider}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${res.dataMode === "live" ? "bg-[#1B5E38] text-white" : "bg-gray-200 text-ink"}`}
                        >
                            {res.dataMode === "live" ? "ライブ" : `スナップショット（${res.fetchedAt ?? "—"}取得）`}
                        </span>
                    </div>
                </div>

                {/* 労働力統計 */}
                <section className="bg-white rounded-2xl border border-line shadow-sm p-6 md:p-8 mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Users className="w-5 h-5 text-[#1B5E38]" />
                        <h2 className="text-lg font-bold text-[#1A1A1A]">農業労働力（{d.meta.prefecture}）</h2>
                        <span className="ml-2 px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">
                            不足度: {d.labor.shortageLevel}
                        </span>
                    </div>
                    <p className="text-ink-muted text-sm leading-relaxed mb-6">{d.labor.summary}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Stat label="農業就業人口 (2020)" value={`${d.labor.stats.population2020.toLocaleString()}人`} sub={`2015: ${d.labor.stats.population2015.toLocaleString()}人`} />
                        <Stat label="5年間変化" value={`${d.labor.stats.changePct}%`} sub="九州内で最小の減少率" />
                        <Stat label="平均年齢" value={`${d.labor.stats.averageAge}歳`} sub={`65歳以上 ${d.labor.stats.over65Pct}%`} />
                        <Stat label="農業経営体数" value={`${d.labor.stats.farmEntities.toLocaleString()}`} sub="経営体" />
                    </div>
                    <p className="text-xs text-ink-muted mt-5">出典: {d.labor.source}</p>
                </section>

                {/* SSWコンパス */}
                <section className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Compass className="w-5 h-5 text-[#1B5E38]" />
                        <h2 className="text-lg font-bold text-[#1A1A1A]">SSW派遣適性コンパス（作物）</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {d.sswCompass.map((c) => (
                            <div key={c.crop} className="bg-white rounded-2xl border border-line shadow-sm p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <ScoreRing score={c.score} />
                                    <div>
                                        <h3 className="font-bold text-[#1A1A1A]">{c.crop}</h3>
                                        <p className="text-sm text-[#1B5E38] font-medium">{c.grade}</p>
                                        <p className="text-xs text-ink-muted mt-0.5">収穫: {c.harvestMonths}</p>
                                    </div>
                                </div>
                                <div className="space-y-2 mb-4">
                                    {breakdownLabels.map((b) => (
                                        <div key={b.key} className="flex items-center gap-3">
                                            <span className="text-xs text-ink-muted w-24 flex-shrink-0">{b.label}</span>
                                            <div className="flex-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                                                <div
                                                    className="h-full rounded-full bg-[#1B5E38]"
                                                    style={{ width: `${(c.breakdown[b.key] / 20) * 100}%` }}
                                                />
                                            </div>
                                            <span className="text-xs text-ink-muted w-10 text-right">{c.breakdown[b.key]}/20</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                    {c.tasks.map((t) => (
                                        <span key={t} className="px-2 py-1 rounded-md bg-[#1B5E38]/8 text-[#1B5E38] text-xs">{t}</span>
                                    ))}
                                </div>
                                <p className="text-sm text-ink-muted leading-relaxed">{c.note}</p>
                                <p className="text-xs text-amber-600 mt-2">注意: {c.caution}</p>
                                <p className="text-xs text-ink-muted mt-2">有望産地: {c.regions.join(" / ")}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-ink-muted mt-3">出典: {d.sswCompassSource}</p>
                </section>

                {/* 作物プロファイル / 収穫リレー */}
                <section className="bg-white rounded-2xl border border-line shadow-sm p-6 md:p-8 mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Sprout className="w-5 h-5 text-[#1B5E38]" />
                        <h2 className="text-lg font-bold text-[#1A1A1A]">主要作物・収穫リレー</h2>
                        <span className="ml-2 text-xs text-ink-muted">労働ピーク: {d.cropProfile.peakMonths}</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="text-left text-ink-muted border-b border-line">
                                    <th className="py-2 pr-4 font-medium">作物</th>
                                    <th className="py-2 pr-4 font-medium">収穫月</th>
                                    <th className="py-2 pr-4 font-medium">ピーク</th>
                                    <th className="py-2 pr-4 font-medium">労働強度</th>
                                    <th className="py-2 font-medium">市場メモ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {d.cropProfile.crops.map((crop) => (
                                    <tr key={crop.name} className="border-b border-gray-50 last:border-0 align-top">
                                        <td className="py-3 pr-4 font-medium text-[#1A1A1A]">{crop.name}</td>
                                        <td className="py-3 pr-4 text-ink-muted">{crop.harvestMonths}</td>
                                        <td className="py-3 pr-4 text-ink-muted">{crop.peak}</td>
                                        <td className="py-3 pr-4 text-ink-muted">{crop.intensity}</td>
                                        <td className="py-3 text-ink-muted text-xs">{crop.marketNote}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-ink-muted mt-4">{d.cropProfile.note}</p>
                    <p className="text-xs text-ink-muted mt-2">出典: {d.cropProfile.source}</p>
                </section>

                {/* 畜産統計 */}
                <section className="bg-white rounded-2xl border border-line shadow-sm p-6 md:p-8 mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <Beef className="w-5 h-5 text-[#1B5E38]" />
                        <h2 className="text-lg font-bold text-[#1A1A1A]">畜産SSW適性</h2>
                    </div>
                    <p className="text-ink-muted text-sm leading-relaxed mb-6">{d.livestock.summary}</p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        {d.livestock.categories.map((cat) => (
                            <div key={cat.name} className="rounded-xl border border-line bg-[#FAFAF7] p-5">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold text-[#1A1A1A]">{cat.name}</h3>
                                    <span className="px-2 py-0.5 rounded-full bg-[#1B5E38] text-white text-xs font-bold">{cat.score}/100</span>
                                </div>
                                <p className="text-xs text-ink-muted">{cat.scale}</p>
                                <p className="text-xs text-ink-muted">{cat.farms}｜人手不足: {cat.shortage}</p>
                                <div className="flex flex-wrap gap-1.5 my-2">
                                    {cat.tasks.map((t) => (
                                        <span key={t} className="px-2 py-0.5 rounded bg-white border border-line text-ink-muted text-xs">{t}</span>
                                    ))}
                                </div>
                                <p className="text-sm text-ink-muted leading-relaxed">{cat.note}</p>
                            </div>
                        ))}
                    </div>
                    <div className="rounded-xl border border-[#1B5E38]/20 bg-[#1B5E38]/[0.04] p-5">
                        <div className="flex items-center gap-2 mb-3">
                            <Trophy className="w-4 h-4 text-[#1B5E38]" />
                            <h3 className="font-bold text-[#1B5E38] text-sm">勝ちパターン</h3>
                        </div>
                        <ul className="space-y-2">
                            {d.livestock.winPattern.map((w) => (
                                <li key={w} className="text-sm text-ink flex items-start gap-2">
                                    <span className="text-[#1B5E38] mt-0.5">▸</span>
                                    {w}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="text-xs text-ink-muted mt-4">出典: {d.livestock.source}</p>
                </section>

                <p className="text-xs text-ink-muted">{d.meta.note}</p>
            </div>
        </div>
    );
}

function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
    return (
        <div className="rounded-xl border border-line bg-[#FAFAF7] p-4">
            <p className="text-xs text-ink-muted">{label}</p>
            <p className="text-xl font-bold text-[#1A1A1A] mt-1">{value}</p>
            {sub && <p className="text-xs text-ink-muted mt-0.5">{sub}</p>}
        </div>
    );
}
