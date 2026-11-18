import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentUpgrade: "security",
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "funerariasaoluiz.com.br" }],
        destination: "https://www.funerariasaoluiz.com.br/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "funerariasaoluiz.vercel.app" }],
        destination: "https://www.funerariasaoluiz.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
