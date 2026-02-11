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
  // Disable automatic static optimization completely
  // This prevents Next.js from trying to pre-render ANY pages during build
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  // Skip trailing slash redirect
  trailingSlash: false,
  // Disable static page generation
  output: 'standalone',
}

module.exports = nextConfig
