const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'cdn-icons-png.flaticon.com'],
  },
  output: 'export', // for static export (optional if using `next export`)
};

export default nextConfig;
