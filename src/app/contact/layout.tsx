import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

// contact/page.tsx は "use client" のため metadata を直接 export できない。
export const metadata: Metadata = pageMetadata.contact;

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
