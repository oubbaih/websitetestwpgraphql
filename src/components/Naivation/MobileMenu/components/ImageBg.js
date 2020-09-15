import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
const ImageBg = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "mobileImagebg.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    file && (
      <>
        <ImageStyle fluid={file.childImageSharp.fluid} />
        <Overly />
      </>
    )
  )
}

export default ImageBg

const Overly = styled.div`
  background: rgba(220, 156, 89, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`
const ImageStyle = styled(Image)`
  width: 100vw;
  height: 100vh;
`
