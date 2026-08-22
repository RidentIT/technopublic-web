/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // All imagery currently ships from /public as local assets, so no remote
    // patterns are required. If real product photography is later served from a
    // CDN, whitelist the host here, e.g.:
    // remotePatterns: [{ protocol: "https", hostname: "cdn.example.com" }],
    formats: ["image/avif", "image/webp"],

    // NOTE: the placeholder art in /public is SVG, which there is nothing to
    // optimize in anyway. Rather than enable `dangerouslyAllowSVG`, those images
    // pass `unoptimized` (see `isVector()` in lib/products.ts) and are served
    // straight from /public. Real raster photography added later is optimized
    // normally with no config change needed.
  },
};

export default nextConfig;
