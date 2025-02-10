/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Remove serverActions as it's now default
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Disable cache to prevent stale builds
    config.cache = false
    
    // Handle node core modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      punycode: false,
      querystring: false,
      url: false,
      string_decoder: false,
      buffer: false,
      events: false
    }

    return config
  },
}

module.exports = nextConfig 