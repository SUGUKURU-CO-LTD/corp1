import type { ReactNode } from "react";
import SitePhoto from "@/components/ui/site-photo";

type PhotoPageHeroProps = {
    photoId: string;
    children: ReactNode;
    className?: string;
    overlayClassName?: string;
    minHeightClassName?: string;
};

/**
 * 実写背景＋暗いオーバーレイのページヒーロー。文字のコントラストを確保する。
 * Page hero with a real photo and dark overlay to keep text contrast.
 * Hero halaman dengan foto asli dan overlay gelap agar teks tetap terbaca.
 */
export default function PhotoPageHero({
    photoId,
    children,
    className = "section text-white relative overflow-hidden",
    overlayClassName = "absolute inset-0 bg-gradient-to-r from-accent-dark via-accent-dark/88 to-accent-dark/55",
    minHeightClassName,
}: PhotoPageHeroProps) {
    return (
        <section className={`${className} ${minHeightClassName ?? ""}`.trim()}>
            <div className="absolute inset-0">
                <SitePhoto
                    id={photoId}
                    className="block h-full w-full"
                    imgClassName="h-full w-full object-cover"
                    sizes="100vw"
                    priority
                />
            </div>
            <div className={overlayClassName} />
            <div className="container mx-auto relative z-10">{children}</div>
        </section>
    );
}
