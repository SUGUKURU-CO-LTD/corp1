/**
 * 公式サイト用の実写カタログ。キャプションは地域・作物・月のみ。取引先名は出さない。
 * Real-photo catalog for the corporate site. Captions use region, crop, and month only — no client names.
 * Katalog foto asli untuk situs perusahaan. Keterangan hanya wilayah, tanaman, dan bulan — tanpa nama klien.
 */

export type PhotoRegion = "kagoshima" | "ehime" | "aichi" | "japan";
export type PhotoCrop =
    | "tea"
    | "vegetable"
    | "citrus"
    | "livestock"
    | "logistics"
    | "life"
    | "people";
export type PhotoRole = "hero" | "gallery" | "relay" | "life" | "case" | "service";
export type PhotoSize = 800 | 1600 | 2400;
export type PhotoFormat = "webp" | "jpg";

export interface SitePhoto {
    id: string;
    alt: string;
    caption: string;
    region: PhotoRegion;
    crop: PhotoCrop;
    month?: number;
    roles: PhotoRole[];
    objectPosition?: string;
}

const REGION_LABEL: Record<PhotoRegion, string> = {
    kagoshima: "鹿児島",
    ehime: "愛媛",
    aichi: "愛知",
    japan: "日本",
};

const CROP_LABEL: Record<PhotoCrop, string> = {
    tea: "茶",
    vegetable: "野菜",
    citrus: "柑橘",
    livestock: "畜産",
    logistics: "集出荷",
    life: "暮らし",
    people: "スタッフ",
};

export const MONTH_LABEL: Record<number, string> = {
    1: "1月",
    2: "2月",
    4: "4月",
    5: "5月",
    7: "7月",
    10: "10月",
    11: "11月",
    12: "12月",
};

export const PHOTOS: SitePhoto[] = [
    {
        id: "hero-1",
        alt: "鹿児島の茶園で被覆ネットを張る作業",
        caption: "鹿児島・茶・5月",
        region: "kagoshima",
        crop: "tea",
        month: 5,
        roles: ["hero"],
        objectPosition: "center 40%",
    },
    {
        id: "hero-2",
        alt: "茶園で茶葉を摘むスグクルのスタッフ",
        caption: "鹿児島・茶・5月",
        region: "kagoshima",
        crop: "tea",
        month: 5,
        roles: ["hero"],
        objectPosition: "center 30%",
    },
    {
        id: "case-1",
        alt: "茶園の畝に被覆ネットを広げるスタッフ",
        caption: "鹿児島・茶・5月",
        region: "kagoshima",
        crop: "tea",
        month: 5,
        roles: ["case", "gallery", "relay"],
    },
    {
        id: "case-2",
        alt: "茶園の畝で伸びをするスタッフ",
        caption: "鹿児島・茶・5月",
        region: "kagoshima",
        crop: "tea",
        month: 5,
        roles: ["case", "gallery"],
    },
    {
        id: "case-3",
        alt: "集出荷場でパプリカのコンテナを積む様子",
        caption: "鹿児島・集出荷・10月",
        region: "kagoshima",
        crop: "logistics",
        month: 10,
        roles: ["case", "gallery"],
    },
    {
        id: "service-dispatch-1",
        alt: "茶園で両手を広げて作業するスタッフ",
        caption: "鹿児島・茶・5月",
        region: "kagoshima",
        crop: "tea",
        month: 5,
        roles: ["service", "hero"],
        objectPosition: "center 35%",
    },
    {
        id: "service-contracting-1",
        alt: "ハウスで葉物野菜を収穫するチーム",
        caption: "鹿児島・野菜・4月",
        region: "kagoshima",
        crop: "vegetable",
        month: 4,
        roles: ["service", "hero", "gallery"],
        objectPosition: "center 55%",
    },
    {
        id: "service-placement-1",
        alt: "事務所で打ち合わせをするスタッフ",
        caption: "鹿児島・スタッフ",
        region: "kagoshima",
        crop: "people",
        roles: ["service", "hero"],
        objectPosition: "center 30%",
    },
    {
        id: "careers-1",
        alt: "茶園で親指を立てて笑うスタッフ",
        caption: "鹿児島・茶・5月",
        region: "kagoshima",
        crop: "people",
        month: 5,
        roles: ["hero"],
        objectPosition: "center 28%",
    },
    {
        id: "kerja-1",
        alt: "茶園で笑顔を見せるスタッフ",
        caption: "鹿児島・茶・5月",
        region: "kagoshima",
        crop: "people",
        month: 5,
        roles: ["hero"],
        objectPosition: "center 35%",
    },
    {
        id: "gallery-1",
        alt: "霧の山並みと茶園の風景",
        caption: "鹿児島・茶・5月",
        region: "kagoshima",
        crop: "tea",
        month: 5,
        roles: ["gallery", "relay"],
        objectPosition: "center 60%",
    },
    {
        id: "gallery-2",
        alt: "ハウスで収穫したスイカを持つスタッフ",
        caption: "鹿児島・野菜・7月",
        region: "kagoshima",
        crop: "vegetable",
        month: 7,
        roles: ["gallery"],
    },
    {
        id: "gallery-3",
        alt: "ハウスでトマトを収穫するスタッフ",
        caption: "鹿児島・野菜",
        region: "kagoshima",
        crop: "vegetable",
        roles: ["gallery"],
    },
    {
        id: "gallery-4",
        alt: "茶園に白い被覆ネットが並ぶ風景",
        caption: "鹿児島・茶・5月",
        region: "kagoshima",
        crop: "tea",
        month: 5,
        roles: ["gallery"],
    },
    {
        id: "gallery-5",
        alt: "畑で苗を定植するスタッフ",
        caption: "鹿児島・野菜",
        region: "kagoshima",
        crop: "vegetable",
        roles: ["gallery"],
        objectPosition: "center 40%",
    },
    {
        id: "gallery-6",
        alt: "畜舎で作業するスタッフ",
        caption: "鹿児島・畜産",
        region: "kagoshima",
        crop: "livestock",
        roles: ["gallery"],
    },
    {
        id: "gallery-7",
        alt: "リフトで作物を運ぶスタッフ",
        caption: "鹿児島・集出荷",
        region: "kagoshima",
        crop: "logistics",
        roles: ["gallery"],
    },
    {
        id: "gallery-8",
        alt: "収穫した大根が並ぶ様子",
        caption: "鹿児島・野菜・12月",
        region: "kagoshima",
        crop: "vegetable",
        month: 12,
        roles: ["gallery"],
    },
    {
        id: "gallery-9",
        alt: "段々畑の柑橘園",
        caption: "愛媛・柑橘・11月",
        region: "ehime",
        crop: "citrus",
        month: 11,
        roles: ["gallery", "relay"],
        objectPosition: "center 45%",
    },
    {
        id: "gallery-10",
        alt: "ハウスで収穫作業をするスタッフ",
        caption: "鹿児島・野菜・7月",
        region: "kagoshima",
        crop: "vegetable",
        month: 7,
        roles: ["gallery"],
    },
    {
        id: "relay-aichi-1",
        alt: "マルチを敷いた野菜畑",
        caption: "愛知・野菜",
        region: "aichi",
        crop: "vegetable",
        roles: ["relay", "gallery"],
        objectPosition: "center 55%",
    },
    {
        id: "life-1",
        alt: "現場へ向かう社用車とスタッフ",
        caption: "鹿児島・暮らし",
        region: "kagoshima",
        crop: "life",
        roles: ["life"],
    },
    {
        id: "life-2",
        alt: "移動の途中で弁当を広げるスタッフ",
        caption: "鹿児島・暮らし",
        region: "kagoshima",
        crop: "life",
        roles: ["life"],
    },
    {
        id: "life-3",
        alt: "イチョウ並木の前に立つスタッフ",
        caption: "日本・暮らし・11月",
        region: "japan",
        crop: "life",
        month: 11,
        roles: ["life"],
    },
    {
        id: "life-4",
        alt: "到着口で荷物を持つスタッフ",
        caption: "日本・暮らし",
        region: "japan",
        crop: "life",
        roles: ["life"],
    },
];

