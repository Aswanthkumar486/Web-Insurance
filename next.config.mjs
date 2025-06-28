/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  images: {
    unoptimized: true,
    domains: ['www.bing.com', 'example.com', 'images.unsplash.com'],
  },
  basePath: isProd ? '/Web-Logistics' : '',
  assetPrefix: isProd ? '/Web-Logistics/' : '',
};

export default nextConfig;
