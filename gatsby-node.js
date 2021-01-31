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
      component: require.resolve(`./src/templates/vpn.js`),
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
      component: require.resolve(`./src/templates/post.js`),
      context: {
        slug: post.frontmatter.slug,
      },
    });
  });
};
