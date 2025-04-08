import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
  assetPrefix: '/tescobit/official-website/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
