import { createRemoteJWKSet, jwtVerify } from "jose";

// Google Cloud IAP の JWT を検証するユーティリティ。
// Utility to verify Google Cloud IAP JWT assertions.
// Utilitas untuk memverifikasi assertion JWT Google Cloud IAP.

// IAP の公開鍵（JWK）エンドポイント
const IAP_JWKS = createRemoteJWKSet(
    new URL("https://www.gstatic.com/iap/verify/public_key-jwk")
);

const IAP_ISSUER = "https://cloud.google.com/iap";

export type IapUser = {
    email: string;
    sub: string;
};

/**
 * IAP のアサーションを検証し、認証ユーザー情報を返す。
 * Verify an IAP assertion and return the authenticated user.
 * Memverifikasi assertion IAP dan mengembalikan pengguna terautentikasi.
 *
 * @param assertion - X-Goog-IAP-JWT-Assertion ヘッダの値 / header value / nilai header
 * @param audience - IAP の Audience（環境変数 IAP_AUDIENCE）/ IAP audience / audiens IAP
 */
export async function verifyIapAssertion(
    assertion: string | null | undefined,
    audience: string | undefined
): Promise<IapUser | null> {
    if (!assertion || !audience) return null;
    try {
        const { payload } = await jwtVerify(assertion, IAP_JWKS, {
            issuer: IAP_ISSUER,
            audience,
        });
        const email = typeof payload.email === "string" ? payload.email : "";
        if (!email) return null;
        return { email, sub: String(payload.sub ?? "") };
    } catch (error) {
        // 検証失敗は認証なしとして扱う（ログのみ）
        console.error("IAP assertion verification failed:", error);
        return null;
    }
}
