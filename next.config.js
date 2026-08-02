/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Required for GitHub Pages — serves from /forma-website subfolder
  basePath: isProd ? '/forma-website' : '',
  assetPrefix: isProd ? '/forma-website/' : '',
  // Fixes CSS Modules HMR error in dev mode
  webpack: (config, { dev }) => {
    if (dev) {
      config.optimization.moduleIds = 'named'
    }
    return config
  },
}

module.exports = nextConfig
