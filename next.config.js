/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: '/build',
  images: {
    loader: 'custom',
    path: '/',
    domains: ['placedog.net', 'unsplash.com', 'localhost:3000'],
  }
}

module.exports = nextConfig