const PHOTO_MAP = new Map(PHOTOS.map((photo) => [photo.id, photo]));

/**
 * 写真IDからカタログ項目を取得する
 * Look up a catalog entry by photo ID
 * Mengambil entri katalog berdasarkan ID foto
 */
export function getPhoto(id: string): SitePhoto {
    const photo = PHOTO_MAP.get(id);
    if (!photo) {
        throw new Error(`Unknown photo id: ${id}`);
    }
    return photo;
}

/**
 * 指定サイズ・形式の公開パスを返す
 * Returns the public path for a size and format
 * Mengembalikan path publik untuk ukuran dan format tertentu
 */
export function photoSrc(id: string, size: PhotoSize = 1600, format: PhotoFormat = "webp"): string {
    getPhoto(id);
    return `/images/photos/${id}-${size}.${format}`;
}

/**
 * ギャラリー用の写真一覧
 * Photos tagged for the field gallery
 * Foto yang ditandai untuk galeri lapangan
 */
export function galleryPhotos(): SitePhoto[] {
    return PHOTOS.filter((photo) => photo.roles.includes("gallery"));
}

/**
 * 収穫リレー用の写真（地域キー）
 * Harvest-relay photos keyed by region
 * Foto estafet panen berdasarkan wilayah
 */
export function relayPhotoForRegion(region: PhotoRegion): SitePhoto | undefined {
    return PHOTOS.find((photo) => photo.roles.includes("relay") && photo.region === region);
}

/**
 * スタッフの暮らし用の写真
 * Photos for the staff-life section
 * Foto untuk bagian kehidupan staf
 */
export function lifePhotos(): SitePhoto[] {
    return PHOTOS.filter((photo) => photo.roles.includes("life"));
}

/**
 * キャプション用の地域ラベル
 * Region label for captions
 * Label wilayah untuk keterangan
 */
export function regionLabel(region: PhotoRegion): string {
    return REGION_LABEL[region];
}

/**
 * キャプション用の作物ラベル
 * Crop label for captions
 * Label tanaman untuk keterangan
 */
export function cropLabel(crop: PhotoCrop): string {
    return CROP_LABEL[crop];
}
