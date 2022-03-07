const withPWA = require('next-pwa')
/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  pwa: {
    dest: 'public',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
});

module.exports = nextConfig
