"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useState } from 'react';

const languages = [
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
];

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

    const handleLanguageChange = (newLocale: string) => {
        // Remove current locale from pathname if it exists
        const pathnameWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
        
        // Add new locale to pathname (unless it's the default 'ja')
        const newPathname = newLocale === 'ja' 
            ? pathnameWithoutLocale 
            : `/${newLocale}${pathnameWithoutLocale}`;
        
        router.push(newPathname);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="言語を選択 / Select Language / Pilih Bahasa"
            >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{currentLanguage.flag} {currentLanguage.name}</span>
            </button>

            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    
                    {/* Dropdown */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 border border-gray-100 z-50"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => handleLanguageChange(lang.code)}
                                className={`w-full text-left px-4 py-2 text-sm hover:bg-[#1B5E38] hover:text-white transition-colors flex items-center gap-2 ${
                                    locale === lang.code ? 'bg-gray-100 font-semibold' : ''
                                }`}
                            >
                                <span>{lang.flag}</span>
                                <span>{lang.name}</span>
                                {locale === lang.code && (
                                    <span className="ml-auto text-[#1B5E38]">✓</span>
                                )}
                            </button>
                        ))}
                    </motion.div>
                </>
            )}
        </div>
    );
}
