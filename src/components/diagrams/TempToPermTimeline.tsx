"use client";

import { motion } from "framer-motion";
import { Handshake, Briefcase, ScaleIcon, CircleCheck, MessageCircle } from "lucide-react";

// 紹介予定派遣の6ヶ月フロー。雇用主の切替点を色で表現する。
// The temp-to-perm 6-month flow, with the employer handover shown by color.
// Alur 6 bulan penempatan-melalui-haken; titik peralihan pemberi kerja ditandai warna.

const steps = [
    {
        icon: Handshake,
        title: "派遣開始",
        employer: "雇用主：スグクル",
        description: "事前面接・履歴書の確認も適法（紹介予定派遣の特例）",
    },
    {
        icon: Briefcase,
        title: "就業期間",
        employer: "雇用主：スグクル",
        description: "最長6ヶ月（法定上限）。実際の働きぶりを見極める期間",
    },
    {
        icon: ScaleIcon,
        title: "双方で判断",
        employer: "—",
        description: "御社・ご本人の合意により、転換するかどうかを決定",
    },
];

const outcomes = [
    {
        icon: CircleCheck,
        title: "直接雇用へ転換",
        employer: "雇用主：御社",
        description: "転換後に試用期間は設けられません",
        positive: true,
    },
    {
        icon: MessageCircle,
        title: "転換せず終了",
        employer: "—",
        description: "求めに応じ、理由を書面等で明示します（法令上の義務）",
        positive: false,
    },
];

export function TempToPermTimeline() {
    return (
        <div className="@container">
            {/* Main flow: 3 steps */}
            <div className="grid grid-cols-1 @2xl:grid-cols-3 gap-3 mb-3">
                {steps.map((step, i) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="relative bg-white rounded-xl border border-line p-5"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-9 h-9 rounded-lg bg-accent-soft flex items-center justify-center flex-shrink-0">
                                <step.icon className="w-4.5 h-4.5 text-accent" />
                            </div>
                            <h4 className="font-bold text-ink text-sm">{step.title}</h4>
                        </div>
                        <p className="text-xs font-medium text-accent-strong mb-1.5">{step.employer}</p>
                        <p className="text-xs text-ink-muted leading-relaxed">{step.description}</p>
                        {i < steps.length - 1 && (
                            <div className="hidden @2xl:block absolute top-1/2 -right-3 -translate-y-1/2 w-3 h-3 border-t-2 border-r-2 border-line rotate-45" />
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Branch: two outcomes */}
            <div className="grid grid-cols-1 @lg:grid-cols-2 gap-3">
                {outcomes.map((outcome, i) => (
                    <motion.div
                        key={outcome.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                        className={`rounded-xl p-5 ${
                            outcome.positive ? "bg-accent text-white" : "bg-canvas border border-line"
                        }`}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div
                                className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                    outcome.positive ? "bg-white/15" : "bg-white"
                                }`}
                            >
                                <outcome.icon
                                    className={`w-4.5 h-4.5 ${outcome.positive ? "text-white" : "text-ink-muted"}`}
                                />
                            </div>
                            <h4 className="font-bold text-sm">{outcome.title}</h4>
                        </div>
                        <p
                            className={`text-xs font-medium mb-1.5 ${
                                outcome.positive ? "text-white/85" : "text-ink-muted"
                            }`}
                        >
                            {outcome.employer}
                        </p>
                        <p className={`text-xs leading-relaxed ${outcome.positive ? "text-white/85" : "text-ink-muted"}`}>
                            {outcome.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
