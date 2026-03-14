import { NextRequest, NextResponse } from "next/server";

type FacebookFeedItem = {
    id: string;
    message?: string;
    created_time?: string;
    full_picture?: string;
    permalink_url?: string;
    reactions?: { summary?: { total_count?: number } };
    comments?: { summary?: { total_count?: number } };
};

type FeedPost = {
    id: string;
    date: string;
    content: string;
    likes: number;
    comments: number;
    image: string | null;
    permalink: string | null;
};

const DEFAULT_PAGE_ID = "61558366208114";
const DEFAULT_LIMIT = 6;
const MAX_LIMIT = 10;

const fallbackPosts: FeedPost[] = [
    {
        id: "fallback-1",
        date: "2024年12月28日",
        content:
            "【年末のご挨拶】\n\n本年も大変お世話になりました。2024年は多くの農家様・企業様にご利用いただき、誠にありがとうございました。\n\n来年も皆様のお役に立てるよう、スタッフ一同精進してまいります。良いお年をお迎えください。",
        likes: 45,
        comments: 8,
        image: null,
        permalink: "https://www.facebook.com/profile.php?id=61558366208114",
    },
    {
        id: "fallback-2",
        date: "2024年12月20日",
        content:
            "【新規スタッフ研修完了】\n\nインドネシアからの新しい仲間が研修を終え、各農場への配属が決まりました。\n\n日本語能力も高く、農業への熱意に満ちたメンバーです。",
        likes: 89,
        comments: 15,
        image: "/images/cases/tea-farm-workers.png",
        permalink: "https://www.facebook.com/profile.php?id=61558366208114",
    },
    {
        id: "fallback-3",
        date: "2024年12月15日",
        content:
            "【導入事例を更新しました】\n\n霧島中央製茶様、ヘンタ製茶様の事例を公開しました。実際にスグクルをご利用いただいている企業様の声をぜひご覧ください。",
        likes: 32,
        comments: 4,
        image: null,
        permalink: "https://www.facebook.com/profile.php?id=61558366208114",
    },
];

function clampLimit(rawLimit: string | null): number {
    const parsed = Number(rawLimit ?? DEFAULT_LIMIT);
    if (!Number.isFinite(parsed) || parsed < 1) return DEFAULT_LIMIT;
    return Math.min(Math.floor(parsed), MAX_LIMIT);
}

function formatJaDate(isoDate?: string): string {
    if (!isoDate) return "日付不明";
    const date = new Date(isoDate);
    if (Number.isNaN(date.getTime())) return "日付不明";
    return date.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

function toPost(item: FacebookFeedItem): FeedPost {
    return {
        id: item.id,
        date: formatJaDate(item.created_time),
        content: item.message?.trim() || "（画像投稿）",
        likes: item.reactions?.summary?.total_count ?? 0,
        comments: item.comments?.summary?.total_count ?? 0,
        image: item.full_picture ?? null,
        permalink: item.permalink_url ?? null,
    };
}

function success(payload: object) {
    return NextResponse.json(payload, {
        status: 200,
        headers: {
            "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
        },
    });
}

export async function GET(request: NextRequest) {
    const limit = clampLimit(request.nextUrl.searchParams.get("limit"));
    const pageId = process.env.FACEBOOK_PAGE_ID || DEFAULT_PAGE_ID;
    const accessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

    if (!accessToken) {
        return success({
            source: "fallback",
            warning: "FACEBOOK_PAGE_ACCESS_TOKEN is not configured.",
            posts: fallbackPosts.slice(0, limit),
        });
    }

    const apiUrl = new URL(`https://graph.facebook.com/v23.0/${pageId}/posts`);
    apiUrl.searchParams.set(
        "fields",
        "id,message,created_time,full_picture,permalink_url,reactions.summary(true).limit(0),comments.summary(true).limit(0)"
    );
    apiUrl.searchParams.set("limit", String(limit));
    apiUrl.searchParams.set("access_token", accessToken);

    try {
        const response = await fetch(apiUrl.toString(), {
            next: { revalidate: 300 },
        });

        if (!response.ok) {
            return success({
                source: "fallback",
                warning: `Facebook API request failed (${response.status}).`,
                posts: fallbackPosts.slice(0, limit),
            });
        }

        const json = (await response.json()) as { data?: FacebookFeedItem[] };
        const posts = (json.data ?? [])
            .filter((item) => Boolean(item.message || item.full_picture))
            .map(toPost)
            .slice(0, limit);

        if (posts.length === 0) {
            return success({
                source: "fallback",
                warning: "Facebook feed is empty.",
                posts: fallbackPosts.slice(0, limit),
            });
        }

        return success({
            source: "facebook",
            posts,
        });
    } catch {
        return success({
            source: "fallback",
            warning: "Failed to fetch Facebook posts.",
            posts: fallbackPosts.slice(0, limit),
        });
    }
}
