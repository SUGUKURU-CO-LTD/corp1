import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

// cases/page.tsx は "use client" のため metadata を直接 export できない。
export const metadata: Metadata = pageMetadata.cases;

export default function CasesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
