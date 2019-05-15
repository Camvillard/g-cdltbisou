module.exports = {
  siteMetadata: {
    title: `Gatsby Starter ++`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    seo: [`cdltbisou`, `direction artistique`, `développement web`, `créa`, `web`]
  },
  plugins: [
  // stuff for head document (SEO etc)
    `gatsby-plugin-react-helmet`,
    //  sourcing data into your Gatsby application from your local filesystem.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // sass styles
    `gatsby-plugin-sass`,
    // markdown transformer
    `gatsby-transformer-remark`,
    // stuff for save your web application to their smartphone home screen
    // so it behaves similar to native apps
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`,
  ],
}
