import Link from "next/link";
import { AlertTriangle, Bell, ArrowRight } from "lucide-react";
import { getPinnedNews, getSortedNews, formatNewsDate } from "@/lib/news";

// トップページの「お知らせ」欄。
// 期限付きの重要告知（pinnedUntil）があれば最上部に強調表示し、
// その下に最新3件を一覧表示する。全ページ共通の帯は意図的に作らない
// （Headerがfixedで高さ定数を持たず、25ページが個別にpt-20を書いている
// 構造のため、共通バナーは影響範囲が大きすぎると判断した）。
export default function NewsSection() {
    const pinned = getPinnedNews();
    const recent = getSortedNews().slice(0, 3);

    if (recent.length === 0) return null;

    return (
        <section className="section bg-white">
            <div className="container mx-auto">
                {pinned.length > 0 && (
                    <div className="max-w-3xl mx-auto mb-10 space-y-3">
                        {pinned.map((item) => (
                            <Link
                                key={item.slug}
                                href={`/news/${item.slug}`}
                                className="flex items-start gap-3 rounded-xl border border-amber-300/50 bg-amber-50 p-4 hover:bg-amber-100/60 transition-colors"
                            >
                                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-bold text-ink text-sm">
                                        {item.title}
                                    </p>
                                    <p className="text-ink-muted text-sm mt-0.5">
                                        {item.summary}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl md:text-2xl font-bold text-ink flex items-center gap-2">
                            <Bell className="w-5 h-5 text-accent" />
                            お知らせ
                        </h2>
                        <Link
                            href="/news"
                            className="inline-flex items-center gap-1 text-sm text-accent font-medium hover:underline"
                        >
                            すべて見る
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <ul className="divide-y divide-line border-t border-b border-line">
                        {recent.map((item) => (
                            <li key={item.slug}>
                                <Link
                                    href={`/news/${item.slug}`}
                                    className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-4 px-2 -mx-2 rounded-lg hover:bg-canvas transition-colors"
                                >
                                    <time
                                        dateTime={item.publishedAt}
                                        className="text-sm text-ink-muted sm:w-32 flex-shrink-0"
                                    >
                                        {formatNewsDate(item.publishedAt)}
                                    </time>
                                    <span className="text-ink font-medium">
                                        {item.title}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
