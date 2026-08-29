import { NextResponse, type NextRequest } from "next/server";
import { verifyIapAssertion } from "@/lib/iap";

// チーム限定エリア（/team・/api/team）を IAP で保護する Proxy（旧 middleware）。
// Proxy (formerly middleware) protecting the team-only area (/team, /api/team) with IAP.
// Proxy (dahulu middleware) yang melindungi area khusus tim (/team, /api/team) dengan IAP.

function isDevBypass(): boolean {
    // 明示的なバイパス、または本番以外でIAP未設定のときのみローカル開発を許可する。
    // Allow local dev only via explicit bypass, or non-prod without IAP configured.
    // Izinkan dev lokal hanya via bypass eksplisit, atau non-prod tanpa IAP.
    if (process.env.TEAM_DEV_BYPASS === "1") return true;
    if (process.env.NODE_ENV !== "production" && !process.env.IAP_AUDIENCE) return true;
    return false;
}

export async function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const isApi = pathname.startsWith("/api/");

    if (isDevBypass()) {
        const res = NextResponse.next();
        res.headers.set("x-team-user", "dev@local");
        return res;
    }

    const assertion = req.headers.get("x-goog-iap-jwt-assertion");
    const audience = process.env.IAP_AUDIENCE;
    const user = await verifyIapAssertion(assertion, audience);

    if (!user) {
        if (isApi) {
            return NextResponse.json(
                {
                    error: "unauthorized",
                    message:
                        "このAPIはチーム限定です。Google Cloud IAP による認証が必要です。",
                },
                { status: 401 }
            );
        }
        return new NextResponse(
            "401 Unauthorized — チーム限定エリアです。社内アカウントでアクセスしてください。",
            { status: 401, headers: { "content-type": "text/plain; charset=utf-8" } }
        );
    }

    const res = NextResponse.next();
    res.headers.set("x-team-user", user.email);
    return res;
}

export const config = {
    matcher: ["/team", "/team/:path*", "/api/team/:path*"],
};
