/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    return config
  },

  swcMinify: true,
  reactStrictMode: true,
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)
