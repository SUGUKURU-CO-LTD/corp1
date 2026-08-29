import { NextResponse } from "next/server";
import snapshot from "@/data/agri-intel.json";

// チーム限定の農業インテリジェンスAPI。IAP配下（middlewareで保護）でのみ到達する。
// Team-only agriculture intelligence API. Reachable only behind IAP (guarded by middleware).
// API intelijen pertanian khusus tim. Hanya dapat diakses di balik IAP (dijaga middleware).

export const dynamic = "force-dynamic";

// ライブ取得の簡易キャッシュ（プロセス内・TTL）
type CacheEntry = { at: number; data: unknown };
let liveCache: CacheEntry | null = null;
const CACHE_TTL_MS = 1000 * 60 * 30; // 30分

/**
 * ライブのAgriOps（Public MCP JP Gateway 経由）プロキシから取得する。
 * Fetch from the live AgriOps proxy (via Public MCP JP Gateway).
 * Mengambil dari proxy AgriOps langsung (via Public MCP JP Gateway).
 *
 * AGRIOPS_PROXY_URL が未設定の場合は null を返し、スナップショットにフォールバックする。
 */
async function fetchLive(): Promise<unknown | null> {
    const url = process.env.AGRIOPS_PROXY_URL;
    if (!url) return null;

    if (liveCache && Date.now() - liveCache.at < CACHE_TTL_MS) {
        return liveCache.data;
    }

    const token = process.env.AGRIOPS_PROXY_TOKEN;
    const headers: Record<string, string> = { accept: "application/json" };
    if (token) headers.authorization = `Bearer ${token}`;

    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000);
        const resp = await fetch(url, { headers, signal: controller.signal, cache: "no-store" });
        clearTimeout(timeout);
        if (!resp.ok) {
            console.error(`AgriOps proxy responded ${resp.status}`);
            return null;
        }
        const data = await resp.json();
        liveCache = { at: Date.now(), data };
        return data;
    } catch (error) {
        console.error("AgriOps live fetch failed, falling back to snapshot:", error);
        return null;
    }
}

export async function GET() {
    const live = await fetchLive();
    if (live) {
        return NextResponse.json({ dataMode: "live", fetchedAt: new Date().toISOString(), data: live });
    }
    return NextResponse.json({
        dataMode: "snapshot",
        fetchedAt: snapshot.meta?.accessed ?? null,
        data: snapshot,
    });
}
