import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "スグクル株式会社 | 農業派遣・IT事業 | Sugukuru",
  description: "スグクル株式会社は、農業派遣・農作業受託・有料職業紹介・IT事業を通じて、日本の農業を外国人材の力で支えます。「すぐ来る」、だから変われる。",
  keywords: "農業派遣, 外国人材, 特定技能, 農作業受託, IT開発, 鹿児島, スグクル",
  openGraph: {
    title: "スグクル株式会社 | 農業派遣・IT事業",
    description: "日本の農業を外国人材の力で支える。「すぐ来る」、だから変われる。",
    url: "https://sugu-kuru.co.jp",
    siteName: "スグクル株式会社",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "スグクル株式会社 | 農業派遣・IT事業",
    description: "日本の農業を外国人材の力で支える。「すぐ来る」、だから変われる。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${shipporiMincho.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
