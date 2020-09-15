import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { gql, useQuery } from "@apollo/client"
import Card from "./Card"
import styled from "styled-components"
const POSTS_VIEWS_IMPLEMENT = gql`
  query MyQuery {
    posts(first: 200) {
      nodes {
        postViews
        id
      }
    }
  }
`

const MostReadPosts = () => {
  const { allWpPost } = useStaticQuery(graphql`
    query {
      allWpPost {
        edges {
          node {
            slug
            id
            categories {
              nodes {
                name
              }
            }
            postViews
            title
            id
            date
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
  `)
  const GlobalArray = allWpPost.edges

  const { loading, error, data } = useQuery(POSTS_VIEWS_IMPLEMENT, {
    variables: { pollInterval: 500 },
  })
  if (loading)
    return (
      <StyledLoading>
        <p>loading ...</p>
      </StyledLoading>
    )
  if (error) return <p style={{ opacity: 0 }}>error ...</p>

  let newArr = []
  data.posts.nodes.map(post => {
    newArr.push(post)
    return null
  })
  const ne = newArr.sort(function (a, b) {
    return b.postViews - a.postViews
  })
  const NewArrrrr = ne.slice(0, 6)
  let idFilter = NewArrrrr.map(idItem => idItem.id)
  let golabalarrr = GlobalArray.filter(item => idFilter.includes(item.node.id))
  return (
    <>
      <H2>most read</H2>
      <MostRead>
        {golabalarrr.map((post, ind) => (
          <Card
            key={ind}
            sourceurl={
              post.node.featuredImage.node.localFile.childImageSharp.fluid
            }
            categoryname={post.node.categories.nodes[0].name}
            title={post.node.title}
            authorname={post.node.author.node.name}
            date={post.node.date}
            url={`/blog/${post.node.slug}`}
            idpst={post.node.id}
          />
        ))}
      </MostRead>
    </>
  )
}

export default MostReadPosts
const StyledLoading = styled.div`
  height: 20rem;
  width: 100%;
  display: flex;
  & > p {
    margin: auto;
    text-transform: capitalize;
    color: #fff;
  }
  background-color: #777;
`
const MostRead = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const H2 = styled.h2`
  text-transform: capitalize;
  font-size: 3rem;
  font-weight: bold;
  color: ${props => props.theme.colors.orange};
  margin-bottom: 5rem;
`
