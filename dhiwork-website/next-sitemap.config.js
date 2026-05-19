/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.dhiworksolutions.com',
  generateRobotsTxt: true,
  outDir: 'out',
  exclude: ['/api/*'],
}
