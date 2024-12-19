import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true
  }
  // devIndicators: { appIsrStatus: false }
}

export default nextConfig
