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
            homepage {
              adsbanner
            }
          }
        }
      }
    }
  `)
  const HomePage = path.resolve(`./src/templates/index.js`)
  result.data.allWpPage.edges.map(({ node }) => {
    const SlugName = node.slug
    let slugUrl = ""
    if (SlugName.toLowerCase() === "home") {
      slugUrl = "/"
      createPage({
        path: `${slugUrl}`,
        component: `${HomePage}`,
        context: { ...node },
      })
    }
  })
}
