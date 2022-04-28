/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com", "firebasestorage.googleapis.com"],
  },
  reactStrictMode: true,
  exportTrailingSlash: true,
};

module.exports = nextConfig;
