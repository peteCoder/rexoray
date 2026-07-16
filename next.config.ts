import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // Remove all these domain later and replace with sanity
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    // Locally generated service banners are SVG; safe since we control the content.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },
};

export default nextConfig;
