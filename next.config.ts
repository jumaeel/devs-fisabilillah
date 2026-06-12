import type { NextConfig } from "next";

// On GitHub Pages the site is served from https://<user>.github.io/<repo>/,
// so we need a basePath. The deploy workflow sets PAGES_BASE_PATH automatically;
// locally it's empty so `npm run dev` works at "/".
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
