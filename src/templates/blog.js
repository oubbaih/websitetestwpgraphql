import React, { useEffect } from "react"
import contentParser from "gatsby-wpgraphql-inline-images"
import { graphql } from "gatsby"
import { gql, useMutation } from "@apollo/client"
import Layout from "../components/layout"
import QuerViews from "../components/querViews"
import styled from "styled-components"
import moment from "moment"
import Img from "gatsby-image"
import { Container } from "../styleTheming/basicSTyle/LayoutStyle"
import { FaEye, FaCommentAlt } from "react-icons/fa"
import CommentQuery, { CommentAproverd } from "../components/queryComent"
import SideBar from "../components/sidebar/SideBar"
import SocialMediaShare from "../components/SocialMediaShare"
import RelatedPosts from "../components/RelatedPosts/RelatedPosts"
import Comments from "../components/Comment/Comments"
import SEO from "../components/Seo/Seo"
const POST_VIEWS_MUTATION = gql`
  mutation PostView($clientMutationId: String!, $id: ID!) {
    postViews(input: { clientMutationId: $clientMutationId, id: $id }) {
      clientMutationId
    }
  }
`
function Blog({ data, pageContext }) {
  const { id, title } = pageContext
  const PostViewMutationFunction = () => {
    postViews({
      variables: {
        clientMutationId: title,
        id,
      },
    })
  }
  useEffect(() => {
    PostViewMutationFunction()
  })

  const [postViews] = useMutation(POST_VIEWS_MUTATION)
  const content = data.wpPost.content
  const { pluginOptions } = pageContext
  const metades = data.wpPost.seo.metaDesc || data.wpPost.excerpt
  const metakey = data.wpPost.seo.metaKeywords || []
  const metatitle = data.wpPost.seo.title || data.wpPost.title
  const metaAuthor = data.wpPost.author.node.name || ""

  const windowGlobal = typeof window !== "undefined" && window
  return (
    <Layout>
      <SEO
        description={metades}
        keywords={metakey}
        title={metatitle}
        author={metaAuthor}
      />
      <Container>
        <section>
          <WrapTheWayLinks>
            <span>home</span>&gt;
            <span>{data.wpPost.categories.nodes.map(ca => ca.name)}</span>&gt;
            <span>{data.wpPost.title}</span>
          </WrapTheWayLinks>
          <ImageWrap>
            {data.wpPost.featuredImage !== null && (
              <>
                <Image
                  fluid={
                    data.wpPost.featuredImage.node.localFile.childImageSharp
                      .fluid
                  }
                />
                <Overly />
              </>
            )}
            <ContentWrap>
              <Category>
                {data.wpPost.categories.nodes.map(ca => ca.name)}
              </Category>
              <Title>{data.wpPost.title}</Title>
              <Author>
                by<span>{data.wpPost.author.node.name}</span>
                <span>
                  {moment(data.wpPost.date).format("dddd  MMMM , YYYY")}
                </span>
                <Views>
                  <FaEye /> <QuerViews postId={data.wpPost.id} />
                </Views>
                <Views>
                  <FaCommentAlt /> <CommentQuery postId={data.wpPost.id} />
                </Views>
              </Author>
            </ContentWrap>
          </ImageWrap>
          <Wrap>
            <Box>
              <div style={{ flexBasis: "65%" }}>
                {contentParser({ content }, pluginOptions)}
              </div>
              <SocialMediaShare
                url={String(windowGlobal.location)}
                title={data.wpPost.title}
                size="2rem"
              />
              <RelatedPosts
                categoryname={data.wpPost.categories.nodes.map(ca => ca.name)}
              />

              <Comments postid={data.wpPost.databaseId} />
              <CommentAproverd postId={data.wpPost.id} />
            </Box>

            <SideBar />
          </Wrap>
        </section>
      </Container>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      seo {
        metaDesc
        metaKeywords
        title
        metaKeywords
      }
      title
      content
      slug
      excerpt
      date
      id
      databaseId
      author {
        node {
          name
          email
          locale
        }
      }
      categories {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
const Box = styled.div`
  flex-basis: 65%;
  max-height: 180rem;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
  }
  @media (max-width: 718px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: 100%;
  }
  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: 100%;
  }
`
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
`
const Views = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > svg {
    margin-right: 0.5rem;
  }
  & > span:last-child {
    margin-right: 0.5rem;
  }
`
const WrapTheWayLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  text-transform: capitalize;
  font-size: 1.4rem;
  color: ${props => props.theme.colors.secondary};
  font-weight: 600;
  & > span {
    margin-left: 1rem;
  }
`
const ImageWrap = styled.div`
  width: 100%;
  height: 40rem;
  position: relative;
`
const Image = styled(Img)`
  height: 100%;
`
const Overly = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`
const ContentWrap = styled.article`
  position: absolute;
  left: 2rem;
  bottom: 5rem;
  color: ${props => props.theme.colors.thirth};
  text-transform: capitalize;
  font-size: 1.3rem;
`
const Category = styled.p`
  display: inline-block;
  padding: 1rem;
  background-color: ${props => props.theme.colors.primary};
`
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`
const Author = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-weight: 700;
  color: ${props => props.theme.colors.secondary};
  align-items: center;
  & > span {
    margin-left: 0.5rem;
  }
`
