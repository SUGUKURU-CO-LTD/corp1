import { getPhoto, photoSrc, type PhotoSize, type SitePhoto } from "@/lib/photos";

type SitePhotoProps = {
    id: string;
    className?: string;
    imgClassName?: string;
    sizes?: string;
    priority?: boolean;
    objectPosition?: string;
    alt?: string;
};

const SRCSET_SIZES: PhotoSize[] = [800, 1600, 2400];

/**
 * 3サイズの srcset を出す実写部品（next/image は unoptimized のため picture を使う）
 * Real-photo component that emits a 3-size srcset (picture, because next/image is unoptimized)
 * Komponen foto asli dengan srcset 3 ukuran (picture, karena next/image unoptimized)
 */
export default function SitePhoto({
    id,
    className,
    imgClassName,
    sizes = "(min-width: 1024px) 800px, 100vw",
    priority = false,
    objectPosition,
    alt,
}: SitePhotoProps) {
    const photo: SitePhoto = getPhoto(id);
    const webpSrcSet = SRCSET_SIZES.map((size) => `${photoSrc(id, size, "webp")} ${size}w`).join(", ");
    const jpgSrcSet = SRCSET_SIZES.map((size) => `${photoSrc(id, size, "jpg")} ${size}w`).join(", ");
    const position = objectPosition ?? photo.objectPosition ?? "center";

    return (
        <picture className={className}>
            <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
            <source type="image/jpeg" srcSet={jpgSrcSet} sizes={sizes} />
            <img
                src={photoSrc(id, 1600, "jpg")}
                alt={alt ?? photo.alt}
                className={imgClassName ?? "h-full w-full object-cover"}
                style={{ objectPosition: position }}
                loading={priority ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={priority ? "high" : "auto"}
            />
        </picture>
    );
}
