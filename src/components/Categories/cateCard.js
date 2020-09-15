import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"
import moment from "moment"
const CateCard = ({ categorytitle, dataPosts }) => {
  const NewPosts = dataPosts.slice(1, 4)
  return (
    <CatContainer>
      <CategoryTitle>{categorytitle}</CategoryTitle>
      <ImageWrap>
        <Image
          fluid={
            dataPosts[0].featuredImage.node.localFile.childImageSharp.fluid
          }
        />
        <Title>
          {" "}
          <TitledLink to={`/blog/${dataPosts[0].slug}`}>
            {dataPosts[0].title}
          </TitledLink>
          <PersonalInfo>
            <span>{dataPosts[0].author.node.name}</span> -
            <span>{moment(dataPosts[0].date).format("dddd MMMM,YYYY")}</span>
          </PersonalInfo>
        </Title>

        <Overly />
      </ImageWrap>
      <WrapList>
        {NewPosts.map((post, inde) => (
          <TitleList key={inde}>
            <TitledLink to={`/blog/${post.slug}`}>{post.title}</TitledLink>
          </TitleList>
        ))}
      </WrapList>
    </CatContainer>
  )
}

export default CateCard
const CatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media (max-width: 960px) {
    width: 48%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`
const CategoryTitle = styled.h4`
  font-size: 2.5rem;
  text-transform: capitalize;
  color: ${props => props.theme.colors.orange};
  font-weight: 700;
  letter-spacing: 1.6px;
`

const ImageWrap = styled.div`
  position: relative;
`
const Image = styled(Img)`
  height: 20rem;
`
const Title = styled.h2`
  position: absolute;
  bottom: 0rem;
  left: 1rem;
  font-size: 1.8rem;
  text-transform: capitalize;
  color: ${props => props.theme.colors.thirth};
  z-index: 3;
`

const PersonalInfo = styled.div`
  color: ${props => props.theme.colors.secondary};
  font-size: 1.3rem;
`

const TitleList = styled.li`
  list-style: none;
  position: relative;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
  &::before {
    content: "";
    position: absolute;
    width: 0.7rem;
    height: 0.7rem;
    background-color: ${props => props.theme.colors.orange};
    left: 0;
    top: 1rem;
  }
  & > a {
    color: ${props => props.theme.colors.secondary};
    margin-left: 1.5rem;
    display: inline-block;
    margin-bottom: 1.5rem;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`
const WrapList = styled.ul`
  & > li:first-child {
    margin-top: -1rem;
  }
  & > li {
    margin-bottom: 1rem;
  }
`
const TitledLink = styled(Link)`
  text-transform: capitalize;
`

const Overly = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
`
