exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query MyQuery {
      allContentfulBlogPost {
        nodes {
          body {
            body
          }
          createdAt
          slug
          title
        }
      }
    }
  `);

  data.allContentfulBlogPost.nodes.forEach((node) => {
    const slug = node.slug;
    actions.createPage({
      path: `blog/${slug}`,
      component: require.resolve(`../../src/templates/BlogPostTemplate.js`),
      context: { slug },
    });
  });
};
