//* See: https://www.gatsbyjs.com/docs/gatsby-config/

module.exports = {
  siteMetadata: {
    title: `VPNFácil`,
    author: `@rubenvara01`,
    description: `Elige tu VPN aquí`,
    siteUrl: `https://vpnfacil.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
              showCaptions: ['title'],
              withWebp: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-react-helmet`,
  ],
};
