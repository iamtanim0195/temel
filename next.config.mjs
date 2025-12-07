/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
    ],
  },
  allowedDevOrigins: ["http://localhost:3000", "http:192.168.2.101:3000"],
};

export default nextConfig;
