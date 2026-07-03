import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const basePath = isProd && repoName ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // For GitHub Pages: serve the site under /<repo-name>
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  trailingSlash: true,
  // Exposed so we can prefix /public asset paths (next/image with
  // `unoptimized` does NOT auto-prepend basePath to public assets).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
