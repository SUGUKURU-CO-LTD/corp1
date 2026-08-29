import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

// careers/page.tsx は "use client" のため metadata を直接 export できない。
export const metadata: Metadata = pageMetadata.careers;

export default function CareersLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
