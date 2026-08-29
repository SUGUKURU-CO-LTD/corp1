import { Metadata } from 'next';

interface PageMetadataProps {
    title: string;
    description: string;
    keywords?: string;
    path?: string;
    image?: string;
    type?: 'website' | 'article';
    publishedTime?: string;
    modifiedTime?: string;
}

export function generatePageMetadata({
    title,
    description,
    keywords,
    path = '',
    image = '/images/og-image.png',
    type = 'website',
    publishedTime,
    modifiedTime,
}: PageMetadataProps): Metadata {
    const baseUrl = 'https://sugu-kuru.co.jp';
    const url = `${baseUrl}${path}`;
    const fullTitle = `${title} | スグクル株式会社`;

    return {
        title: fullTitle,
        description,
        keywords: keywords || '外国人材, 特定技能, 技人国, 人材派遣, 有料職業紹介, 農業派遣, IT開発, 鹿児島, スグクル',
        openGraph: {
            title: fullTitle,
            description,
            url,
            siteName: 'スグクル株式会社',
            locale: 'ja_JP',
            type,
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            ...(publishedTime && { publishedTime }),
            ...(modifiedTime && { modifiedTime }),
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [image],
        },
        alternates: {
            canonical: url,
        },
    };
}

// よく使うページのメタデータプリセット
export const pageMetadata = {
    about: generatePageMetadata({
        title: '会社概要',
        description: '鹿児島・霧島を拠点に、農業派遣・技人国人材の派遣紹介・有料職業紹介・IT事業を展開する人材総合会社、スグクル株式会社の会社概要。企業理念、沿革、拠点情報をご紹介します。',
        keywords: '会社概要, スグクル, 企業情報, 鹿児島, 霧島, 農業派遣, 技人国',
        path: '/about',
    }),
    services: generatePageMetadata({
        title: 'サービス一覧',
        description: 'スグクル株式会社が提供する農業派遣、農作業受託、技人国人材の派遣・紹介、有料職業紹介、IT事業の各サービスをご紹介。外国人材の力で、日本の産業を支えます。',
        keywords: 'サービス, 農業派遣, 農作業受託, 技人国, 有料職業紹介, IT事業, 特定技能',
        path: '/services',
    }),
    servicesDispatch: generatePageMetadata({
        title: '農業派遣サービス',
        description: '特定技能外国人材による農業派遣サービス。即戦力となる人材を迅速に派遣し、日本の農業を支えます。',
        keywords: '農業派遣, 特定技能, 外国人材, 人材派遣, 農業労働力',
        path: '/services/dispatch',
    }),
    servicesContracting: generatePageMetadata({
        title: '農作業受託サービス',
        description: '農作業の受託サービス。専門スタッフが農作業を代行し、農家の負担を軽減します。',
        keywords: '農作業受託, 農作業代行, 農業支援, 農業アウトソーシング',
        path: '/services/contracting',
    }),
    servicesPlacement: generatePageMetadata({
        title: '有料職業紹介サービス',
        description: '九州の企業様向けに外国人材の有料職業紹介・紹介予定派遣を提供。ホテル・外食・製造・建設等、業種別の受け入れ方法をご案内します。',
        keywords: '有料職業紹介, 人材紹介, 紹介予定派遣, 外国人材, 九州, 特定技能, 技人国',
        path: '/services/placement',
    }),
    servicesGijinkoku: generatePageMetadata({
        title: '技術・人文知識・国際業務（技人国）人材の派遣・紹介',
        description: '九州の製造・建設・サービス業へ、技人国人材を派遣・職業紹介・紹介予定派遣でご案内。生産管理・品質保証・通訳翻訳・施工管理等、専門職としての受け入れをサポートします。',
        keywords: '技人国, 技術人文知識国際業務, 外国人材, 人材派遣, 職業紹介, 九州, 生産管理, 施工管理',
        path: '/services/gijinkoku',
    }),
    servicesIt: generatePageMetadata({
        title: 'IT事業',
        description: 'Webアプリ・モバイルアプリ開発からクラウド構築、農業分野のDX推進まで。システム開発・コンサルティングを通じて企業のDX化を支援。MCPサーバーベースの自社プロダクトも展開。',
        keywords: 'IT事業, システム開発, DX, Webアプリ開発, 農業IT, MCP, NENKIN-PASS',
        path: '/services/it',
    }),
    cases: generatePageMetadata({
        title: '導入事例',
        description: 'スグクル株式会社のサービス導入事例をご紹介。全国各地の現場で活躍する外国人材の実績をご覧ください。',
        keywords: '導入事例, 実績, 成功事例, 外国人材活用実績',
        path: '/cases',
    }),
    kerja: generatePageMetadata({
        title: 'Lowongan Kerja untuk Orang Indonesia di Jepang',
        description: 'Papan lowongan kerja kantoran (transfer) di Jepang untuk warga Indonesia yang sudah tinggal di Jepang (Gijinkoku, Eijuu, Teijuu, Haiguusha). Gratis, tanpa biaya dari pelamar.',
        keywords: 'lowongan kerja, orang Indonesia di Jepang, gijinkoku, eijuu, teijuu, haiguusha, transfer kerja Jepang, Sugukuru',
        path: '/kerja',
    }),
    careers: generatePageMetadata({
        title: '採用情報',
        description: 'スグクル株式会社の採用情報。外国人材の力で日本の産業を支える仲間を募集しています。',
        keywords: '採用情報, 求人, リクルート, キャリア, 外国人材業界',
        path: '/careers',
    }),
    journal: generatePageMetadata({
        title: 'ジャーナル',
        description: 'スグクル株式会社のジャーナル。外国人材、農業、地方創生に関する最新情報をお届けします。',
        keywords: 'ジャーナル, ブログ, ニュース, 外国人材, 農業',
        path: '/journal',
    }),
    marginRate: generatePageMetadata({
        title: 'マージン率等の情報公開',
        description: '労働者派遣法第23条第5項に基づくマージン率等の情報公開。スグクル株式会社。',
        keywords: 'マージン率, 労働者派遣法, 情報公開, スグクル',
        path: '/margin-rate',
    }),
    contact: generatePageMetadata({
        title: 'お問い合わせ',
        description: 'スグクル株式会社へのお問い合わせはこちら。サービスに関するご質問・ご相談をお気軽にお寄せください。',
        keywords: 'お問い合わせ, 問い合わせフォーム, 相談, 見積もり',
        path: '/contact',
    }),
    privacy: generatePageMetadata({
        title: 'プライバシーポリシー',
        description: 'スグクル株式会社のプライバシーポリシー。個人情報の取り扱いについてご説明します。',
        keywords: 'プライバシーポリシー, 個人情報保護, 情報セキュリティ',
        path: '/privacy',
    }),
    legal: generatePageMetadata({
        title: '特定商取引法に基づく表記',
        description: 'スグクル株式会社の特定商取引法に基づく表記。',
        keywords: '特定商取引法, 法的情報',
        path: '/legal',
    }),
    refundPolicy: generatePageMetadata({
        title: '返戻金制度',
        description: 'スグクル株式会社の有料職業紹介サービスにおける返戻金制度についてご案内します。',
        keywords: '返戻金制度, 有料職業紹介, スグクル',
        path: '/refund-policy',
    }),
};
