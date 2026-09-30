import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow .mdx files as pages and imports
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // The blog was previously published under /posts, and the grant post
  // under its original slug, so keep those old links working.
  async redirects() {
    return [
      { source: '/posts/coefficient-giving-grant', destination: '/blog/cg', permanent: true },
      { source: '/posts', destination: '/blog', permanent: true },
      { source: '/posts/:slug', destination: '/blog/:slug', permanent: true },
    ];
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Content-Security-Policy",
  //           value: `
  //             default-src 'self';
  //             script-src 'self' https://static.ads-twitter.com https://ads-twitter.com https://ads-api.twitter.com https://analytics.twitter.com;
  //             connect-src 'self' https://static.ads-twitter.com https://ads-twitter.com https://ads-api.twitter.com https://analytics.twitter.com;
  //             img-src 'self' https://static.ads-twitter.com https://ads-twitter.com https://ads-api.twitter.com https://analytics.twitter.com;
  //             style-src 'self' 'unsafe-inline';
  //             font-src 'self' https://fonts.gstatic.com;
  //           `.replace(/\s{2,}/g, " ").trim(),
  //         },
  //       ],
  //     },
  //   ];
  // },
};

const withMDX = createMDX({})

// Export the MDX-enhanced config
export default withMDX(nextConfig)
