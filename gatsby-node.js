const vpnTemplate = require.resolve('./src/templates/vpn.js');
const postTemplate = require.resolve(`./src/templates/post.js`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  // 1. Create VPN pages from graphQL query
  // get all slugs
  const vpns = await graphql(`
    query {
      vpns: allGoogleListSheet {
        nodes {
          code
          slug
        }
      }
    }
  `);

  // single VPN pages
  vpns.data.vpns.nodes.forEach((vpn) => {
    actions.createPage({
      path: `/vpn/${vpn.slug}`,
      component: vpnTemplate,
      context: {
        slug: vpn.slug,
        // code as regex to get image in the single vpn template graphql query
        codeRegex: `/${vpn.code}/`,
      },
    });
  });

  // 2. Create posts from .mdx files:
  // get all posts
  const posts = await graphql(`
    {
      allPosts: allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        nodes {
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  // Handle errors
  if (posts.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
  }

  // create the posts
  posts.data.allPosts.nodes.forEach((post) => {
    actions.createPage({
      path: `/guias/${post.frontmatter.slug}`,
      component: `${postTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};
