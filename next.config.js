/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    reactRoot: true,
  },
}

module.exports = nextConfig
