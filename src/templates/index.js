import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Container } from "../styleTheming/basicSTyle/LayoutStyle"
import MostReadPosts from "../components/mostreadpost/MostReadPosts"
import TrendingPosts from "../components/trendingPost/TrendingPosts"
import CategoriesPosts from "../components/Categories/CategoriesPosts"
import { LatestNews } from "../components/latestNews/LatestNews"
import Header from "../components/Header/header"

const IndexPage = ({ pageContext }) => {
  const { homepage } = pageContext
  return (
    <Layout>
      <Header />
      <Container>
        <AdsBox dangerouslySetInnerHTML={{ __html: homepage.adsbanner }} />
        <MostReadPosts />
        <TrendingPosts />
        <CategoriesPosts />
        <LatestNews />
      </Container>
    </Layout>
  )
}
export default IndexPage

const AdsBox = styled.div`
  width: 100%;
  height: 10rem;
  border: 1px solid red;
  margin: 5rem 0rem 5rem 0rem;
`
