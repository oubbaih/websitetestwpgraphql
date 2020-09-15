import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import moment from "moment"
import StyleCard from "./StleCard"
import SidePopularPosts from "./SidePopularPosts"
import styled from "styled-components"
const SideLatestPost = () => {
  // moment(dat).format(" - dddd MMMM,YYYY")
  //imagesource, title, date
  const { allWpPost } = useStaticQuery(graphql`
    query {
      allWpPost(limit: 12) {
        nodes {
          title
          slug
          date
          featuredImage {
            node {
              remoteFile {
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
  `)
  const populaPost = allWpPost.nodes.slice(0, 6)
  const Latest = allWpPost.nodes.slice(6, 12)
  return (
    <Box>
      <Name>popular posts</Name>
      {populaPost.map((post, index) => (
        <StyleCard
          imagesource={post.featuredImage.node.remoteFile.childImageSharp.fluid}
          title={post.title}
          date={moment(post.date).format("dddd MMMM,YYYY")}
          slug={`/blog/${post.slug}`}
          key={index}
        />
      ))}
      <Name>latest posts</Name>
      <SidePopularPosts data={Latest} />
    </Box>
  )
}

export default SideLatestPost

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Name = styled.p`
  text-transform: capitalize;
  font-size: 1.7rem;
  font-weight: bold;
  margin: 2rem 0;
`
