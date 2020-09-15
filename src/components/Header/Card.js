import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { motion } from "framer-motion"
const Card = ({
  imagesource,
  title,
  date,
  authorname,
  height,
  categoryname,
  categoryurl,
  postslug,
  big,
  colorgradiant,
  minwidth,
}) => {
  return (
    <Wrap>
      <ImageContainer
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 },
        }}
      >
        {imagesource !== null && (
          <Image height={height} fluid={imagesource} minwidth={minwidth} />
        )}
        <ImageOverly colorgradiant={colorgradiant} />
      </ImageContainer>
      <WrapTitle>
        <Name>
          <Link to={categoryurl}>{categoryname}</Link>
        </Name>
        {big === "true" ? (
          <Title>
            <Link to={`/blog/${postslug}`}>{title}</Link>
          </Title>
        ) : (
          <TitleH2>
            <Link to={`/blog/${postslug}`}>{title}</Link>
          </TitleH2>
        )}
        {authorname !== null && (
          <AuthorInfo>
            <span>{authorname}</span> <span>{date}</span>
          </AuthorInfo>
        )}
      </WrapTitle>
    </Wrap>
  )
}
export default Card
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`
const ImageContainer = styled(motion.div)``
const ImageOverly = styled.div`
  background: ${props => props.colorgradiant};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
`
const Image = styled(Img)`
  min-height: ${props => props.height};
  @media (max-width: 720px) {
    min-height: 20rem;
    min-width: ${props => props.minwidth} !important;
  }
  @media (max-width: 420px) {
    min-width: 12rem !important;
  }

  max-height: 20rem;
`
const Name = styled.p`
  text-transform: capitalize;
  font-weight: bold;
  color: ${props => props.theme.colors.thirth};
  font-size: 1.4rem;
`
const Title = styled.h1`
  text-transform: capitalize;
  font-weight: bold;
  color: ${props => props.theme.colors.thirth};
  font-size: 2rem;
  margin-top: 1rem;
`
const TitleH2 = styled.h2`
  text-transform: capitalize;
  font-weight: bold;
  color: ${props => props.theme.colors.thirth};
  font-size: 2rem;
  margin-top: 1rem;
`
const AuthorInfo = styled.div`
  color: ${props => props.theme.colors.secondary};
  display: flex;
  text-transform: capitalize;
  font-size: 1.2rem;
  font-weight: 700;
  margin-top: -1rem;
`

const WrapTitle = styled.div`
  position: absolute;
  left: 1rem;
  bottom: 5rem;
  z-index: 3;
  line-height: 0px;
  @media (max-width: 720px) {
    bottom: 6rem;
  }
`
