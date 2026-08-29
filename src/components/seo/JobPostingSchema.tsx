import { COMPANY_NAME, COMPANY_ADDRESS } from "@/lib/company";
import { KM_WORK_LOCATION, KM_HOURLY_WAGE_JPY, KM_CONTENT_DATE } from "@/lib/jobs/kagoshima-material";

interface JobPostingSchemaProps {
    /** JSON-LD の @id / script id 用の一意キー（ページごとに固有のもの） */
    id: string;
    title: string;
    description: string;
}

/**
 * JobPosting構造化データ（1ページ1求人）。
 *
 * 意図的に next/script は使用しない。next/script はクライアント側での
 * スクリプト注入・実行タイミング制御を目的としたコンポーネントであり、
 * ここでは「JavaScript実行前の初期HTMLに存在すること」を確実にするため、
 * サーバーコンポーネントから素の <script type="application/ld+json"> を
 * 直接出力する。
 *
 * 含めないもの（一次資料未確認のため）:
 * - 月収概算（約28.9万円）をbaseSalaryにすること（時給のみ登録）
 * - 労働者派遣事業許可番号（社内で複数の番号が併存し一次資料未確認のため）
 * - 有料職業紹介事業許可番号（今回のLPでは必須ではないため未掲載）
 * - validThrough（募集終了日が未確定のため推測しない）
 * - 募集人数（totalJobOpenings。未確認のため推測しない）
 * - 直接雇用後の給与・賞与等の条件（鹿児島マテリアルの正式資料未確認のため）
 */
export function JobPostingSchema({ id, title, description }: JobPostingSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title,
        description,
        datePosted: KM_CONTENT_DATE,
        hiringOrganization: {
            "@type": "Organization",
            name: `${COMPANY_NAME} / Sugukuru Co., Ltd.`,
            sameAs: "https://sugu-kuru.co.jp",
            address: {
                "@type": "PostalAddress",
                ...COMPANY_ADDRESS,
            },
        },
        jobLocation: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                streetAddress: KM_WORK_LOCATION.streetAddress,
                addressLocality: KM_WORK_LOCATION.addressLocality,
                addressRegion: KM_WORK_LOCATION.addressRegion,
                postalCode: KM_WORK_LOCATION.postalCode,
                addressCountry: KM_WORK_LOCATION.addressCountry,
            },
        },
        // 最初の6か月はスグクル株式会社の紹介予定派遣（実働はフルタイム相当）であり、
        // 直接雇用が確定した状態を表すものではない。両者の実態を反映するため配列で表現する。
        employmentType: ["FULL_TIME", "TEMPORARY"],
        baseSalary: {
            "@type": "MonetaryAmount",
            currency: "JPY",
            value: {
                "@type": "QuantitativeValue",
                value: KM_HOURLY_WAGE_JPY,
                unitText: "HOUR",
            },
        },
    };

    return (
        <script
            type="application/ld+json"
            id={`jobposting-schema-${id}`}
            // next/scriptを使わず、サーバーコンポーネントの初期HTMLへ直接出力する
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
