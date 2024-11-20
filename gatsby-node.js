// gatsby-node.js
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Check if the node is of type MDX
  if (node.internal.type === 'Mdx') {
    const parent = getNode(node.parent);

    // Add sourceInstanceName from parent node if it exists
    if (parent && parent.sourceInstanceName) {
      createNodeField({
        node,
        name: 'sourceInstanceName',
        value: parent.sourceInstanceName,
      });
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(`src/templates/project-template.js`);

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/projects/${node.frontmatter.slug}`,
      component: projectTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
