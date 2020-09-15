// import React from "react"
// import { graphql } from "gatsby"
// import Pager from "../components/pager"
// import styled from "styled-components"
// import { Link } from "gatsby"
// import Img from "gatsby-image"
// import Layout from "../components/layout"
// import { Container } from "../styleTheming/basicSTyle/LayoutStyle"

// function BlogPaginate({ data, pageContext }) {
//   const InfoBlog = data.allWpPost.edges
//   return (
//     <Layout>
//       <Container>
//         <Wrapper>
//           {InfoBlog.map((item, idx) => (
//             <Card>
//               <ImageWrap>
//                 {item.node.featuredImage !== null && (
//                   <Image
//                     fluid={
//                       item.node.featuredImage.node.localFile.childImageSharp
//                         .fluid
//                     }
//                   />
//                 )}
//                 <Categroy>
//                   {item.node.categories.nodes[0] !== undefined && (
//                     <p>{item.node.categories.nodes[0].name}</p>
//                   )}
//                 </Categroy>
//               </ImageWrap>
//               <Title>
//                 <ExLink to={item.node.slug}>{item.node.title}</ExLink>
//               </Title>
//             </Card>
//           ))}
//         </Wrapper>
//         <Pager pageContext={pageContext} />
//       </Container>
//     </Layout>
//   )
// }

// export default BlogPaginate

// export const query = graphql`
//   query($limit: Int!, $skip: Int!) {
//     allWpPost(limit: $limit, skip: $skip) {
//       edges {
//         node {
//           title
//           content
//           slug
//           categories {
//             nodes {
//               name
//             }
//           }
//           featuredImage {
//             node {
//               localFile {
//                 childImageSharp {
//                   fluid {
//                     ...GatsbyImageSharpFluid_tracedSVG
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
// const Wrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   margin-top: 5rem;
//   @media (max-width: 675px) {
//     justify-content: center;
//   }
// `
// const Categroy = styled.div`
//   position: absolute;
//   left: 0;
//   bottom: 10%;
//   & > p {
//     display: inline-block;
//     padding: 0.5rem;
//     background-color: ${props => props.theme.colors.primary};
//     color: ${props => props.theme.colors.thirth};
//     text-transform: capitalize;
//   }
// `
// const Card = styled.div`
//   max-width: 32rem;
//   position: relative;
// `
// const ImageWrap = styled.div`
//   width: 100%;
//   max-height: 20rem;
//   position: relative;
// `
// const Image = styled(Img)`
//   height: 20rem;
// `
// const Title = styled.h1`
//   text-transform: capitalize;
//   font-size: 2.5rem;
//   font-weight: 600;
// `
// const ExLink = styled(Link)`
//   text-decoration: none;
//   color: ${props => props.theme.colors.primary};
// `
