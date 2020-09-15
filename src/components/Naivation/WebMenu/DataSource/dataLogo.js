import { graphql, useStaticQuery } from "gatsby"

export const LogoData = () =>
  useStaticQuery(graphql`
    query {
      wp {
        getHeader {
          logo
        }
      }
    }
  `)
