import { graphql, useStaticQuery } from "gatsby"

export const PrimaryMenuData = () =>
  useStaticQuery(graphql`
    query {
      allWpMenu(filter: { name: { eq: "Primary" } }) {
        nodes {
          name
          menuItems {
            nodes {
              url
              label
              childItems {
                nodes {
                  url
                  label
                }
              }
            }
          }
        }
      }
    }
  `)
