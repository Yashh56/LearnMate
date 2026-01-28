/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "utfs.io"
    ]
  },
  // Generate unique build IDs for better cache busting
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
  // Configure chunk splitting behavior
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  }
}

module.exports = nextConfig

