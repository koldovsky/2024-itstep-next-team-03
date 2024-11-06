/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "fakestoreapi.com" }],
    domains: [
      "i.ebayimg.com",
      "www.lilodiamonds.com",
      "putstyle.in",
      "cdn.shopify.com",
      "www.google.com",
      "ferkosfinejewelry.com",
      "i0.wp.com",
      "purplesecret.in",
      "mollyjewelryus.com",
      "www.google.com",
      "tailoredjewel.com.sg",
      "www.tiffanybridalsalon.com",
      "encrypted-tbn0.gstatic.com",
      "cdn.shopify.com",
      "example.com",
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
