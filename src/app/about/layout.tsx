import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

// about/page.tsx は "use client" のため metadata を直接 export できない。
// 同ディレクトリに layout.tsx を置くことで付与する（src/app/team/layout.tsx と同じ手法）。
export const metadata: Metadata = pageMetadata.about;

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
