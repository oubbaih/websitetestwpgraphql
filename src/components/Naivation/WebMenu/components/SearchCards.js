import React from "react"
import { useQuery, gql } from "@apollo/client"
import { FaSpinner } from "react-icons/fa"
import styled from "styled-components"
import { NavLink } from "../../../../styleTheming/basicSTyle/navs"
const SearchCards = ({ SeachPost }) => {
  const SEARCH_QUER = gql`
    query MyQuery($SeachPost: String!) {
      __typename
      posts(where: { search: $SeachPost }) {
        nodes {
          slug
          title
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `

  const { loading, error, data } = useQuery(SEARCH_QUER, {
    variables: { SeachPost },
  })
  if (loading) return <FaSpinner />
  if (error) return <p>dat not much any of our posts </p>
  return (
    <Wrap>
      {data.posts.nodes.map((post, index) => (
        <ExtendLink to={`/blog/${post.slug}`} key={index} my="2rem">
          <Content>
            {post.featuredImage && (
              <Img src={post.featuredImage.node.sourceUrl} alt={post.title} />
            )}
            <Title key={index}>
              {post.title}
              <DataText>{post.date}</DataText>
            </Title>
          </Content>
        </ExtendLink>
      ))}
    </Wrap>
  )
}

export default SearchCards

const Wrap = styled.div`
  width: 30rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: #fdfdfd;
  height: 30rem;
  overflow-y: scroll;
`
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Title = styled.h4`
  text-transform: capitalize;
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  flex-basis: 70%;
  font-weight: 700;
`
const Img = styled.img`
  width: 7rem;
  height: 7rem;
`
const DataText = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-weight: 400;
`
const ExtendLink = styled(NavLink)`
  &:hover {
    color: #f45511;
  }
`
