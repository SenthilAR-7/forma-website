/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // Generates static HTML/CSS/JS → perfect T2B S3
  trailingSlash: true,   // S3 needs trailing slashes T2B clean URLs
  images: {
    unoptimized: true,   // Required T2B static export (no Next.js image server)
  },
  eslint: {
    ignoreDuringBuilds: true, // Don't fail build on lint warnings
  },
}

module.exports = nextConfig