require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "gatsby website",
    description: "theme ",
    author: "oubbaih",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-sitemap`,
    // {
    //   resolve: "gatsby-plugin-robots-txt",
    //   options: {
    //     host: process.env.URL_DOMAIN,
    //     sitemap: `${process.env.URL_DOMAIN}/sitemap.xml`,
    //     policy: [{ userAgent: "*", allow: "/" }],
    //   },
    // },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-manifest`,
    //wordpress setup url
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `${process.env.WORDPRESS_SITE_URL}graphql`,
        debug: {
          graphql: {
            showQueryVarsOnError: true,
            copyQueryOnError: true,
          },
        },
        schema: {
          perPage: 1,
        },
      },
    },
    //image inline setup
    {
      resolve: "gatsby-wpgraphql-inline-images",
      options: {
        wordPressUrl: process.env.WORDPRESS_SITE_URL,
        uploadsUrl: `${process.env.WORDPRESS_SITE_URL}wp-content/uploads/}`,
        processPostTypes: ["Page", "Post"],
        graphqlTypeName: "WPGraphQL",
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: process.env.CUSTOM_URL_API_TO_FETCH_DATA_EXTERNAL,
        rootKey: "FooterWidgetCustopmApi",
      },
    },
    // /* ////google analytics setup */
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.YOUR_GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    //setup or google font
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [process.env.FONT_NAME_FIRST, process.env.FONT_NAME_SECOND],
        display: "swap",
      },
    },

    //this (optional) plugin enables Progressive Web App + Offline functionality
    //To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/blog/*`, `/category/*`, `/*`],
      },
    },
  ],
}
