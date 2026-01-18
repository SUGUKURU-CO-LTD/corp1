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
    // Ensure images work in standalone mode
    unoptimized: false,
  },
};

export default nextConfig;
