import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
  assetPrefix: '/tescobit.github.io/official-website/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
