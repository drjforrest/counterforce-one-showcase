import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Serve documentation at /docs/* path
      {
        source: '/docs/:path*',
        destination: '/docs/:path*' // Static files from public/docs
      }
    ];
  },
  trailingSlash: true, // Important for static site generation
};

export default nextConfig;
