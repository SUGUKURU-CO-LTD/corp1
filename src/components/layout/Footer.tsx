import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
    services: [
        { name: "農業派遣", href: "/services/dispatch" },
        { name: "農作業受託", href: "/services/contracting" },
        { name: "有料職業紹介", href: "/services/placement" },
        { name: "IT事業", href: "/services/it" },
        { name: "スグスタ", href: "https://www.sugu-study.com", external: true },
    ],
    company: [
        { name: "会社概要", href: "/about" },
        { name: "経営方針", href: "/about#policy" },
        { name: "拠点・アクセス", href: "/about#offices" },
        { name: "採用情報", href: "/careers" },
        { name: "お知らせ", href: "/journal" },
    ],
    legal: [
        { name: "マージン率公開", href: "/compliance" },
        { name: "派遣法に基づく情報", href: "/compliance#dispatch-law" },
        { name: "プライバシーポリシー", href: "/privacy" },
        { name: "利用規約", href: "/legal" },
        { name: "お問い合わせ", href: "/contact" },
    ],
};

const offices = [
    { name: "本社", location: "鹿児島県霧島市" },
    { name: "福島", location: "福島県" },
    { name: "宮崎", location: "宮崎県" },
    { name: "愛知", location: "愛知県" },
    { name: "愛媛", location: "愛媛県" },
];

export default function Footer() {
    return (
        <footer className="bg-[#1A1A1A] text-white">
            {/* Dark Spacer */}
            <div className="h-16 bg-[#1A1A1A]" />
            {/* Main Footer */}
            <div className="container mx-auto px-6 pt-8 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <div className="relative w-48 h-12">
                                <Image
                                    src="/images/logo-horizontal-white.png"
                                    alt="スグクル"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            「スグクル」、だから変われる。<br />
                            外国人材の力で、日本の農業を支えます。
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 text-sm">
                                <MapPin className="w-4 h-4 text-[#D4A853] mt-1 flex-shrink-0" />
                                <span className="text-gray-300">
                                    〒899-4332<br />
                                    鹿児島県霧島市国府中央3丁目42-8 翔陽A103
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Phone className="w-4 h-4 text-[#D4A853]" />
                                <a href="tel:0995-73-9939" className="text-gray-300 hover:text-white transition-colors">
                                    0995-73-9939
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <Mail className="w-4 h-4 text-[#D4A853]" />
                                <a href="mailto:info@sugu-kuru.co.jp" className="text-gray-300 hover:text-white transition-colors">
                                    info@sugu-kuru.co.jp
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h3 className="text-[#D4A853] font-bold mb-6">サービス</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    {link.external ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 text-sm hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 text-sm hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-[#D4A853] font-bold mb-6">会社情報</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 text-sm hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-[#D4A853] font-bold mb-6">法令遵守情報</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 text-sm hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Offices */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <h3 className="text-[#D4A853] font-bold mb-6">全国の拠点</h3>
                    <div className="flex flex-wrap gap-4">
                        {offices.map((office) => (
                            <div
                                key={office.name}
                                className="bg-gray-800/50 rounded-lg px-4 py-2 text-sm"
                            >
                                <span className="text-white font-medium">{office.name}</span>
                                <span className="text-gray-400 ml-2">{office.location}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* License Badges */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-wrap gap-4">
                        <div className="license-badge">
                            労働者派遣事業許可: 派46-300156
                        </div>
                        <div className="license-badge">
                            有料職業紹介事業許可: 46-ユ-300117
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 py-6">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © 2025 SUGUKURU Inc. All Rights Reserved.
                        </p>
                        <p className="text-gray-500 text-sm flex items-center gap-2">
                            Made in Kirishima, Kagoshima
                            <span className="text-lg">🌋</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
