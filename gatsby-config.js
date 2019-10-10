// Make .env.* available to node scripts
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

// Setup for robots.txt plugin - disallow all on Netlify deploy previews
const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = `${process.env.HOSTNAME}`,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

const config = {
  siteMetadata: {
    title: `SMPL Coding Club`,
    description: `Start your journey in the wonderful world of programming`,
    author: `Yonatan Bentzur`,
    siteUrl,
    logo: `/images/SMPL-logo-text.png`,
    twitterUsername: '@ybentzur',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SMPL Coding Club`,
        short_name: `Coding Club`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#6100FF`,
        display: `standalone`,
        icon: `src/images/SMPL-logo-text-white.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
  ],
}

if (process.env.GOOGLE_ANALYTICS_ID) {
  config.plugins = [
    ...config.plugins,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        pluginConfig: {
          // Put GA script at the end of the body
          head: false,
        },
        trackingIds: [process.env.GOOGLE_ANALYTICS_ID],
      },
    },
  ]
}

module.exports = config
