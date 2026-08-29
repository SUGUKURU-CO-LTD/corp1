import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

// services/page.tsx は "use client" のため metadata を直接 export できない。
export const metadata: Metadata = pageMetadata.services;

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
