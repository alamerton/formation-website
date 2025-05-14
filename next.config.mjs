import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow .mdx files as pages and imports
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // ...add any other Next.js config options you need
}

const withMDX = createMDX({})

// Export the MDX-enhanced config
export default withMDX(nextConfig)
