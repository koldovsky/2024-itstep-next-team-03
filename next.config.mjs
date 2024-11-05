/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "fakestoreapi.com" },
      { hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
