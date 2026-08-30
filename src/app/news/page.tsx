import Link from "next/link";
import { Facebook } from "lucide-react";
import type { Metadata } from "next";
import {
    getSortedNews,
    newsCategoryLabels,
    formatNewsDate,
    type NewsCategory,
} from "@/lib/news";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata.news;

const categoryStyle: Record<NewsCategory, string> = {
    important: "bg-error/10 text-error-strong",
    notice: "bg-accent/10 text-accent",
    service: "bg-accent-soft text-accent-strong",
    recruit: "bg-line text-ink-muted",
};

export default function NewsPage() {
    const items = getSortedNews();

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="bg-accent-dark text-white">
                <div className="container mx-auto px-6 py-20 md:py-24">
                    <div className="max-w-3xl">
                        <span className="text-accent-light text-sm font-medium tracking-wider uppercase">
                            News
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
                            お知らせ
                        </h1>
                        <p className="text-white/80 leading-relaxed">
                            事務所移転や制度変更など、スグクル株式会社からの公式なお知らせをお届けします。
                        </p>
                    </div>
                </div>
            </section>

            {/* 一覧 */}
            <section className="section bg-canvas">
                <div className="container mx-auto">
                    <div className="max-w-3xl mx-auto space-y-6">
                        {items.length === 0 ? (
                            <p className="text-center text-ink-muted">
                                現在お知らせはございません。
                            </p>
                        ) : (
                            items.map((item) => (
                                <Link
                                    key={item.slug}
                                    href={`/news/${item.slug}`}
                                    className="block bg-white rounded-2xl border border-line shadow-sm hover:shadow-md transition-shadow p-6 md:p-8"
                                >
                                    <div className="flex flex-wrap items-center gap-3 mb-3">
                                        <span
                                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${categoryStyle[item.category]}`}
                                        >
                                            {newsCategoryLabels[item.category]}
                                        </span>
                                        <time
                                            dateTime={item.publishedAt}
                                            className="text-sm text-ink-muted"
                                        >
                                            {formatNewsDate(item.publishedAt)}
                                        </time>
                                    </div>
                                    <h2 className="text-xl font-bold text-ink mb-2">
                                        {item.title}
                                    </h2>
                                    <p className="text-ink-muted leading-relaxed">
                                        {item.summary}
                                    </p>
                                </Link>
                            ))
                        )}
                    </div>

                    <div className="max-w-3xl mx-auto mt-10 text-center">
                        <a
                            href="https://www.facebook.com/profile.php?id=61558366208114"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-accent transition-colors"
                        >
                            <Facebook className="w-4 h-4" />
                            Facebookでもフォローしています
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
