import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
    reactCompiler: true
  },
  typescript: {
    ignoreBuildErrors: false
  },
  eslint: {
    ignoreDuringBuilds: false
  },
  images: {
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bevgyjm5apuichhj.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
        search: ''
      }
    ]
  }
  // devIndicators: { appIsrStatus: false }
}

export default nextConfig
