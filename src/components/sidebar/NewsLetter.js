import React, { useState } from "react"
import { gql, useMutation } from "@apollo/client"
import styled from "styled-components"
import { motion } from "framer-motion"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
const MY_NEWSLETTER_MUTATION = gql`
  mutation MyMutation($clientMutationId: String!, $email: String!) {
    newslettersubscriber(
      input: { clientMutationId: $clientMutationId, email: $email }
    ) {
      success
    }
  }
`
const NewsLetter = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "newsletter.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const [email, setEmail] = useState("")
  const [Thank, setTank] = useState(false)
  const [newslettersubscriber, { loading, error }] = useMutation(
    MY_NEWSLETTER_MUTATION
  )
  const HandleSubmit = e => {
    e.preventDefault()
    newslettersubscriber({
      variables: { clientMutationId: "newsletter", email: email },
    })
    setEmail("")

    setTank(true)
    const mytime = setTimeout(() => {
      setTank(false)
    }, 10000)
    clearTimeout(mytime)
  }

  if (loading)
    return (
      <Loading>
        <p>loading ...</p>
      </Loading>
    )
  if (error)
    return (
      <Loading>
        <p>something wrong with your email plaese enter correct email</p>
      </Loading>
    )
  return (
    <Form onSubmit={HandleSubmit}>
      <Image fluid={file.childImageSharp.fluid} />
      <Overly />
      <Wrap>
        {Thank && (
          <ThankYou
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: Thank ? 0 : 200,
              opacity: Thank ? 1 : 0,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
          >
            <p>
              thanks for subscrib now you will be informated to our latest news
            </p>
          </ThankYou>
        )}
        <Message>subscrib to our newsletter</Message>
        <Input
          type="email"
          placeholder="enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Button>submit</Button>
      </Wrap>
    </Form>
  )
}

export default NewsLetter
const Loading = styled.div`
  width: 100%;
  height: 20rem;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  text-transform: capitalize;

  & > p {
    margin: auto;
  }
`
const ThankYou = styled(motion.div)`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: red;
  color: ${props => props.theme.colors.thirth};
  text-transform: capitalize;
  text-align: center;
  font-weight: 600;
  font-size: 1.9rem;
  & > p {
    margin: auto;
  }
`
const Form = styled.form`
  position: relative;
  width: 100%;
  /* height: 10rem; */
  background-color: ${props => props.theme.colors.orange};
  margin-bottom: 2rem;
  height: 30rem;
`
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  justify-content: center;
  position: absolute;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`
const Image = styled(Img)`
  z-index: 1;
  width: 100%;
  height: 100%;
`
const Overly = styled.div`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(20deg, #410cbc 0%, #ff6f31 100%);
  opacity: 0.8;
`
const Message = styled.p`
  text-transform: capitalize;
  color: ${props => props.theme.colors.thirth};
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1rem;
`

const Input = styled.input`
  &::placeholder {
    text-transform: capitalize;
  }
  margin-bottom: 1rem;
`

const Button = styled.button`
  text-transform: uppercase;
  color: ${props => props.theme.colors.thirth};
  background-color: ${props => props.theme.colors.primary};
  display: block;
  padding: 1rem;
  width: 100%;
  text-align: center;
  font-weight: 600;
`
