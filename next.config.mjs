/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      { hostname: "fakestoreapi.com" },
      { hostname: "images.unsplash.com" },
    ],
      domains: ['i.ebayimg.com', 'www.lilodiamonds.com', 'putstyle.in', 'cdn.shopify.com', 'www.google.com', 'ferkosfinejewelry.com', 'i0.wp.com', 'purplesecret.in'],
  },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },

};

export default nextConfig;
