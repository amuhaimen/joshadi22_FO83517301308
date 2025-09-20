import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com', 'i.ibb.co'],  // Add i.ibb.co for external image loading
  },
};

export default nextConfig;
