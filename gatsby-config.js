/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Balazos. Tu música.",
    titleTemplate: "Un punto de contacto para toda tu música para tu boda.",
    image: "./balazos-logo.png",
    description:
      "Somos Balazos. Un grupo de música. Una orquesta para tu evento. Tocamos en tu boda, feria o evento. Versiones de los años 80. Disfruta de la música y diviértete con nosotros!",
    url: "http://www.balazosdirecto.com", // No trailing slash allowed!
    siteUrl: "http://www.balazosdirecto.com", // No trailing slash allowed!
    twitterUsername: "@balazosdirecto",
    instagramUsername: "@balazosdirecto",
    facebookUsername: "balazosdirecto",
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `1371378923`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bgImages`,
        path: `${__dirname}/static/img/bg`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`,
      },
    }
  ],
}
