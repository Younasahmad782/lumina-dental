const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 414, 640, 768, 1024, 1280, 1600],
    imageSizes: [96, 256, 384],
    minimumCacheTTL: 31536000,
  },
};
export default nextConfig;
