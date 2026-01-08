"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    ArrowRight,
    Facebook,
    ExternalLink,
    Bell,
    Newspaper,
    Phone,
    Calendar,
    ThumbsUp,
    MessageCircle,
    Share2,
} from "lucide-react";

// モックデータ - Facebookの最新投稿を表示
// 実際の運用ではFacebook Graph APIで取得することを推奨
const recentPosts = [
    {
        id: 1,
        date: "2024年12月28日",
        content: "【年末のご挨拶】\n\n本年も大変お世話になりました。2024年は多くの農家様・企業様にご利用いただき、誠にありがとうございました。\n\n来年も皆様のお役に立てるよう、スタッフ一同精進してまいります。良いお年をお迎えください。",
        likes: 45,
        comments: 8,
        image: null,
    },
    {
        id: 2,
        date: "2024年12月20日",
        content: "【新規スタッフ研修完了🎉】\n\nインドネシアからの新しい仲間が研修を終え、各農場への配属が決まりました！\n\n日本語能力も高く、農業への熱意に満ちたメンバーです。これから各地で活躍してくれることでしょう。",
        likes: 89,
        comments: 15,
        image: "/images/cases/tea-farm-workers.png",
    },
    {
        id: 3,
        date: "2024年12月15日",
        content: "【導入事例を更新しました】\n\n霧島中央製茶様、ヘンタ製茶様の事例を公開しました。実際にスグクルをご利用いただいている企業様の声をぜひご覧ください。\n\n👉 詳しくはウェブサイトの「導入事例」ページへ",
        likes: 32,
        comments: 4,
        image: null,
    },
    {
        id: 4,
        date: "2024年12月10日",
        content: "【畜産分野にも対応開始📣】\n\n和牛の飼育管理、酪農作業など、畜産分野への人材派遣も本格的にスタートしました。\n\n農業だけでなく、畜産業の人手不足解消にも貢献してまいります。お気軽にご相談ください。",
        likes: 67,
        comments: 12,
        image: "/images/cases/livestock-farm-workers.png",
    },
];

