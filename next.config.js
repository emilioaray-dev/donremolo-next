const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
});

module.exports = nextConfig
