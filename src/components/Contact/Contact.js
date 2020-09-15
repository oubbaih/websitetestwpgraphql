import React, { useState, useRef } from "react"
import styled from "styled-components"
import { gql, useMutation } from "@apollo/client"
import Layout from "../layout"
import { Container } from "../../styleTheming/basicSTyle/LayoutStyle"
const COMMENT_MUTATION = gql`
  mutation MyMutation(
    $clientMutationId: String!
    $lastName: String!
    $email: String!
    $message: String!
    $firstName: String!
  ) {
    __typename
    submissioncontactform(
      input: {
        clientMutationId: $clientMutationId
        email: $email
        firstName: $firstName
        lastName: $lastName
        message: $message
      }
    ) {
      success
    }
  }
`
const Comments = () => {
  const [firstName, setfirstName] = useState("")
  const [email, setEmail] = useState("")
  const [lastName, setlastName] = useState("")
  const [message, setMessage] = useState("")

  const myinput = useRef(null)
  const [submissioncontactform, { data, loading, error }] = useMutation(
    COMMENT_MUTATION
  )
  const HandleSubmit = e => {
    e.preventDefault()
    submissioncontactform({
      variables: {
        clientMutationId: "tdddest",
        firstName: firstName,
        email: email,
        lastName: lastName,
        message: message,
      },
    })
    setTimeout(() => {
      myinput.current.style.display = "none"
      setfirstName("")
      setEmail("")
      setlastName("")
      setMessage("")
    }, 5000)
  }
  return (
    <Layout>
      <Container>
        <WrapComments onSubmit={HandleSubmit}>
          <Title>contact us</Title>
          {loading && <Loading color="#3490dc">Loading ...</Loading>}
          {error && (
            <Loading color="#e3342f">
              something went wrong please try again...
            </Loading>
          )}
          {data && (
            <Loading ref={myinput} color="#38c172">
              thank your for contact us we will reply soon as possible
            </Loading>
          )}
          <NameInput
            type="text"
            onChange={e => setfirstName(e.target.value)}
            placeholder="firstName:*"
            value={firstName}
            required
          />
          <NameInput
            type="text"
            onChange={e => setlastName(e.target.value)}
            placeholder="lastName:*"
            value={lastName}
            required
          />
          <EmailInput
            type="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="email:*"
            value={email}
            required
          />
          <TextArea
            placeholder="comment"
            onChange={e => setMessage(e.target.value)}
            value={message}
            required
          />
          <Submit>send</Submit>
        </WrapComments>
      </Container>
    </Layout>
  )
}

export default Comments
const Loading = styled.div`
  display: inline-block;
  padding: 1rem;
  color: white;
  background-color: ${props => props.color};
  text-align: center;
  text-transform: uppercase;
  margin: 3rem 0;
`
const Title = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  margin: 3rem 0;
  font-size: 3rem;
  align-self: center;
`
const WrapComments = styled.form`
  display: flex;
  flex-direction: column;
`
const TextArea = styled.textarea`
  margin: 3rem 0;
`
const NameInput = styled.input``
const EmailInput = styled.input``
const Submit = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.thirth};
  display: inline-block;
  padding: 1rem;
  text-align: center;
  text-transform: capitalize;
`