export default function JournalPage() {
    const [fbLoaded, setFbLoaded] = useState(false);

    useEffect(() => {
        // Load Facebook SDK
        const loadFacebookSDK = () => {
            if (document.getElementById("facebook-jssdk")) {
                setFbLoaded(true);
                return;
            }

            const script = document.createElement("script");
            script.id = "facebook-jssdk";
            script.src = "https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v18.0";
            script.async = true;
            script.defer = true;
            script.crossOrigin = "anonymous";
            script.onload = () => setFbLoaded(true);
            document.body.appendChild(script);
        };

        loadFacebookSDK();
    }, []);

    return (
        <div className="pt-20">
            {/* Hero - Compact */}
            <section className="py-16 md:py-20 bg-[#1B5E38] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B5E38] via-[#2d7a4e] to-[#1B5E38]" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl md:text-4xl font-bold mb-2"
                                style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                            >
                                お知らせ
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-white/80"
                            >
                                スグクルの最新情報をお届けします
                            </motion.p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <a
                                href="https://www.facebook.com/profile.php?id=61558366208114"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn bg-white text-[#1B5E38] hover:bg-gray-100 group"
                            >
                                <Facebook className="w-5 h-5" />
                                Facebookをフォロー
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-[#FAFAF7]">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Posts Feed - Main Column */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center">
                                    <Facebook className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h2 className="font-bold text-[#1A1A1A]">最新の投稿</h2>
                                    <p className="text-gray-500 text-sm">Sugukuru Agency</p>
                                </div>
                            </div>

                            {recentPosts.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                                >
                                    {/* Post Header */}
                                    <div className="p-5 pb-4 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1B5E38] to-[#2d7a4e] flex items-center justify-center">
                                            <span className="text-white font-bold text-sm">SG</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-bold text-[#1A1A1A] text-sm">スグクル株式会社</p>
                                            <div className="flex items-center gap-1 text-gray-400 text-xs">
                                                <Calendar className="w-3 h-3" />
                                                {post.date}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Post Content */}
                                    <div className="px-5 pb-4">
                                        <p className="text-gray-700 leading-relaxed whitespace-pre-line text-[15px]">
                                            {post.content}
                                        </p>
                                    </div>

                                    {/* Post Image */}
                                    {post.image && (
                                        <div className="relative h-64 bg-gray-100">
                                            <img
                                                src={post.image}
                                                alt=""
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}

                                    {/* Post Actions */}
                                    <div className="px-5 py-3 border-t border-gray-100 flex items-center gap-6">
                                        <button className="flex items-center gap-2 text-gray-500 hover:text-[#1877F2] transition-colors text-sm">
                                            <ThumbsUp className="w-4 h-4" />
                                            <span>{post.likes}</span>
                                        </button>
                                        <button className="flex items-center gap-2 text-gray-500 hover:text-[#1877F2] transition-colors text-sm">
                                            <MessageCircle className="w-4 h-4" />
                                            <span>{post.comments}</span>
                                        </button>
                                        <button className="flex items-center gap-2 text-gray-500 hover:text-[#1877F2] transition-colors text-sm ml-auto">
                                            <Share2 className="w-4 h-4" />
                                            <span>シェア</span>
                                        </button>
                                    </div>
                                </motion.article>
                            ))}

                            {/* View More on Facebook */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center pt-4"
                            >
                                <a
                                    href="https://www.facebook.com/profile.php?id=61558366208114"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[#1877F2] hover:underline font-medium"
                                >
                                    Facebookでもっと見る
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <aside className="space-y-6">
                            {/* Facebook Page Widget */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5"
                            >
                                <h3 className="font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
                                    <Facebook className="w-5 h-5 text-[#1877F2]" />
                                    公式Facebook
                                </h3>
                                <div
                                    className="fb-page"
                                    data-href="https://www.facebook.com/profile.php?id=61558366208114"
                                    data-tabs=""
                                    data-width="300"
                                    data-height=""
                                    data-small-header="true"
                                    data-adapt-container-width="true"
                                    data-hide-cover="false"
                                    data-show-facepile="true"
                                >
                                    <blockquote
                                        cite="https://www.facebook.com/profile.php?id=61558366208114"
                                        className="fb-xfbml-parse-ignore"
                                    >
                                        <a href="https://www.facebook.com/profile.php?id=61558366208114">
                                            Sugukuru Agency
                                        </a>
                                    </blockquote>
                                </div>
                                <a
                                    href="https://www.facebook.com/profile.php?id=61558366208114"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn bg-[#1877F2] text-white hover:bg-[#1565d8] w-full mt-4"
                                >
                                    <Facebook className="w-4 h-4" />
                                    フォローする
                                </a>
                            </motion.div>

                            {/* Quick Links */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5"
                            >
                                <h3 className="font-bold text-[#1A1A1A] mb-4">関連リンク</h3>
                                <div className="space-y-3">
                                    <Link
                                        href="/cases"
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-[#1B5E38]/10 flex items-center justify-center group-hover:bg-[#1B5E38]/20 transition-colors">
                                            <Newspaper className="w-5 h-5 text-[#1B5E38]" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#1A1A1A] text-sm">導入事例</p>
                                            <p className="text-gray-500 text-xs">企業様の声をご紹介</p>
                                        </div>
                                    </Link>
                                    <Link
                                        href="/services/dispatch"
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-[#1B5E38]/10 flex items-center justify-center group-hover:bg-[#1B5E38]/20 transition-colors">
                                            <Bell className="w-5 h-5 text-[#1B5E38]" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#1A1A1A] text-sm">人材派遣サービス</p>
                                            <p className="text-gray-500 text-xs">サービスの詳細はこちら</p>
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Contact Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-gradient-to-br from-[#1B5E38] to-[#2d7a4e] rounded-xl p-5 text-white"
                            >
                                <h3 className="font-bold mb-2">お問い合わせ</h3>
                                <p className="text-white/80 text-sm mb-4">
                                    人材確保のご相談はお気軽に
                                </p>
                                <a
                                    href="tel:0995-73-9939"
                                    className="flex items-center gap-2 text-lg font-bold mb-3"
                                >
                                    <Phone className="w-5 h-5" />
                                    0995-73-9939
                                </a>
                                <Link
                                    href="/contact"
                                    className="btn bg-white text-[#1B5E38] hover:bg-gray-100 w-full"
                                >
                                    お問い合わせフォーム
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Facebook SDK Root */}
            <div id="fb-root"></div>
        </div>
    );
}
