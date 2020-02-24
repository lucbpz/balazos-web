/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `balazosdirecto`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `members`,
        path: `${__dirname}/content/members`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `services`,
        path: `${__dirname}/content/services`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `references`,
        path: `${__dirname}/content/references`,
      },
    },
  ],
}
