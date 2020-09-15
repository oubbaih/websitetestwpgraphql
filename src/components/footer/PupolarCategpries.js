import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
const PupolarCategpries = () => {
  const { allWpCategory } = useStaticQuery(graphql`
    query {
      allWpCategory {
        edges {
          node {
            name
            uri
          }
        }
      }
    }
  `)
  return (
    <Wrap>
      <Title>popular category</Title>
      <Itemslink>
        {allWpCategory.edges.map((cat, idd) => (
          <ListLink key={idd}>
            <Links to={cat.node.uri}>{cat.node.name}</Links>
          </ListLink>
        ))}
      </Itemslink>
    </Wrap>
  )
}

export default PupolarCategpries

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`
const Title = styled.h5`
  color: ${props => props.theme.colors.secondary};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.8rem;
  margin-bottom: 4rem;
`
const Itemslink = styled.ul`
  display: flex;
  flex-direction: column;
`
const ListLink = styled.li`
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.thirth};
`
const Links = styled(Link)`
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: capitalize;
  &:hover {
    color: ${props => props.theme.colors.orange};
  }
`
