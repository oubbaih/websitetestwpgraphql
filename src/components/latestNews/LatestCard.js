import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { motion } from "framer-motion"
const LatestCard = ({ datposts }) => {
  const ChildVariants = {
    animate: {
      opacity: 1,
    },
    initial: {
      opacity: 0,
    },
  }
  let UpdateArr = []
  UpdateArr = datposts.slice(0, 10)
  return UpdateArr.map((post, idd) => (
    <CardContainer variants={ChildVariants} key={idd}>
      {post.featuredImage !== null && (
        <ImageContainer
          fluid={post.featuredImage.node.localFile.childImageSharp.fluid}
        />
      )}
      <Title>
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </Title>
    </CardContainer>
  ))
}

export default LatestCard

const Title = styled.h5`
  text-transform: capitalize;
  color: ${props => props.theme.colors.primary};
`

const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 19%;
  @media (max-width: 650px) {
    width: 32%;
  }
  @media (max-width: 400px) {
    width: 49%;
  }
  &:hover ${Title} {
    color: ${props => props.theme.colors.orange};
  }
`

const ImageContainer = styled(Image)`
  height: 15rem;
`
