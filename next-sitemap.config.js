/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.iconfacilitys.com.au',
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
