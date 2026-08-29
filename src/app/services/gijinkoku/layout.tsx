import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

// services/gijinkoku/page.tsx は "use client" のため metadata を直接 export できない。
export const metadata: Metadata = pageMetadata.servicesGijinkoku;

export default function ServicesGijinkokuLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
