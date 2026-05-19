import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pavcon.ca",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "http",
        hostname: "pavcon.ca",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
