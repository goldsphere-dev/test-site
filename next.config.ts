import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "bodyalignment.co.za" },
      { protocol: "http", hostname: "bodyalignment.co.za" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "truwellness.co.za" },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
