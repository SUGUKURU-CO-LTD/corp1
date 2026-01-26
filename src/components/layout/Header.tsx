"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
    { name: "ホーム", href: "/" },
    {
        name: "サービス",
        href: "/services",
        children: [
            { name: "農業派遣", href: "/services/dispatch" },
            { name: "農作業受託", href: "/services/contracting" },
            { name: "有料職業紹介", href: "/services/placement" },
            { name: "IT事業", href: "/services/it" },
        ],
    },
    { name: "スグスタ", href: "https://sugu-study.com", external: true },
    { name: "会社概要", href: "/about" },
    { name: "導入事例", href: "/cases" },
    { name: "お知らせ", href: "/journal" },
    { name: "採用情報", href: "/careers" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm"
        >
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative w-48 h-12">
                            <Image
                                src="/images/logo-horizontal.png"
                                alt="スグクル"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {item.external ? (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-sm font-medium transition-colors text-gray-700 hover:text-[#1B5E38]"
                                    >
                                        {item.name}
                                    </a>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="flex items-center gap-1 text-sm font-medium transition-colors text-gray-700 hover:text-[#1B5E38]"
                                    >
                                        {item.name}
                                        {item.children && <ChevronDown className="w-4 h-4" />}
                                    </Link>
                                )}

                                {/* Dropdown */}
                                <AnimatePresence>
                                    {item.children && activeDropdown === item.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
                                        >
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B5E38] hover:text-white transition-colors"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}

                        {/* CTA Button */}
                        <Link
                            href="/contact"
                            className="btn btn-primary text-sm"
                        >
                            お問い合わせ
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="メニュー"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-gray-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-700" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            <div className="py-4">
                                {navigation.map((item) => (
                                    <div key={item.name}>
                                        <Link
                                            href={item.href}
                                            className="block px-6 py-3 text-gray-700 hover:bg-[#1B5E38] hover:text-white transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                        {item.children && (
                                            <div className="pl-4 bg-gray-50">
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        className="block px-6 py-2 text-sm text-gray-600 hover:text-[#1B5E38]"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <div className="px-6 pt-4">
                                    <Link
                                        href="/contact"
                                        className="btn btn-primary w-full text-center"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        お問い合わせ
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}
