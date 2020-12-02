require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const axios = require('axios');
const { awsConfig } = require('./config');

async function getVpns() {
  const response = await axios.get(process.env.ENDPOINT, awsConfig);
  if (response.data.statusCode !== 200) {
    // eslint-disable-next-line no-console
    console.error('some error.....');
    return [];
  }
  return response.data.body;
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  // 1. Create VPN pages from API (single vpns and index page):
  // fetch data
  const allVpns = await getVpns();
  const count = allVpns.length;

  // list all
  actions.createPage({
    path: `/`,
    component: require.resolve('./src/templates/all.js'),
    context: { allVpns, count },
  });

  // each VPN
  allVpns.forEach((vpn) => {
    actions.createPage({
      path: `/vpn/${vpn.slug}/`,
      component: require.resolve('./src/templates/vpn.js'),
      context: { allVpns, vpn },
    });
  });

  // 2. Create posts from .mdx files:
  // get all posts
  const { errors, data } = await graphql(`
    {
      allPosts: allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  // Handle errors
  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
  }

  // create the posts
  data.allPosts.nodes.forEach((post) => {
    actions.createPage({
      path: `/guias/${post.frontmatter.slug}`,
      component: require.resolve(`./src/templates/post.js`),
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};
