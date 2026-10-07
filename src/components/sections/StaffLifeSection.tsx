"use client";

import { motion } from "framer-motion";
import SitePhoto from "@/components/ui/site-photo";
import { lifePhotos } from "@/lib/photos";

type StaffLifeSectionProps = {
    locale: "ja" | "id";
};

const COPY = {
    ja: {
        kicker: "Staff Life",
        title: "スタッフの暮らし",
        lead: "通勤、移動の合間、休日の風景。現場の仕事だけでなく、日本での暮らしの一端です。",
        captions: {
            "life-1": "現場へ向かう移動",
            "life-2": "移動の途中で食べる弁当",
            "life-3": "休日の散歩",
            "life-4": "到着の日",
        } as Record<string, string>,
    },
    id: {
        kicker: "Kehidupan Staf",
        title: "Kehidupan staf di Jepang",
        lead: "Perjalanan ke lapangan, makan di perjalanan, dan hari libur. Bukan hanya pekerjaan, tetapi juga kehidupan di Jepang.",
        captions: {
            "life-1": "Perjalanan ke lapangan",
            "life-2": "Makan bekal di perjalanan",
            "life-3": "Jalan-jalan di hari libur",
            "life-4": "Hari kedatangan",
        } as Record<string, string>,
    },
};

/**
 * 通勤・寮・休日の実写セクション（/careers は日本語、/kerja はインドネシア語）
 * Staff-life photos for commute, meals, and days off (/careers Japanese, /kerja Indonesian)
 * Bagian kehidupan staf untuk perjalanan, makan, dan hari libur (/careers Jepang, /kerja Indonesia)
 */
export default function StaffLifeSection({ locale }: StaffLifeSectionProps) {
    const copy = COPY[locale];
    const photos = lifePhotos();

    return (
        <section className="section bg-canvas">
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                        {copy.kicker}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-ink">{copy.title}</h2>
                    <p className="text-ink-muted text-sm mt-3 max-w-2xl mx-auto">{copy.lead}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {photos.map((photo, index) => (
                        <motion.figure
                            key={photo.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            className="bg-white rounded-2xl overflow-hidden border border-line shadow-sm"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <SitePhoto
                                    id={photo.id}
                                    className="block h-full w-full"
                                    imgClassName="h-full w-full object-cover"
                                    sizes="(min-width: 1024px) 280px, 50vw"
                                />
                            </div>
                            <figcaption className="px-4 py-3 text-sm text-ink">
                                {copy.captions[photo.id] ?? photo.caption}
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
