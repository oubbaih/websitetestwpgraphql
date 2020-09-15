const path = require(`path`)
module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allWpCategory {
        edges {
          node {
            name
            uri
          }
        }
      }
    }
  `)
  const CateroryTemplate = path.resolve(`./src/templates/category.js`)

  result.data.allWpCategory.edges.map(({ node }) =>
    createPage({
      path: node.uri,
      component: CateroryTemplate,
      context: { ...node },
    })
  )
}
