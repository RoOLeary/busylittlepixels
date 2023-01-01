/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    path: '/',
    domains: ['placedog.net', 'unsplash.com', 'localhost:3000'],
  }
}

module.exports = nextConfig
