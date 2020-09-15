import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import moment from "moment"
import { Link } from "gatsby"
const CategortHeader = ({ dataCategory }) => {
  const FirstCategorypost = dataCategory.posts.nodes.slice(0, 1)
  const SecondCategorypost = dataCategory.posts.nodes.slice(1, 5)
  const Colors1 = [
    "linear-gradient(20deg,#f4880d 0%,#70ff99 100%)",
    "linear-gradient(20deg,#0016be 0%,#2aec74 100%)",
    "linear-gradient(20deg,#0016be 0%,#2aec74 100%)",
    "linear-gradient(20deg,#023c8c 0%,#ff86d3 100%)",
  ]
  return (
    <HeadrContainer>
      <Box col="black">
        {FirstCategorypost.map((cate, index) => (
          <CardOne key={index}>
            {cate.featuredImage !== null && (
              <Image
                fluid={cate.featuredImage.node.localFile.childImageSharp.fluid}
              />
            )}
            <Overly gradiant="linear-gradient(20deg,#410cbc 0%,#ff6f31 100%)" />
            <Content>
              <CategoryName>{dataCategory.name}</CategoryName>
              <Link to={`/blog/${cate.slug}`}>
                {" "}
                <Title>{cate.title}</Title>
              </Link>
              <Wrap>
                <span>{cate.author.node.name}</span>
                <span>{moment(cate.date).format(" - dddd MMMM,YYYY")}</span>
              </Wrap>
            </Content>
          </CardOne>
        ))}
      </Box>
      <Box2 col="green">
        {SecondCategorypost.map((cate, index) => (
          <Card key={index}>
            {cate.featuredImage !== null && (
              <Image
                fluid={cate.featuredImage.node.localFile.childImageSharp.fluid}
              />
            )}

            <Overly gradiant={Colors1[index]} />
            <Content>
              <CategoryName>{dataCategory.name}</CategoryName>
              <Link to={`/blog/${cate.slug}`}>
                <Title>{cate.title}</Title>
              </Link>
            </Content>
          </Card>
        ))}
      </Box2>
    </HeadrContainer>
  )
}

export default CategortHeader
const HeadrContainer = styled.header`
  min-width: 100%;
  height: 40rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: hidden;
`

const Box = styled.div`
  flex-basis: 49.5%;
  max-height: 100%;
  @media (max-width: 720px) {
    min-width: 100%;
    height: 20rem;
  }
`
const CardOne = styled.div`
  position: relative;
  height: 100%;
`
const Card = styled.div`
  position: relative;
`
const Box2 = styled.div`
  flex-basis: 49.5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 720px) {
    min-width: 100%;
    height: 20rem;
    overflow-y: hidden;
    overflow-x: scroll;
    flex-wrap: nowrap;
    & > div {
      min-width: 30rem;
    }
  }
  & > div {
    width: 49%;
    height: 20rem;
    &:nth-of-type(3) {
      margin-top: 1rem;
    }
    &:nth-of-type(4) {
      margin-top: 1rem;
    }
    @media (max-width: 719px) {
      &:nth-of-type(3) {
        margin-top: 0rem;
      }
      &:nth-of-type(4) {
        margin-top: 0rem;
      }
    }
  }
`

const Image = styled(Img)`
  height: 100%;
`
const Overly = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: ${props => props.gradiant};
  opacity: 0.7;
`
const Content = styled.div`
  position: absolute;
  bottom: -8rem;
  left: 1rem;
  z-index: 3;
  text-transform: capitalize;
  width: 100%;
  height: 100%;
`
const CategoryName = styled.p`
  color: ${props => props.theme.colors.thirth};
  font-weight: 600;
`
const Title = styled.h1`
  color: ${props => props.theme.colors.thirth};
  font-weight: 700;
  margin: 0rem;
  font-size: 2rem;
`
const Wrap = styled.div`
  color: ${props => props.theme.colors.secondary};
  & > span {
    font-weight: 700;
  }
`
