import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "../../styleTheming/basicSTyle/LayoutStyle"
import PostAditor from "./PostAditor"
import PupolarPosts from "./PupolarPosts"
import PupolarCategpries from "./PupolarCategpries"
import Logo from "../Naivation/WebMenu/components/logo"
import Aboutdata from "./Aboutdata"
import SocialMedia from "../TopNavigation/components/SocialMedia"
import BottomNav from "./BottomNav/BottomNav"
const Footer = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "footerbg.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <FooterStyle>
      <ImageGrap fluid={file.childImageSharp.fluid} />
      <Overly />
      <ContentWraper>
        <Container>
          <Wrap>
            <Box>
              <PostAditor />
              <PupolarPosts />
              <PupolarCategpries />
            </Box>
            <Divider />
            <Box>
              <Logo />
              <Aboutdata />
              <div style={{ color: "white" }}>
                <Title>follow us</Title>
                <SocialMedia />
              </div>
            </Box>
          </Wrap>
        </Container>
        <BottomNav />
      </ContentWraper>
    </FooterStyle>
  )
}

export default Footer

const FooterStyle = styled.footer`
  position: relative;
  margin-top: 5rem;
`
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 616px) {
    text-align: center;
  }
`
const Title = styled.h6`
  text-transform: uppercase;
`

const ImageGrap = styled(Image)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  @media (max-width: 930px) {
    min-height: 70rem;
  }

  @media (max-width: 648px) {
    min-height: 80rem;
  }
  @media (max-width: 616px) {
    min-height: 145rem;
  }
  @media (max-width: 262px) {
    min-height: 153rem !important;
  }
  @media (max-width: 234px) {
    min-height: 160rem !important;
  }
  @media (max-width: 230px) {
    min-height: 175rem !important;
  }

  max-height: 65rem;
`
const Overly = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  background-color: rgba(34, 34, 34, 0.7);
`
const ContentWraper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
`
const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 616px) {
    flex-direction: column;
    justify-content: center;
  }
`
const Divider = styled.div`
  border-top: 1px solid ${props => props.theme.colors.secondary};
  width: 80%;
  margin: 5rem auto;
`
