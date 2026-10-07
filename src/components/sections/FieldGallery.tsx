"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SitePhoto from "@/components/ui/site-photo";
import {
    cropLabel,
    galleryPhotos,
    regionLabel,
    type PhotoCrop,
    type PhotoRegion,
    type SitePhoto as SitePhotoRecord,
} from "@/lib/photos";

type RegionFilter = "all" | PhotoRegion;
type CropFilter = "all" | PhotoCrop;

const REGION_OPTIONS: { id: RegionFilter; label: string }[] = [
    { id: "all", label: "すべて" },
    { id: "kagoshima", label: "鹿児島" },
    { id: "ehime", label: "愛媛" },
    { id: "aichi", label: "愛知" },
];

const CROP_OPTIONS: { id: CropFilter; label: string }[] = [
    { id: "all", label: "すべて" },
    { id: "tea", label: "茶" },
    { id: "vegetable", label: "野菜" },
    { id: "citrus", label: "柑橘" },
    { id: "livestock", label: "畜産" },
    { id: "logistics", label: "集出荷" },
];

/**
 * 現場写真を地域・作物で絞り込むギャラリー
 * Field gallery filterable by region and crop
 * Galeri lapangan yang dapat disaring menurut wilayah dan tanaman
 */
export default function FieldGallery() {
    const photos = galleryPhotos();
    const [region, setRegion] = useState<RegionFilter>("all");
    const [crop, setCrop] = useState<CropFilter>("all");

    const filtered = useMemo(() => {
        return photos.filter((photo) => {
            const regionOk = region === "all" || photo.region === region;
            const cropOk = crop === "all" || photo.crop === crop;
            return regionOk && cropOk;
        });
    }, [photos, region, crop]);

    return (
        <section className="section bg-canvas">
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                        From the Field
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-ink">現場から</h2>
                    <p className="text-ink-muted text-sm mt-3 max-w-2xl mx-auto">
                        スタッフが実際に働く現場の写真です。キャプションは地域・作物・月のみ。取引先名は掲載しません。
                    </p>
                </div>

                <div className="flex flex-col gap-3 mb-8 md:flex-row md:items-center md:justify-between">
                    <FilterRow
                        label="地域"
                        options={REGION_OPTIONS}
                        value={region}
                        onChange={setRegion}
                    />
                    <FilterRow
                        label="作物"
                        options={CROP_OPTIONS}
                        value={crop}
                        onChange={setCrop}
                    />
                </div>

                {filtered.length === 0 ? (
                    <p className="text-center text-ink-muted text-sm py-12">該当する写真がありません。</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((photo, index) => (
                            <GalleryCard key={photo.id} photo={photo} index={index} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

function FilterRow<T extends string>({
    label,
    options,
    value,
    onChange,
}: {
    label: string;
    options: { id: T; label: string }[];
    value: T;
    onChange: (next: T) => void;
}) {
    return (
        <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-medium text-ink-muted mr-1">{label}</span>
            {options.map((option) => {
                const active = option.id === value;
                return (
                    <button
                        key={option.id}
                        type="button"
                        onClick={() => onChange(option.id)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                            active
                                ? "bg-accent text-white border-accent"
                                : "bg-white text-ink-muted border-line hover:border-accent/40"
                        }`}
                    >
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
}

function GalleryCard({ photo, index }: { photo: SitePhotoRecord; index: number }) {
    return (
        <motion.figure
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className="bg-white rounded-2xl overflow-hidden border border-line shadow-sm"
        >
            <div className="relative h-56 md:h-64 overflow-hidden">
                <SitePhoto
                    id={photo.id}
                    className="block h-full w-full"
                    imgClassName="h-full w-full object-cover"
                    sizes="(min-width: 1024px) 360px, 100vw"
                />
            </div>
            <figcaption className="px-4 py-3 text-sm text-ink">
                <span className="font-medium">{photo.caption}</span>
                <span className="text-ink-muted text-xs ml-2">
                    {regionLabel(photo.region)} / {cropLabel(photo.crop)}
                </span>
            </figcaption>
        </motion.figure>
    );
}
