import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"
import moment from "moment"
import styled from "styled-components"
const PupolarPosts = () => {
  const { allWpPost } = useStaticQuery(graphql`
    query {
      allWpPost(limit: 6) {
        edges {
          node {
            title
            date
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
  `)
  const Slice = allWpPost.edges.slice(3, 6)
  return (
    <Wrap>
      <Title>pupolar posts</Title>
      {Slice.map((item, itss) => (
        <Content key={itss}>
          {item.node.featuredImage !== null && (
            <Image
              fluid={
                item.node.featuredImage.node.localFile.childImageSharp.fluid
              }
            />
          )}
          <WrapContent>
            <h5>
              <Link to={`/blog/${item.node.slug}`}>{item.node.title}</Link>
            </h5>
            <span>{moment(item.node.date).format("LL")}</span>
          </WrapContent>
        </Content>
      ))}
    </Wrap>
  )
}

export default PupolarPosts

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Title = styled.h5`
  color: ${props => props.theme.colors.secondary};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.8rem;
  margin-bottom: 4rem;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-transform: uppercase;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1rem;
  align-items: center;
`

const Image = styled(Img)`
  height: 8rem;
  width: 12rem;
`
const WrapContent = styled.div`
  flex: 1;
  margin-left: 1rem;
  & > h5 {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 1.6rem;
    color: ${props => props.theme.colors.thirth};
    margin-bottom: 0rem;
    &:hover {
      color: ${props => props.theme.colors.orange};
    }
  }
  & > span {
    color: ${props => props.theme.colors.secondary};
    font-size: 1.1rem;
    font-weight: bold;
  }
`
