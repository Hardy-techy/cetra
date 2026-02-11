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
  // Remove static page generation timeout - we're not using static generation
  // All pages use getServerSideProps for server-side rendering only
}

module.exports = nextConfig
