import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sugu-kuru.co.jp',
      },
    ],
    // Disable optimization for standalone mode to ensure images display correctly
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
