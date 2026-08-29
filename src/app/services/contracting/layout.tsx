import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

// services/contracting/page.tsx は "use client" のため metadata を直接 export できない。
export const metadata: Metadata = pageMetadata.servicesContracting;

export default function ServicesContractingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
