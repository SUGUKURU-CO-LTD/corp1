import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

// legal/page.tsx は "use client" のため metadata を直接 export できない。
export const metadata: Metadata = pageMetadata.legal;

export default function LegalLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
