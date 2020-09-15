import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import styled from "styled-components"

const SocialMedia = () => {
  const { wp } = useStaticQuery(graphql`
    query {
      wp {
        generalinfoMediaSettings {
          facebookLink
          instagramLink
          linkedLink
          twetterLink
          youtubeLink
        }
      }
    }
  `)
  return (
    <div>
      <Name>follow us</Name>
      <Wrap>
        <WrapIcon
          href={wp.generalinfoMediaSettings.facebookLink}
          target="blanck"
          rel="nofollow"
          coloename="#4267B2"
        >
          <FaFacebookF />
        </WrapIcon>
        <Span colorhover="#4267B2">like</Span>
      </Wrap>
      <Wrap>
        <WrapIcon
          href={wp.generalinfoMediaSettings.instagramLink}
          target="blanck"
          rel="nofollow"
          coloename="#405de6"
        >
          <FaInstagram />
        </WrapIcon>
        <Span colorhover="#405de6">fallow</Span>
      </Wrap>
      <Wrap>
        <WrapIcon
          href={wp.generalinfoMediaSettings.linkedLink}
          target="blanck"
          rel="nofollow"
          coloename="#2867b2"
        >
          <FaLinkedinIn />
        </WrapIcon>
        <Span colorhover="#2867b2">Follow</Span>
      </Wrap>
      <Wrap>
        <WrapIcon
          href={wp.generalinfoMediaSettings.twetterLink}
          target="blanck"
          rel="nofollow"
          coloename="#1da1f2"
        >
          <FaTwitter />
        </WrapIcon>
        <Span colorhover="#1da1f2">follow</Span>
      </Wrap>
      <Wrap>
        <WrapIcon
          href={wp.generalinfoMediaSettings.youtubeLink}
          target="blanck"
          rel="nofollow"
          coloename="#FF0000"
        >
          <FaYoutube />
        </WrapIcon>
        <Span colorhover="#FF0000">subscrib</Span>
      </Wrap>
    </div>
  )
}

export default SocialMedia

const Name = styled.p`
  text-transform: capitalize;
  font-size: 1.7rem;
  font-weight: bold;
  margin: 2rem 0;
  &:first-child {
    margin: 0rem 0rem 2rem 0rem;
  }
`
// const WrapIcon  = styled.div``
const WrapIcon = styled.a`
  background-color: ${props => props.coloename};
  color: ${props => props.theme.colors.thirth};
  width: 5rem;
  height: 5rem;
  display: inline-block;
  display: flex;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  & > svg {
    margin: auto;
  }
`
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Span = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.5rem;
  &:hover {
    color: ${props => props.colorhover};
  }
`
