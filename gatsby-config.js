module.exports = {
  siteMetadata: {
    title: `cdltbisou`,
    description: `web + créa + et caetera. `,
    author: `camille villard`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
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
        icon: `src/images/cdltbisou-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/ // See below to configure properly
        }
      }
    },

    // enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`,
  ],
}
