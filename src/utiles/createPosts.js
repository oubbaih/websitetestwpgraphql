const path = require(`path`)
// const { paginate } = require("gatsby-awesome-pagination")
module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allWpPost(limit: 1000) {
        edges {
          node {
            slug
            title
            content
            uri
            id
          }
        }
      }
    }
  `)
  const BlogTemplate = path.resolve(`./src/templates/blog.js`)
  const pluginOptions = {
    wordPressUrl: process.env.WORDPRESS_SITE_URL,
    uploadsUrl: `${process.env.WORDPRESS_SITE_URL}wp-content/uploads/`,
  }

  // paginate({
  //   createPage,
  //   items: result.data.allWpPost.edges,
  //   itemsPerPage: 9,
  //   pathPrefix: "/blog",
  //   component: path.resolve(`./src/templates/blogPaginate.js`),
  // })
  //./src/templates/blogPaginate.js
  result.data.allWpPost.edges.map(({ node }) =>
    createPage({
      path: `/blog/${node.slug}`,
      component: BlogTemplate,
      context: { ...node, pluginOptions },
    })
  )
}
