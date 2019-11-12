const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
// Create path to each page (include slug param)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
// Create pages from files
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  // For each Markdown file
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path || node.fields.slug,
      component: path.resolve(`./src/pages/page.js`), // Template
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
