import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
const Aboutdata = () => {
  const { wpPage } = useStaticQuery(graphql`
    query {
      wpPage(slug: { eq: "about" }) {
        title
        content
        aboutpagefeatures {
          contactusemail
          description
        }
      }
    }
  `)
  return (
    <Wrap>
      <Title>{wpPage.title}</Title>
      <Box
        dangerouslySetInnerHTML={{
          __html: wpPage.aboutpagefeatures.description,
        }}
      />
      <ContactUs>
        Contact Us :<span>{wpPage.aboutpagefeatures.contactusemail}</span>
      </ContactUs>
    </Wrap>
  )
}

export default Aboutdata

const Wrap = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  color: ${props => props.theme.colors.thirth};
  flex-basis: 50%;
  @media (max-width: 616px) {
    text-align: center;
  }
`

const Title = styled.h6`
  text-transform: uppercase;
`
const ContactUs = styled.p`
  & > span {
    color: ${props => props.theme.colors.orange};
    margin-left: 0.5rem;
    margin-top: 1rem;
  }
`
const Box = styled.div``
