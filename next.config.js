/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
    facebook_id: process.env.NEXT_PUBLIC_FACEBOOK_ID,
    facebook_secret: process.env.NEXT_PUBLIC_FACEBOOK_SECRET,
    api_key: process.env.API_KEY,
  },
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
