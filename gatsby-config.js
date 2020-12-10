//* See: https://www.gatsbyjs.com/docs/gatsby-config/

module.exports = {
  siteMetadata: {
    title: `VPNFácil – Elige el Mejor VPN en Español Aquí, muy Fácil`,
    author: `@rubenvara01`,
    description:
      'Necesitas un VPN para ser líbre y anónimo en Internet: tienes decenas para elegir, pero aquí te lo ponemos fácil',
    siteUrl: `https://vpnfacil.com`,
    color: `#b379ec`,
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`, // the best sitemap solution in the world!!!
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'VPN Fácil',
        short_name: 'VPN Fácil',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#b379ec',
        display: 'minimal-ui',
        icon: `src/images/icons/logo-512.png`,
        icons: [
          {
            src: `src/images/icons/logo-192.png`,
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: `src/images/icons/logo-512.png`,
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [`UA-54909104-11`],
      },
    },
  ],
};
