"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

// 「できる／できない」を左右で対比する図。技人国の職域境界線と、
// 建設の法的線引きの両方で使い回す（内容はpropsで差し替え）。
// A side-by-side "can / cannot" split, reused for both the Gijinkoku
// job-scope boundary and the construction legal boundary (content via props).

type ScopeSplitProps = {
    okTitle: string;
    okItems: string[];
    noTitle: string;
    noItems: string[];
    noSubtext?: string;
};

export function ScopeSplit({ okTitle, okItems, noTitle, noItems, noSubtext }: ScopeSplitProps) {
    return (
        <div className="@container">
            <div className="grid grid-cols-1 @xl:grid-cols-2 gap-6">
                <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl border-2 border-accent bg-accent-soft p-6"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
                        </div>
                        <h4 className="font-bold text-ink">{okTitle}</h4>
                    </div>
                    <ul className="space-y-2.5">
                        {okItems.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-ink/85 leading-relaxed">
                                <span className="text-accent mt-0.5 flex-shrink-0">•</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="rounded-2xl border-2 border-line bg-canvas p-6"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0">
                            <X className="w-4 h-4 text-white" strokeWidth={2.5} />
                        </div>
                        <h4 className="font-bold text-ink">{noTitle}</h4>
                    </div>
                    <ul className="space-y-2.5">
                        {noItems.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-ink-muted leading-relaxed">
                                <span className="text-ink-muted mt-0.5 flex-shrink-0">•</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                    {noSubtext && (
                        <p className="text-xs text-ink-muted mt-4 pt-4 border-t border-line leading-relaxed">
                            {noSubtext}
                        </p>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
