/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Ten catalogue items use hotlinked Unsplash stock photos (free licence,
    // no attribution required) until real product photography replaces them —
    // see the TODO in lib/products.ts. Everything else ships from /public.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    formats: ["image/avif", "image/webp"],

    // NOTE: the placeholder art in /public is SVG, which there is nothing to
    // optimize in anyway. Rather than enable `dangerouslyAllowSVG`, those images
    // pass `unoptimized` (see `isVector()` in lib/products.ts) and are served
    // straight from /public. Real raster photography added later is optimized
    // normally with no config change needed.
  },
};

export default nextConfig;
