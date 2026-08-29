import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

// privacy/page.tsx は "use client" のため metadata を直接 export できない。
export const metadata: Metadata = pageMetadata.privacy;

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
