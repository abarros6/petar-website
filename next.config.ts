import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dxx7wooza/**",
      },
      {
        protocol: "https",
        hostname: "pavcon.ca",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
