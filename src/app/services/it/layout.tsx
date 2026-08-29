import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

// services/it/page.tsx は "use client" のため metadata を直接 export できない。
export const metadata: Metadata = pageMetadata.servicesIt;

export default function ServicesItLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
