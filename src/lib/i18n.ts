export type Locale = 'ja' | 'id' | 'en';

export const defaultLocale: Locale = 'ja';

export const locales: Locale[] = ['ja', 'id', 'en'];

export const localeNames: Record<Locale, string> = {
    ja: '日本語',
    id: 'Indonesia',
    en: 'English',
};

export const localeFlags: Record<Locale, string> = {
    ja: '🇯🇵',
    id: '🇮🇩',
    en: '🇺🇸',
};
