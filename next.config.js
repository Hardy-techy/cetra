/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    reactRoot: true,
  },
  staticPageGenerationTimeout: 180,
}

module.exports = nextConfig
