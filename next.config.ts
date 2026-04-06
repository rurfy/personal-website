import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/beerpong/privacy-policy',
        destination: '/beerpong/privacy-policy/index.html',
      },
      {
        source: '/beerpong/privacy-policy/',
        destination: '/beerpong/privacy-policy/index.html',
      },
      {
        source: '/beerpong/data-deletion',
        destination: '/beerpong/data-deletion/index.html',
      },
      {
        source: '/beerpong/data-deletion/',
        destination: '/beerpong/data-deletion/index.html',
      },
      {
        source: '/beerpong/terms-of-service',
        destination: '/beerpong/terms-of-service/index.html',
      },
      {
        source: '/beerpong/terms-of-service/',
        destination: '/beerpong/terms-of-service/index.html',
      },
    ]
  },
}

export default nextConfig
