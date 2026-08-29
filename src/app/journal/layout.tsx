import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

// journal/page.tsx は "use client" のため metadata を直接 export できない。
export const metadata: Metadata = pageMetadata.journal;

export default function JournalLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
