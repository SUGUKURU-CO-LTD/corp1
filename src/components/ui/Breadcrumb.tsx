"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface BreadcrumbItem {
    name: string;
    href: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="パンくずリスト" className="py-4">
            <ol className="flex items-center gap-2 text-sm">
                <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link
                        href="/"
                        className="flex items-center gap-1 text-gray-500 hover:text-[#1B5E38] transition-colors"
                    >
                        <Home className="w-4 h-4" />
                        <span>ホーム</span>
                    </Link>
                </motion.li>

                {items.map((item, index) => (
                    <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
                        className="flex items-center gap-2"
                    >
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                        {index === items.length - 1 ? (
                            <span className="text-gray-700 font-medium" aria-current="page">
                                {item.name}
                            </span>
                        ) : (
                            <Link
                                href={item.href}
                                className="text-gray-500 hover:text-[#1B5E38] transition-colors"
                            >
                                {item.name}
                            </Link>
                        )}
                    </motion.li>
                ))}
            </ol>
        </nav>
    );
}
