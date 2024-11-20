/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

const {
  author,
  siteTitle,
  aboutTitle,
  aboutDescription,
  siteShortTitle,
  siteDescription,
  siteIcon,
  siteUrl,
  googleAnalyticsTrackingId,
  colors,
  imageSrc,
} = require(`./config`);

module.exports = {
  siteMetadata: {
    author: author,
    title: siteTitle,
    about: aboutTitle,
    aboutDescription: aboutDescription,
    description: siteDescription,
    siteUrl: siteUrl,
    imageSrc: imageSrc,
  },
  plugins: [
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteShortTitle,
        start_url: `/`,
        background_color: colors.lightTheme.background,
        theme_color: colors.lightTheme.primary,
        display: `minimal-ui`,
        icon: siteIcon, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 80,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/`, // Path to your markdown files
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/index/hero`,
        name: `hero`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/index/about`,
    //     name: `about`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/index/projects`,
    //     name: `projects`,
    //   },
    // },
  ],
};
