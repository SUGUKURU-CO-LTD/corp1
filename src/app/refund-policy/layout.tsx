import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

// refund-policy/page.tsx は "use client" のため metadata を直接 export できない。
export const metadata: Metadata = pageMetadata.refundPolicy;

export default function RefundPolicyLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
