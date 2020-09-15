import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
const StyleCard = ({ imagesource, title, date, slug }) => (
  <CardBsody>
    {imagesource !== null && <ImageWrap fluid={imagesource} />}
    <Wrap>
      <Link to={slug}>
        {" "}
        <span>{title}</span>{" "}
      </Link>
      <span>{date}</span>
    </Wrap>
  </CardBsody>
)
export default StyleCard

const CardBsody = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-items: center;
  margin: 1.5rem 0;
`
const ImageWrap = styled(Img)`
  width: 8rem;
  height: 6rem;
`
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  justify-content: center;
  font-weight: 700;
  & > a {
    font-size: 1.5rem;
    text-transform: capitalize;
    &:hover {
      color: ${props => props.theme.colors.orange};
    }
  }
  & > span:last-child {
    color: ${props => props.theme.colors.secondary};
    font-size: 1.1rem;
  }
`
