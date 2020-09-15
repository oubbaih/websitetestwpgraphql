const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allWpPage {
        edges {
          node {
            slug
            title
          }
        }
      }
    }
  `)
  const BlogTemplate = path.resolve(`./src/templates/page.js`)
  result.data.allWpPage.edges.map(({ node }) => {
    const SlugName = node.slug
    let slugUrl = ""
    if (SlugName.toLowerCase() !== "home") {
      slugUrl = SlugName
      createPage({
        path: `${slugUrl}`,
        component: `${BlogTemplate}`,
        context: { ...node },
      })
    }
  })
}
