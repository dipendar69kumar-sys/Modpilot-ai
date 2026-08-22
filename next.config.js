/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.modpilot.com', 'via.placeholder.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig
