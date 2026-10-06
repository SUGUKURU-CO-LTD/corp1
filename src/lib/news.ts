import { COMPANY_ADDRESS_FULL_JA } from "@/lib/company";

/**
 * お知らせ（企業からの公式な告知）の単一情報源。
 * News / official announcements — single source of truth.
 * Berita / pengumuman resmi perusahaan — sumber tunggal.
 *
 * 記事を追加する場合は newsItems の末尾に1件追加するだけでよい。
 * 並び替え・トップページ掲出の判定は下記のヘルパー関数が自動で行う。
 * To add an article, just append one entry to newsItems below —
 * sorting and homepage pinning are handled automatically by the helpers.
 * Untuk menambah artikel, cukup tambahkan satu entri ke newsItems —
 * pengurutan dan penampilan di beranda ditangani otomatis oleh helper di bawah.
 */

export type NewsCategory = "important" | "notice" | "service" | "recruit";

export type NewsItem = {
    /** URL: /news/{slug}。一度公開した slug は変更しない（外部リンク・SEO保持のため） */
    slug: string;
    title: string;
    /** YYYY-MM-DD（日本時間基準の文字列。Date型にしない） */
    publishedAt: string;
    category: NewsCategory;
    /** 一覧・OGP用の要約（1〜2文） / Summary for the list & OGP / Ringkasan untuk daftar & OGP */
    summary: string;
    /** 本文。段落ごとに配列で持つ（リッチテキストは今回導入しない） */
    body: readonly string[];
    /**
     * この日付までトップページの「重要なお知らせ」欄に掲出する。null なら通常記事（一覧のみ）。
     * Shown in the homepage "important notice" area until this date; null = list-only.
     * Ditampilkan di area "notifikasi penting" beranda sampai tanggal ini; null = hanya di daftar.
     */
    pinnedUntil: string | null;
};

export const newsCategoryLabels: Record<NewsCategory, string> = {
    important: "重要なお知らせ",
    notice: "お知らせ",
    service: "サービス",
    recruit: "採用",
};

export const newsItems: readonly NewsItem[] = [
    {
        slug: "2026-08-office-relocation",
        title: "本店移転のお知らせ",
        publishedAt: "2026-08-30",
        category: "notice",
        summary: `本店を「${COMPANY_ADDRESS_FULL_JA}」へ移転いたしました。電話番号・メールアドレスに変更はございません。`,
        body: [
            "平素より格別のご高配を賜り、厚く御礼申し上げます。",
            "このたび、弊社本店を2026年7月15日付で下記のとおり移転いたしましたのでお知らせいたします。",
            `新住所：${COMPANY_ADDRESS_FULL_JA}`,
            "電話番号・メールアドレスに変更はございません。",
            "今後とも変わらぬご愛顧を賜りますようお願い申し上げます。",
        ],
        pinnedUntil: null,
    },
    {
        slug: "2026-08-lombok-partner",
        title: "インドネシア・ロンボク島の協力先について",
        publishedAt: "2026-08-31",
        category: "notice",
        summary:
            "海外の協力先 PT SASAKA ADIKARA INDONESIA（インドネシア・ロンボク島）が2026年8月に設立されました。送出機関ライセンスは申請中です。",
        body: [
            "平素より格別のご高配を賜り、厚く御礼申し上げます。",
            "インドネシア・ロンボク島の協力先 PT SASAKA ADIKARA INDONESIA が2026年8月に設立されました。",
            "送出機関ライセンスは申請中で、取得後に送出しを始める予定です。当社の海外拠点ではなく、独立した協力先です。",
            "今後とも変わらぬご愛顧を賜りますようお願い申し上げます。",
        ],
        pinnedUntil: null,
    },
    {
        slug: "2026-10-organization",
        title: "体制のお知らせ",
        publishedAt: "2026-10-06",
        category: "notice",
        summary:
            "事業本部長（派遣元責任者）ワロ クレモ、キャリア支援・人材育成担当（職業紹介責任者）吉原 伸の体制で業務を行っています。",
        body: [
            "平素より格別のご高配を賜り、厚く御礼申し上げます。",
            "当社の対外窓口となる体制をお知らせします。",
            "事業本部長（派遣元責任者）：ワロ クレモ",
            "キャリア支援・人材育成担当（職業紹介責任者）：吉原 伸",
            "苦情・ご意見は、上記責任者または代表電話・メールにてお受けします。",
        ],
        pinnedUntil: null,
    },
] as const;

/** 公開日の新しい順に並べる / Sort by publishedAt, newest first / Urutkan berdasarkan publishedAt, terbaru dahulu */
export function getSortedNews(): NewsItem[] {
    return [...newsItems].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
    return newsItems.find((item) => item.slug === slug);
}

/**
 * 指定日時点でトップページに掲出すべき「重要なお知らせ」を返す（期限切れは自動的に外れる）。
 * Returns pinned notices that should still show on the homepage as of `now` (auto-expires).
 * Mengembalikan notifikasi yang masih harus tampil di beranda per `now` (kedaluwarsa otomatis).
 */
export function getPinnedNews(now: Date = new Date()): NewsItem[] {
    const todayKey = toJstDateKey(now);
    return getSortedNews().filter(
        (item) => item.pinnedUntil !== null && item.pinnedUntil >= todayKey
    );
}

/** Date を日本時間基準の YYYY-MM-DD 文字列にする（en-CA ロケールが ISO 順のため利用） */
function toJstDateKey(date: Date): string {
    return date.toLocaleDateString("en-CA", { timeZone: "Asia/Tokyo" });
}

/**
 * YYYY-MM-DD を日本語表示用に整形する。
 * 既存の src/app/api/facebook/posts/route.ts の formatJaDate は timeZone 未指定のため
 * Cloud Run（既定UTC）で日本時間の日付がずれうる不具合があった。ここでは明示的に指定する。
 */
export function formatNewsDate(dateStr: string): string {
    const date = new Date(`${dateStr}T00:00:00+09:00`);
    if (Number.isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "Asia/Tokyo",
    });
}
