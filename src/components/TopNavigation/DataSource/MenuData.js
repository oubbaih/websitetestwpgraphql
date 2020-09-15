import { graphql, useStaticQuery } from "gatsby"

export const TopMenuData = () =>
  useStaticQuery(graphql`
    query {
      allWpMenu(filter: { name: { eq: "TopNav" } }) {
        edges {
          node {
            menuItems {
              nodes {
                label
                url
              }
            }
          }
        }
      }
    }
  `)
