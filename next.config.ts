import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
  // React Compiler は Framer Motion のアニメーションと相性が悪く、
  // ヒーロー等の初期状態（opacity:0, clipPath:inset(0 100% 0 0)）から
  // 復帰しない問題が発生したため、一時的に無効化する。
  // React Compiler is incompatible with Framer Motion animations and caused
  // elements to get stuck in their initial hidden state. Temporarily disabled.
  // React Compiler tidak kompatibel dengan animasi Framer Motion sehingga
  // elemen terjebak pada kondisi awal (tersembunyi). Dinonaktifkan sementara.
  // reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sugu-kuru.co.jp',
      },
    ],
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
