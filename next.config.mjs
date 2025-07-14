// next.config.mjs
export default {
  async rewrites() {
    return [
      { source: '/nepal-shram', destination: '/' },
      { source: '/shram-swikriti', destination: '/' },
      { source: '/labor-permit-nepal', destination: '/' },
      { source: '/श्रम-स्वीकृति', destination: '/' },
    ];
  },
  async redirects() {
    return [
      { source: '/index', destination: '/', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
