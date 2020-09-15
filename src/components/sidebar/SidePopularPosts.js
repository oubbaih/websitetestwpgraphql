import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const SidePopularPosts = ({ data }) => {
  //imagesource, title, date
  return (
    <List>
      {data.map((post, index) => (
        <ListLinks key={index}>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </ListLinks>
      ))}
    </List>
  )
}

export default SidePopularPosts

const List = styled.ul`
  display: flex;
  flex-direction: column;
`

const ListLinks = styled.li`
  color: ${props => props.theme.colors.secondary};
  position: relative;
  text-transform: capitalize;
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
  padding: 1rem;
  font-weight: 600;
  &::before {
    content: "";
    position: absolute;
    left: 0.2rem;
    top: 2rem;
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${props => props.theme.colors.orange};
  }
  &:hover {
    color: ${props => props.theme.colors.orange};
  }
  & > a {
    margin-left: 0.5rem;
  }
`
