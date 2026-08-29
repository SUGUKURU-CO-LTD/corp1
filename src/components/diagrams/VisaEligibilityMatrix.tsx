"use client";

import { motion } from "framer-motion";
import { Check, X, AlertTriangle } from "lucide-react";

// 在留資格 × 受け入れ形態の可否マトリクス。
// Eligibility matrix: residence status × hiring arrangement.
// Matriks kelayakan: status tinggal × bentuk penerimaan.
//
// 特定技能の派遣可否（農業・漁業のみ）が一目でわかることが目的。
// 誤解を招かないよう、可否は職業安定法・労働者派遣法の一般的な扱いに基づく。

type Cell = { status: "ok" | "no" | "partial"; note?: string };

type Row = {
    visa: string;
    sub?: string;
    cells: [Cell, Cell, Cell]; // 紹介 / 派遣 / 紹介予定派遣
};

const rows: Row[] = [
    {
        visa: "特定技能1号",
        sub: "現場の即戦力",
        cells: [
            { status: "ok" },
            { status: "partial", note: "農業・漁業のみ" },
            { status: "no", note: "派遣不可のため対象外" },
        ],
    },
    {
        visa: "特定技能2号",
        sub: "熟練の現場リーダー",
        cells: [
            { status: "ok" },
            { status: "partial", note: "農業・漁業のみ" },
            { status: "no", note: "派遣不可のため対象外" },
        ],
    },
    {
        visa: "技人国",
        sub: "大卒等の専門職",
        cells: [{ status: "ok" }, { status: "ok" }, { status: "ok" }],
    },
    {
        visa: "身分系",
        sub: "永住者・日本人配偶者等",
        cells: [{ status: "ok" }, { status: "ok" }, { status: "ok" }],
    },
];

const columns = ["有料職業紹介", "労働者派遣", "紹介予定派遣"];

function StatusBadge({ cell }: { cell: Cell }) {
    if (cell.status === "ok") {
        return (
            <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-accent-soft flex items-center justify-center">
                    <Check className="w-4 h-4 text-accent" strokeWidth={2.5} />
                </div>
            </div>
        );
    }
    if (cell.status === "partial") {
        return (
            <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-amber-600" strokeWidth={2.5} />
                </div>
                {cell.note && <p className="text-[10px] text-ink-muted text-center leading-tight">{cell.note}</p>}
            </div>
        );
    }
    return (
        <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <X className="w-4 h-4 text-ink-muted" strokeWidth={2.5} />
            </div>
            {cell.note && <p className="text-[10px] text-ink-muted text-center leading-tight">{cell.note}</p>}
        </div>
    );
}

export function VisaEligibilityMatrix() {
    return (
        <div className="@container">
            <div className="overflow-x-auto">
                <div className="min-w-[560px]">
                    {/* Header row */}
                    <div className="grid grid-cols-[1.3fr_1fr_1fr_1fr] gap-2 mb-2">
                        <div />
                        {columns.map((col) => (
                            <div key={col} className="text-center text-xs font-bold text-ink px-2">
                                {col}
                            </div>
                        ))}
                    </div>

                    <div className="space-y-2">
                        {rows.map((row, i) => (
                            <motion.div
                                key={row.visa}
                                initial={{ opacity: 0, x: -12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="grid grid-cols-[1.3fr_1fr_1fr_1fr] gap-2 items-center bg-white rounded-xl border border-line p-3"
                            >
                                <div>
                                    <p className="font-bold text-ink text-sm">{row.visa}</p>
                                    {row.sub && <p className="text-xs text-ink-muted">{row.sub}</p>}
                                </div>
                                {row.cells.map((cell, ci) => (
                                    <div key={ci} className="flex justify-center">
                                        <StatusBadge cell={cell} />
                                    </div>
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-xs text-ink-muted">
                <span className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-accent-soft inline-flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-accent" strokeWidth={3} />
                    </span>
                    可
                </span>
                <span className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-amber-50 inline-flex items-center justify-center">
                        <AlertTriangle className="w-2.5 h-2.5 text-amber-600" strokeWidth={3} />
                    </span>
                    条件付きで可
                </span>
                <span className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-gray-100 inline-flex items-center justify-center">
                        <X className="w-2.5 h-2.5 text-ink-muted" strokeWidth={3} />
                    </span>
                    不可
                </span>
            </div>
        </div>
    );
}
