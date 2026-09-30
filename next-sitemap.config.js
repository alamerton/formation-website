const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

// Unlisted posts (frontmatter `unlisted: true`) stay out of the sitemap.
const postsDirectory = path.join(__dirname, 'src', 'posts')
const unlistedPosts = fs
  .readdirSync(postsDirectory)
  .filter((filename) => filename.endsWith('.md'))
  .filter((filename) => matter(fs.readFileSync(path.join(postsDirectory, filename), 'utf8')).data.unlisted)
  .map((filename) => `/blog/${filename.replace(/\.md$/, '')}`)

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.formationresearch.com', 
  generateRobotsTxt: false,
  // The link-preview images are routes too, but not pages.
  exclude: [...unlistedPosts, '/opengraph-image*', '/twitter-image*'],
}
