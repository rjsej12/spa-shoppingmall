/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/shop',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api',
        destination: 'https://file.refilled.co.kr/assignment/product.json',
      },
    ];
  },
  images: {
    domains: ['s3.ap-northeast-2.amazonaws.com'],
  },
};

module.exports = nextConfig;
