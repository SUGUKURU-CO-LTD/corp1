import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

// services/placement/page.tsx は "use client" のため metadata を直接 export できない。
export const metadata: Metadata = pageMetadata.servicesPlacement;

export default function ServicesPlacementLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
