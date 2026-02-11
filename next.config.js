/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  target: 'server',
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    reactRoot: true,
  },
  staticPageGenerationTimeout: 180,
  // Disable static optimization for all pages
  exportPathMap: async function () {
    return {}
  },
}

module.exports = nextConfig
