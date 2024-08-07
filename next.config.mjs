/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/info',
        permanent: false,
      }
    ]
  }
};

export default nextConfig;
