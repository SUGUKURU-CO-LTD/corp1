import type { Metadata } from "next";

// チーム限定エリアは検索エンジンにインデックスさせない。
// Do not index the team-only area in search engines.
// Jangan indeks area khusus tim di mesin pencari.
export const metadata: Metadata = {
    title: "チーム限定 | スグクル",
    robots: { index: false, follow: false },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
