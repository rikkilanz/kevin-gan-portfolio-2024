import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'kevinganportfolio.opusspace.ca',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
