import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import type { Metadata } from "next";
import {
    getNewsBySlug,
    getSortedNews,
    newsCategoryLabels,
    formatNewsDate,
    type NewsCategory,
} from "@/lib/news";
import { generatePageMetadata } from "@/lib/metadata";
import { ArticleSchema } from "@/components/seo/StructuredData";

export function generateStaticParams() {
    return getSortedNews().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const item = getNewsBySlug(slug);
    if (!item) return {};
    return generatePageMetadata({
        title: item.title,
        description: item.summary,
        path: `/news/${item.slug}`,
        type: "article",
        publishedTime: item.publishedAt,
    });
}

const categoryStyle: Record<NewsCategory, string> = {
    important: "bg-error/10 text-error-strong",
    notice: "bg-accent/10 text-accent",
    service: "bg-accent-soft text-accent-strong",
    recruit: "bg-line text-ink-muted",
};

export default async function NewsDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const item = getNewsBySlug(slug);
    if (!item) notFound();

    return (
        <div className="pt-20">
            <ArticleSchema
                headline={item.title}
                description={item.summary}
                datePublished={item.publishedAt}
            />

            <section className="section bg-canvas">
                <div className="container mx-auto">
                    <div className="max-w-2xl mx-auto">
                        <Link
                            href="/news"
                            className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-accent transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            お知らせ一覧へ
                        </Link>

                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span
                                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${categoryStyle[item.category]}`}
                            >
                                {newsCategoryLabels[item.category]}
                            </span>
                            <time
                                dateTime={item.publishedAt}
                                className="flex items-center gap-1.5 text-sm text-ink-muted"
                            >
                                <Calendar className="w-3.5 h-3.5" />
                                {formatNewsDate(item.publishedAt)}
                            </time>
                        </div>

                        <h1 className="text-2xl md:text-3xl font-bold text-ink mb-8">
                            {item.title}
                        </h1>

                        <div className="space-y-4">
                            {item.body.map((paragraph, i) => (
                                <p key={i} className="text-ink leading-relaxed">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <Link
                            href="/news"
                            className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-accent transition-colors mt-12"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            お知らせ一覧へ
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
