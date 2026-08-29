"use client";

import { motion } from "framer-motion";
import { Building2, ArrowLeftRight, Users2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// 3つの受け入れ形態を「雇用主が誰か」を軸に比較する図。
// Comparison of the 3 hiring arrangements, centered on "who is the employer".
// Perbandingan 3 bentuk penerimaan, berpusat pada "siapa pemberi kerja".
//
// 本文カラム内にも全幅にも置かれるため、ビューポート幅ではなく
// 自身のコンテナ幅で段組みを切り替える（container query）。
type EmploymentType = {
    icon: LucideIcon;
    name: string;
    employer: string;
    employerNote: string;
    period: string;
    points: string[];
    highlight?: boolean;
};

const types: EmploymentType[] = [
    {
        icon: Users2,
        name: "有料職業紹介",
        employer: "御社",
        employerNote: "入社日から直接雇用",
        period: "期間の定めなし（通常の雇用契約）",
        points: [
            "マッチングが成立した時点で紹介手数料が発生",
            "求職者からは一切費用をいただきません",
            "入社後の労務管理は御社が担当",
        ],
    },
    {
        icon: Building2,
        name: "労働者派遣",
        employer: "スグクル",
        employerNote: "派遣期間中の雇用主は当社",
        period: "派遣契約で定めた期間",
        points: [
            "社会保険・給与の支払いは当社が担当",
            "指揮命令は御社が行う",
            "特定技能は農業・漁業のみ派遣可（他分野は対象外）",
        ],
    },
    {
        icon: ArrowLeftRight,
        name: "紹介予定派遣",
        employer: "スグクル → 御社",
        employerNote: "派遣期間後、双方合意で切り替え",
        period: "最長6ヶ月（法定上限）",
        points: [
            "実際に働きぶりを見てから直接雇用を判断できる",
            "転換後に試用期間は設けられません",
            "合わなければ転換せず終了も可能",
        ],
        highlight: true,
    },
];

export function EmploymentTypeCompare() {
    return (
        <div className="@container">
            <div className="grid grid-cols-1 @2xl:grid-cols-3 gap-4">
                {types.map((type, i) => (
                    <motion.div
                        key={type.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className={`rounded-2xl p-6 flex flex-col ${
                            type.highlight
                                ? "bg-accent text-white ring-2 ring-accent"
                                : "bg-white border border-gray-100"
                        }`}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                    type.highlight ? "bg-white/15" : "bg-accent-soft"
                                }`}
                            >
                                <type.icon className={`w-5 h-5 ${type.highlight ? "text-white" : "text-accent"}`} />
                            </div>
                            <h3 className="font-bold text-lg">{type.name}</h3>
                        </div>

                        <div
                            className={`rounded-xl p-4 mb-4 ${
                                type.highlight ? "bg-white/10" : "bg-gray-50"
                            }`}
                        >
                            <p className={`text-xs mb-1 ${type.highlight ? "text-white/70" : "text-gray-500"}`}>
                                雇用主
                            </p>
                            <p className="font-bold text-xl mb-1">{type.employer}</p>
                            <p className={`text-xs ${type.highlight ? "text-white/70" : "text-gray-500"}`}>
                                {type.employerNote}
                            </p>
                        </div>

                        <p className={`text-sm font-medium mb-3 ${type.highlight ? "text-white/90" : "text-ink"}`}>
                            期間：{type.period}
                        </p>

                        <ul className="space-y-2 mt-auto">
                            {type.points.map((point) => (
                                <li
                                    key={point}
                                    className={`text-sm leading-relaxed flex gap-2 ${
                                        type.highlight ? "text-white/85" : "text-gray-600"
                                    }`}
                                >
                                    <span className={type.highlight ? "text-white" : "text-accent"}>•</span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
