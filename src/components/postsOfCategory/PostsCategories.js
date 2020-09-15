import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"
const PostsCategories = ({
  imagesource,
  title,
  authorname,
  date,
  exerpt,
  postslug,
}) => {
  return (
    <CardWrapper>
      {imagesource !== null && <Image fluid={imagesource} />}
      <Title>
        <Link to={`/blog/${postslug}`}>{title}</Link>
      </Title>
      <Wrap>
        <span>{authorname}</span>
        <span>{date}</span>
      </Wrap>
      <Exerpt dangerouslySetInnerHTML={{ __html: exerpt }} />
    </CardWrapper>
  )
}

export default PostsCategories
const Title = styled.h2`
  text-transform: capitalize;
  font-size: 1.8rem;
  font-weight: 700;
`
const CardWrapper = styled.div`
  flex-basis: 48%;
  &:hover ${Title} {
    color: ${props => props.theme.colors.orange};
  }
  /* max-height: 15%;
  margin-bottom: 5rem; */
`

const Image = styled(Img)``

const Wrap = styled.div`
  display: flex;
  justify-content: flex-start;
  color: ${props => props.theme.colors.secondary};
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: capitalize;
  margin-top: -1rem;
  font-size: 1.3rem;
  & > span:first-child {
    margin-bottom: 0.5rem;
  }
`
const Exerpt = styled.div`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.secondary};
`
