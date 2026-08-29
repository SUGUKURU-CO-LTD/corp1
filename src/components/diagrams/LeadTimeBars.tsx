"use client";

import { motion } from "framer-motion";

// 3つの受け入れ方の「稼働開始までの目安」を横棒で比較する図。
// Horizontal bars comparing the rough lead time to start for each hiring arrangement.
// Batang horizontal yang membandingkan perkiraan waktu mulai kerja untuk tiap bentuk.
//
// 数値は目安であり、個別の在留審査・書類準備の状況により変動する。

type LeadTimeRow = {
    label: string;
    sublabel: string;
    // 0-100のバー幅（相対表示。実日数の厳密な線形比較ではない）
    width: number;
    note: string;
};

const rows: LeadTimeRow[] = [
    { label: "有料職業紹介", sublabel: "直接雇用", width: 30, note: "最短1ヶ月台" },
    { label: "労働者派遣", sublabel: "紹介予定派遣", width: 32, note: "派遣開始まで約1ヶ月" },
    { label: "　└ 直接雇用へ転換", sublabel: "見極め期間を含む", width: 100, note: "3〜6ヶ月で転換判断" },
];

export function LeadTimeBars() {
    return (
        <div className="@container">
            <div className="space-y-4">
                {rows.map((row, i) => (
                    <motion.div
                        key={row.label}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                        <div className="flex items-baseline justify-between mb-1.5 gap-2">
                            <div>
                                <span className="text-sm font-bold text-ink whitespace-pre">{row.label}</span>
                                <span className="text-xs text-gray-500 ml-2">{row.sublabel}</span>
                            </div>
                            <span className="text-xs font-medium text-accent-strong flex-shrink-0">{row.note}</span>
                        </div>
                        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${row.width}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                                className="h-full rounded-full bg-accent"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
            <p className="text-xs text-gray-400 mt-4">
                ※ 目安であり、個別の在留審査・書類準備の状況により変動します。
            </p>
        </div>
    );
}
