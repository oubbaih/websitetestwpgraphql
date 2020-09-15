import React from "react"
import styled, { css } from "styled-components"
import { useDispatchFunctions } from "../../GlobalStore/index"
import PostCategory from "./postCategory"
import Allposts from "./Allposts"
import { graphql, useStaticQuery } from "gatsby"
export const LatestNews = () => {
  const { allWpCategory } = useStaticQuery(graphql`
    query {
      allWpCategory {
        edges {
          node {
            name
            uri
            posts {
              nodes {
                title
                slug
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const dispatch = useDispatchFunctions()
  const HandleClick = e => {
    dispatch({
      type: "LATEST_CATEGORY_NAME",
      latestcategoryname: e.target.textContent,
    })
  }

  return (
    <LatestContainer>
      <Wrap>
        <LatestWrapper>
          <H2>Latest news</H2>
          <LinksContainer>
            <ListLinks>
              <Links onClick={HandleClick}>all</Links>
            </ListLinks>
            {allWpCategory.edges.map((menu, index) => {
              return (
                <ListLinks key={index}>
                  <Links onClick={HandleClick}>{menu.node.name}</Links>
                </ListLinks>
              )
            })}
          </LinksContainer>
        </LatestWrapper>
        <PostCategory />
        <Allposts />
      </Wrap>
    </LatestContainer>
  )
}

const LatestContainer = styled.div`
  margin-top: 5rem;
`
const Wrap = styled.div`
  @media (max-width: 620px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`
const LatestWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 650px) {
    justify-content: center;
    flex-direction: column;
  }
`

const H2 = styled.h2`
  color: ${props => props.theme.colors.orange};
  font-size: 2.5rem;
  font-weight: 600;
  text-transform: capitalize;
  @media (max-width: 650px) {
    text-align: center;
  }
`
const LinksContainer = styled.ul`
  display: flex;
  justify-content: space-between;
`
const ListLinks = styled.li`
  margin-left: 1.5rem;
  @media (max-width: 474px) {
    margin-left: 0rem;
    font-size: 1.2rem;
  }
  color: ${props => props.theme.colors.secondary};
  &:hover {
    & > button {
      color: ${props => props.theme.colors.orange};
    }
  }
`
const Links = styled.button`
  background-color: none;
  color: ${props => props.theme.colors.secondary};
  ${props =>
    props.active &&
    css`
      color: ${props => props.theme.colors.orange} !important;
    `}
  text-transform: capitalize;
  font-weight: 600;
`
