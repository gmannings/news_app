/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.usatoday.com',
        port: '',
        pathname: '/gcdn/authoring/authoring-images/**',
      },
    ],
  },
};

export default nextConfig;
