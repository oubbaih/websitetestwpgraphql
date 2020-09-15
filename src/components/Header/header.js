import React from "react"
import styled from "styled-components"
import Card from "./Card"
import moment from "moment"
import { graphql, useStaticQuery } from "gatsby"
const Header = () => {
  const { allWpCategory } = useStaticQuery(graphql`
    query {
      allWpCategory(limit: 5) {
        edges {
          node {
            name
            uri
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
                date
                author {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const First = allWpCategory.edges.slice(0, 1)
  const second = allWpCategory.edges.slice(1, 5)
  const Colors1 = [
    "linear-gradient(20deg,#f4880d 0%,#70ff99 100%)",
    "linear-gradient(20deg,#0016be 0%,#2aec74 100%)",
    "linear-gradient(20deg,#0016be 0%,#2aec74 100%)",
    "linear-gradient(20deg,#023c8c 0%,#ff86d3 100%)",
    "linear-gradient(20deg,#410cbc 0%,#ff6f31 100%)",
  ]
  return (
    <HeaderStyle>
      <Box>
        {First.map((first, idssa) => (
          <Card
            imagesource={
              first.node.posts.nodes[0].featuredImage.node.localFile
                .childImageSharp.fluid
            }
            title={first.node.posts.nodes[0].title}
            postslug={first.node.posts.nodes[0].slug}
            date={moment(first.node.posts.nodes[0].date).format(
              " - dddd MMMM,YYYY"
            )}
            authorname={first.node.posts.nodes[0].author.node.name}
            categoryname={first.node.name}
            categoryurl={first.node.uri}
            key={idssa}
            height="40rem"
            big="true"
            colorgradiant="linear-gradient(20deg,#410cbc 0%,#ff6f31 100%)"
            minheight="0rem"
            minwidth="100%"
          />
        ))}
      </Box>
      <Box2>
        {second.map((item, fds) => (
          <Boxies key={fds}>
            <Card
              imagesource={
                item.node.posts.nodes[0].featuredImage.node.localFile
                  .childImageSharp.fluid
              }
              title={item.node.posts.nodes[0].title}
              categoryname={item.node.name}
              categoryurl={item.node.uri}
              postslug={item.node.posts.nodes[0].slug}
              height="20rem"
              colorgradiant={Colors1[fds]}
              minwidth="20rem"
            />
          </Boxies>
        ))}
      </Box2>
    </HeaderStyle>
  )
}

export default Header

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 40rem;
  overflow: hidden;
  flex-direction: row;
  @media (max-width: 720px) {
    flex-direction: column;
  }
`

const Box = styled.div`
  color: #fff;
  width: 49.5%;
  @media (max-width: 720px) {
    width: 100%;
    height: 20rem;
  }
`

const Box2 = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 49.5%;
  @media (max-width: 720px) {
    width: 100%;
    height: 20rem;
    overflow-x: scroll;
    overflow-y: hidden;
    flex-wrap: nowrap;
  }
`
const Boxies = styled.div`
  background-color: ${props => props.col};
  width: 49%;

  &:nth-of-type(1) {
    margin-bottom: 1rem;
  }
  &:nth-of-type(2) {
    margin-bottom: 1rem;
  }
  @media (max-width: 720px) {
    margin-left: 0.5rem;
    &:nth-of-type(1) {
      margin-bottom: 0 !important;
    }
    &:nth-of-type(2) {
      margin-bottom: 0 !important;
    }
    margin-top: 0.5rem;
  }
`
