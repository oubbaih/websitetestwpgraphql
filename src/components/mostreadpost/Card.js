import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import moment from "moment"
import { Link } from "gatsby"
import { gql, useQuery } from "@apollo/client"

const MY_POST_VIEWS_QUERY = gql`
  query MyQuery($id: ID!) {
    postBy(id: $id) {
      postViews
    }
  }
`
const Card = ({
  sourceurl,
  categoryname,
  title,
  authorname,
  date,
  url,
  idpst,
}) => {
  const PostDate = moment(date).format("dddd MMMM,YYYY")
  const { loading, error, data } = useQuery(MY_POST_VIEWS_QUERY, {
    variables: { id: idpst, pollInterval: 500 },
  })
  if (loading) return <p style={{ opacity: 0 }}>loading ...</p>
  if (error) return <p style={{ opacity: 0 }}>error ..</p>
  return (
    <StyledCard>
      <MyLink to={url}>
        <Wrap>
          <ImageStyle fluid={sourceurl} />
          <CategoryName>{categoryname}</CategoryName>
        </Wrap>
        <Title>{title}</Title>
      </MyLink>
      <PersonalInfo>
        <div>
          <span>{authorname}</span> - <span>{PostDate}</span>
        </div>
        <span>
          {data.postBy.postViews === 0
            ? "view 0"
            : `views ${data.postBy.postViews}`}
        </span>
      </PersonalInfo>
    </StyledCard>
  )
}

export default Card
const MyLink = styled(Link)``
const Title = styled.h3`
  text-transform: capitalize;
  color: ${props => props.theme.colors.primary};
  font-size: 1.7rem;
  margin-top: 0.5rem;
`

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-basis: 30%;
  margin-bottom: 2rem;
  &:hover ${Title} {
    color: ${props => props.theme.colors.orange};
  }
  @media (max-width: 960px) {
    flex-basis: 49%;
  }
  @media (max-width: 520px) {
    flex-basis: 100%;
  }
`
const Wrap = styled.div`
  position: relative;
`
const ImageStyle = styled(Image)`
  height: 16rem;
  @media (max-width: 520px) {
    height: auto;
  }
`

const CategoryName = styled.p`
  background-color: ${props => props.theme.colors.primary};
  position: absolute;
  left: 0;
  bottom: 0;
  text-transform: capitalize;
  font-size: 1.6rem;
  color: ${props => props.theme.colors.thirth};
  padding: 0.5rem;
`

const PersonalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: ${props => props.theme.colors.secondary};
  margin-top: -1.5rem;
  text-transform: capitalize;
  font-size: 1.4rem;
  font-weight: 600;
  & > span:not(:first-child) {
    margin-left: 0.5rem;
  }
`
