import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  rewrites: async () => [
    {
      source: "/__clerk/npm/:path*",
      destination: "https://npm.clerk.dev/:path*",
    },
    {
      source: "/__clerk/:path*",
      destination: "https://frontend-api.clerk.dev/:path*",
    },
  ],
  headers: async () => [
    {
      source: "/api/(.*)",
      headers: [
        {
          key: "Access-Control-Allow-Origin",
          value: "*",
        },
        {
          key: "Access-Control-Allow-Methods",
          value: "GET, POST, PUT, DELETE, OPTIONS",
        },
        {
          key: "Access-Control-Allow-Headers",
          value: "Content-Type, Authorization",
        },
        {
          key: "Content-Range",
          value: "bytes : 0-9/*",
        },
      ],
    },
  ],
};

export default nextConfig;
