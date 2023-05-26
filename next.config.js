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
};

module.exports = nextConfig;
