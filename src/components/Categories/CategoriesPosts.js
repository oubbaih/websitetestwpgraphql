import React from "react"
import styled from "styled-components"
import CateCard from "./cateCard"
import { graphql, useStaticQuery } from "gatsby"
const CategoriesPosts = () => {
  const { allWpCategory } = useStaticQuery(graphql`
    query {
      allWpCategory {
        edges {
          node {
            name
            posts {
              nodes {
                title
                date
                slug
                author {
                  node {
                    name
                  }
                }
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Categories>
      {allWpCategory.edges.map((cat, idexx) => (
        <CateCard
          categorytitle={cat.node.name}
          dataPosts={cat.node.posts.nodes}
          key={idexx}
        />
      ))}
    </Categories>
  )
}

export default CategoriesPosts

const Categories = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
