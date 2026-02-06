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
        keywords: keywords || '農業派遣, 外国人材, 特定技能, 農作業受託, IT開発, 鹿児島, スグクル',
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
        description: '鹿児島・霧島を拠点に、農業派遣・農作業受託・有料職業紹介・IT事業を展開するスグクル株式会社の会社概要。企業理念、沿革、拠点情報をご紹介します。',
        keywords: '会社概要, スグクル, 企業情報, 鹿児島, 霧島, 農業派遣',
        path: '/about',
    }),
    services: generatePageMetadata({
        title: 'サービス一覧',
        description: 'スグクル株式会社が提供する農業派遣、農作業受託、有料職業紹介、IT事業の各サービスをご紹介。日本の農業を外国人材の力で支えます。',
        keywords: 'サービス, 農業派遣, 農作業受託, 有料職業紹介, IT事業, 特定技能',
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
        description: '農業分野における有料職業紹介サービス。紹介予定派遣で最適な人材をマッチングします。',
        keywords: '有料職業紹介, 人材紹介, 紹介予定派遣, 農業人材',
        path: '/services/placement',
    }),
    servicesIt: generatePageMetadata({
        title: 'IT事業',
        description: 'システム開発・コンサルティングを通じて、農業のDX化を推進。SUGUSTA、NENKIN-PASSなど自社プロダクトも展開。',
        keywords: 'IT事業, システム開発, DX, 農業IT, SUGUSTA, NENKIN-PASS',
        path: '/services/it',
    }),
    cases: generatePageMetadata({
        title: '導入事例',
        description: 'スグクル株式会社のサービス導入事例をご紹介。全国各地の農業現場で活躍する外国人材の実績をご覧ください。',
        keywords: '導入事例, 実績, 成功事例, 農業派遣実績',
        path: '/cases',
    }),
    sugusta: generatePageMetadata({
        title: 'SUGUSTA - 学習支援プラットフォーム',
        description: 'SUGUSTAは外国人材向けの学習支援プラットフォーム。日本語学習から農業技能まで、総合的にサポートします。',
        keywords: 'SUGUSTA, 学習支援, 日本語学習, 農業技能, eラーニング',
        path: '/sugusta',
    }),
    careers: generatePageMetadata({
        title: '採用情報',
        description: 'スグクル株式会社の採用情報。一緒に日本の農業を支える仲間を募集しています。',
        keywords: '採用情報, 求人, リクルート, キャリア, 農業派遣求人',
        path: '/careers',
    }),
    journal: generatePageMetadata({
        title: 'ジャーナル',
        description: 'スグクル株式会社のジャーナル。農業、外国人材、地方創生に関する最新情報をお届けします。',
        keywords: 'ジャーナル, ブログ, ニュース, 農業情報',
        path: '/journal',
    }),
    compliance: generatePageMetadata({
        title: 'コンプライアンス',
        description: 'スグクル株式会社のコンプライアンス方針。法令遵守と倫理的な事業運営に取り組んでいます。',
        keywords: 'コンプライアンス, 法令遵守, 企業倫理',
        path: '/compliance',
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
};
