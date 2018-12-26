module.exports = {
  siteMetadata: {
    title: `Ryan Willpower`,
    description: `This site show how is my skill in past year.`,
    author: `Surasak Chaisurin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/markdown`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ryan Willpower's portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#696969`,
        display: `fullscreen`,
        icon: `src/images/willpower-logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
