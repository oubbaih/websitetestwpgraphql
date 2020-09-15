import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
const Categories = ({ name }) => {
  console.log(name)
  const { allWpCategory } = useStaticQuery(graphql`
    query {
      allWpCategory {
        edges {
          node {
            name
          }
        }
      }
    }
  `)
  return (
    <CategoryList>
      {allWpCategory.edges.map((it, isd) => (
        <CategoryItem key={isd} colorname={name === it.node.name && "#f45e21"}>
          {it.node.name}
        </CategoryItem>
      ))}
    </CategoryList>
  )
}

export default Categories

const CategoryList = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin-left: -1rem;
`
const CategoryItem = styled.li`
  background-color: ${props => props.theme.colors.primary};
  background-color: ${props => props.colorname} !important;

  color: ${props => props.theme.colors.thirth};
  padding: 0.5rem;
  display: inline-block;
  margin-left: 1rem;
`
