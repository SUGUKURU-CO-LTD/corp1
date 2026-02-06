import Script from 'next/script';

interface OrganizationSchemaProps {
    name?: string;
    url?: string;
    logo?: string;
    description?: string;
    address?: {
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
    };
    contactPoint?: {
        telephone: string;
        contactType: string;
        email?: string;
    };
    sameAs?: string[];
}

export function OrganizationSchema({
    name = 'スグクル株式会社',
    url = 'https://sugu-kuru.co.jp',
    logo = 'https://sugu-kuru.co.jp/images/logo-horizontal-white.png',
    description = 'スグクル株式会社は、農業派遣・農作業受託・有料職業紹介・IT事業を通じて、日本の農業を外国人材の力で支えます。',
    address = {
        streetAddress: '国府中央3丁目42-8 翔陽A103',
        addressLocality: '霧島市',
        addressRegion: '鹿児島県',
        postalCode: '899-4332',
        addressCountry: 'JP',
    },
    contactPoint = {
        telephone: '+81-995-73-9939',
        contactType: 'customer service',
        email: 'info@sugu-kuru.co.jp',
    },
    sameAs = [],
}: OrganizationSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name,
        url,
        logo,
        description,
        address: {
            '@type': 'PostalAddress',
            ...address,
        },
        contactPoint: {
            '@type': 'ContactPoint',
            ...contactPoint,
        },
        ...(sameAs.length > 0 && { sameAs }),
    };

    return (
        <Script
            id="organization-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface WebsiteSchemaProps {
    name?: string;
    url?: string;
    description?: string;
}

export function WebsiteSchema({
    name = 'スグクル株式会社',
    url = 'https://sugu-kuru.co.jp',
    description = 'スグクル株式会社は、農業派遣・農作業受託・有料職業紹介・IT事業を通じて、日本の農業を外国人材の力で支えます。',
}: WebsiteSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name,
        url,
        description,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${url}/search?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };

    return (
        <Script
            id="website-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbSchemaProps {
    items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <Script
            id="breadcrumb-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface LocalBusinessSchemaProps {
    name?: string;
    description?: string;
    url?: string;
    telephone?: string;
    email?: string;
    address?: {
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
    };
    geo?: {
        latitude: number;
        longitude: number;
    };
    openingHours?: string[];
    priceRange?: string;
}

export function LocalBusinessSchema({
    name = 'スグクル株式会社',
    description = 'スグクル株式会社は、農業派遣・農作業受託・有料職業紹介・IT事業を通じて、日本の農業を外国人材の力で支えます。',
    url = 'https://sugu-kuru.co.jp',
    telephone = '+81-995-73-9939',
    email = 'info@sugu-kuru.co.jp',
    address = {
        streetAddress: '国府中央3丁目42-8 翔陽A103',
        addressLocality: '霧島市',
        addressRegion: '鹿児島県',
        postalCode: '899-4332',
        addressCountry: 'JP',
    },
    geo,
    openingHours = ['Mo-Fr 09:00-18:00'],
    priceRange,
}: LocalBusinessSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name,
        description,
        url,
        telephone,
        email,
        address: {
            '@type': 'PostalAddress',
            ...address,
        },
        ...(geo && {
            geo: {
                '@type': 'GeoCoordinates',
                latitude: geo.latitude,
                longitude: geo.longitude,
            },
        }),
        openingHoursSpecification: openingHours.map((hours) => {
            const [days, time] = hours.split(' ');
            const [opens, closes] = time.split('-');
            return {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: days.split('-').map((day) => {
                    const dayMap: Record<string, string> = {
                        Mo: 'Monday',
                        Tu: 'Tuesday',
                        We: 'Wednesday',
                        Th: 'Thursday',
                        Fr: 'Friday',
                        Sa: 'Saturday',
                        Su: 'Sunday',
                    };
                    return dayMap[day] || day;
                }),
                opens,
                closes,
            };
        }),
        ...(priceRange && { priceRange }),
    };

    return (
        <Script
            id="local-business-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

interface ArticleSchemaProps {
    headline: string;
    description: string;
    image?: string;
    datePublished: string;
    dateModified?: string;
    author?: {
        name: string;
        url?: string;
    };
    publisher?: {
        name: string;
        logo?: string;
    };
}

export function ArticleSchema({
    headline,
    description,
    image,
    datePublished,
    dateModified,
    author = {
        name: 'スグクル株式会社',
        url: 'https://sugu-kuru.co.jp',
    },
    publisher = {
        name: 'スグクル株式会社',
        logo: 'https://sugu-kuru.co.jp/images/logo-horizontal-white.png',
    },
}: ArticleSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline,
        description,
        ...(image && { image }),
        datePublished,
        dateModified: dateModified || datePublished,
        author: {
            '@type': 'Organization',
            name: author.name,
            ...(author.url && { url: author.url }),
        },
        publisher: {
            '@type': 'Organization',
            name: publisher.name,
            ...(publisher.logo && {
                logo: {
                    '@type': 'ImageObject',
                    url: publisher.logo,
                },
            }),
        },
    };

    return (
        <Script
            id="article-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
