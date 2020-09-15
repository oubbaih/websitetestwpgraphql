import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa"

const TrendingPosts = () => {
  const { allWpPost } = useStaticQuery(graphql`
    query {
      allWpPost(limit: 20) {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)
  useEffect(() => {
    let interval = setInterval(() => {
      next >= allWpPost.edges.length - 1 ? setNext(0) : setNext(next + 1)
    }, 4000)
    return () => clearInterval(interval)
  })
  const [next, setNext] = useState(0)

  const HandleLeftClick = () => {
    next === 0 ? setNext(allWpPost.edges.length - 1) : setNext(next - 1)
    console.log(next)
  }
  const HandleRightClick = () => {
    next >= allWpPost.edges.length - 1 ? setNext(0) : setNext(next + 1)
    console.log(next)
  }
  return (
    <Box>
      <BtnTrand>trending now</BtnTrand>
      <LinksTo to={`/blog/${allWpPost.edges[next].node.slug}`}>
        <Title>{allWpPost.edges[next].node.title}</Title>
      </LinksTo>
      <BtnContainer>
        <Button onClick={HandleLeftClick}>
          <FaAngleLeft />
        </Button>
        <Button onClick={HandleRightClick}>
          <FaAngleRight />
        </Button>
      </BtnContainer>
    </Box>
  )
}

export default TrendingPosts

const BtnTrand = styled.span`
  color: ${props => props.theme.colors.thirth};
  padding: 0.2rem;
  background-color: ${props => props.theme.colors.orange};
  text-transform: capitalize;
  flex-basis: 15%;
  margin-left: 1rem;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
  @media (max-width: 840px) {
    flex-basis: 20%;
  }
`
const Title = styled.h4`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.6rem;
`
const LinksTo = styled(Link)`
  flex-basis: 65%;
  @media (max-width: 840px) {
    flex-basis: 55%;
  }
  @media (max-width: 292px) {
    flex-basis: 40%;
  }
`

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${props => props.theme.colors.secondary};
  flex-wrap: wrap;
  margin-top: 5rem;
  align-items: center;
  padding: 1rem;
`
const BtnContainer = styled.div`
  flex-basis: 15%;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > button {
    align-self: center;
    border: 1px solid ${props => props.theme.colors.secondary};
    & > svg {
      fill: ${props => props.theme.colors.secondary};
    }
  }
  & > button:not(:first-child) {
    margin-left: 0.3rem;
  }
`
const Button = styled.button`
  background-color: none;
`
