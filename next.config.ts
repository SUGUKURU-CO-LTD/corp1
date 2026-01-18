import type { NextConfig } from "next";

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

export default nextConfig;
