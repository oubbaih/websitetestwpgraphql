import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
const RelatedPosts = ({ categoryname }) => {
  const { allWpCategory } = useStaticQuery(graphql`
    query {
      allWpCategory {
        edges {
          node {
            name
            posts {
              nodes {
                title
                slug
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid_tracedSVG
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
    <>
      <Name>related posts</Name>
      <Wrap>
        {allWpCategory.edges.map(
          (cat, index) =>
            cat.node.name === categoryname &&
            cat.node.posts.nodes.slice(0, 6).map((post, index) => (
              <Card key={index}>
                {post.featuredImage !== null && (
                  <Image
                    fluid={
                      post.featuredImage.node.localFile.childImageSharp.fluid
                    }
                  />
                )}
                <Title>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </Title>
              </Card>
            ))
        )}
      </Wrap>
    </>
  )
}

export default RelatedPosts

const Name = styled.p`
  text-transform: uppercase;
  color: ${props => props.theme.colors.orange};
  margin: 2rem 0;
  font-weight: 600;
`
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 384px) {
    flex-direction: column;
    justify-content: center;
    & > div {
      flex: 1;
      margin-top: 1rem;
    }
  }
`
const Card = styled.div`
  flex-basis: 30%;
`
const Image = styled(Img)`
  height: 10rem;
`

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  text-transform: capitalize;
  &:hover {
    color: ${props => props.theme.colors.orange};
  }
`
