import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import SideBar from "../components/sidebar/SideBar"
import Layout from "../components/layout"
import styled from "styled-components"
import CategortHeader from "../components/CategoryHeader/CategortHeader"
import Categories from "../components/CategoryHeader/Categories"
import { Container } from "../styleTheming/basicSTyle/LayoutStyle"
import PostsCategories from "../components/postsOfCategory/PostsCategories"
import moment from "moment"
const Category = ({ data, pageContext }) => {
  const CurrentData = data.wpCategory.posts.nodes
  const [numberOfDasta, setNumberOfData] = useState(4)
  const [mydata, setData] = useState([])
  const [showBtn, setshowBtn] = useState(true)
  useEffect(() => {
    Slice(0, numberOfDasta)
  }, [numberOfDasta]) // eslint-disable-line react-hooks/exhaustive-deps

  const HandleLoaodMore = e => {
    e.preventDefault()
    if (numberOfDasta >= CurrentData.length) {
      setshowBtn(false)
    } else if (numberOfDasta < CurrentData.length) {
      setshowBtn(true)
      setNumberOfData(numberOfDasta + 4)
    }
  }
  const Slice = (start, end) => {
    const mm = CurrentData.slice(start, end)
    setData([...mm])
  }
  return (
    <Layout>
      <Container>
        <WrapTheWayLinks>
          <div>
            <span>home</span> &gt; <span>{pageContext.name}</span>
          </div>
          <Categories name={pageContext.name} />
        </WrapTheWayLinks>
        <CategoryName>{pageContext.name}</CategoryName>
      </Container>
      <CategortHeader dataCategory={data.wpCategory} />
      <Container>
        <Wrap>
          <Posts>
            {
              //imagesource, title, authorname, date, exerpt
              mydata.map((post, index) => (
                <PostsCategories
                  key={index}
                  imagesource={
                    post.featuredImage !== null &&
                    post.featuredImage.node.localFile.childImageSharp.fluid
                  }
                  title={post.title}
                  authorname={post.author.node.name}
                  date={moment(post.date).format(" - dddd MMMM,YYYY")}
                  exerpt={post.excerpt}
                  postslug={post.slug}
                />
              ))
            }
            {showBtn && (
              <Box>
                <Button onClick={HandleLoaodMore}>load more</Button>
              </Box>
            )}
          </Posts>
          <SideBar />
        </Wrap>
      </Container>
    </Layout>
  )
}

export default Category
export const query = graphql`
  query($name: String!) {
    wpCategory(name: { eq: $name }) {
      name
      uri
      posts {
        nodes {
          title
          date
          slug
          excerpt
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
          author {
            node {
              name
            }
          }
        }
      }
    }
  }
`
const Button = styled.button`
  background-color: none;
  color: ${props => props.theme.colors.secondary};
  border: 1px solid #ddd;
  /* align-self: flex-end; */
  display: block;
  width: 100%;
  text-align: center;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  @media (max-width: 530px) {
    /* display: block; */
  }
`
const Box = styled.div`
  /* flex-grow: 4; */
  width: 100%;
  margin-top: 2rem;
`
const CategoryName = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 4px;
`
const WrapTheWayLinks = styled.div`
  color: ${props => props.theme.colors.secondary};
  text-transform: capitalize;
  font-size: 1.3rem;
`
const Wrap = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
`
const Posts = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-basis: 67%;
  max-height: 180rem;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
  }
  @media (max-width: 726px) {
    flex-direction: column;
    flex-basis: 100%;
    justify-content: center;
    display: block;
    overflow-y: initial !important;
    max-height: 100%;
  }
  @media (max-width: 530px) {
    flex-direction: column;
    justify-content: center;
    overflow-y: initial !important;
    max-height: 100%;
  }
`
