import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true,
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
