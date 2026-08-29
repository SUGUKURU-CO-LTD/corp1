import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

// services/dispatch/page.tsx は "use client" のため metadata を直接 export できない。
export const metadata: Metadata = pageMetadata.servicesDispatch;

export default function ServicesDispatchLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
