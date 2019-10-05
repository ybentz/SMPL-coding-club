// Make .env.* available to node scripts
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config = {
  siteMetadata: {
    title: `SMPL Coding Club`,
    description: `Start your journey in the wonderful world of programming`,
    author: `Yonatan Bentzur`,
    siteUrl: `${process.env.HOSTNAME}`,
    logo: `/images/SMPL-logo-text.png`,
    twitterUsername: '@ybentzur',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
