/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? "/nextjs-mantine/" : "",
};

module.exports = nextConfig;
