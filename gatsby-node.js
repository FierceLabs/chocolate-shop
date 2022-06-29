const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allDatoCmsBlog(limit: 1000) {
          edges {
            node {
              id
              slug
              title
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allDatoCmsBlog.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.slug,
        component: blogPost,
        context: {
          slug: post.node.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `ContentfulPost`) {
//     const slug = node.slug
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }
