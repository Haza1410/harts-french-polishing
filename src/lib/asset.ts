// Prefixes a /public asset path with the deployment basePath.
//
// Needed because next/image with `unoptimized: true` (static export) does
// not automatically prepend the configured basePath to public assets. On
// GitHub Pages the site is served under /<repo-name>, so images referenced
// as "/images/..." would otherwise 404.

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}
