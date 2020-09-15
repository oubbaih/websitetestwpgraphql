import React, { useState, useRef } from "react"
import styled from "styled-components"
import { gql, useMutation } from "@apollo/client"

const COMMENT_MUTATION = gql`
  mutation MyMutation(
    $clientMutationId: String!
    $commentOn: Int!
    $author: String!
    $authorEmail: String!
    $content: String!
    $authorUrl: String!
  ) {
    __typename
    createComment(
      input: {
        clientMutationId: $clientMutationId
        commentOn: $commentOn
        author: $author
        authorEmail: $authorEmail
        content: $content
        authorUrl: $authorUrl
      }
    ) {
      success
    }
  }
`
const Comments = ({ postid }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("")
  const [message, setMessage] = useState("")
  const myinput2 = useRef(null)
  const [createComment, { data, loading, error }] = useMutation(
    COMMENT_MUTATION
  )
  const HandleSubmit = e => {
    e.preventDefault()
    createComment({
      variables: {
        clientMutationId: "test",
        commentOn: postid,
        author: name,
        authorEmail: email,
        content: message ? message : "",
        authorUrl: website ? website : "",
      },
    })
    setTimeout(() => {
      myinput2.current.style.display = "none"
    }, 5000)

    setName("")
    setEmail("")
    setWebsite("")
    setMessage("")
  }

  return (
    <WrapComments onSubmit={HandleSubmit}>
      {loading && <Loading color="#3490dc">Loading ...</Loading>}
      {error && (
        <Loading color="#e3342f">
          something went wrong please try again...
        </Loading>
      )}
      {data && (
        <Loading ref={myinput2} color="#38c172">
          thank your for submit your comment
        </Loading>
      )}
      <Title>leave reply</Title>
      <TextArea
        placeholder="comment"
        onChange={e => setMessage(e.target.value)}
        value={message}
      />
      <NameInput
        type="text"
        onChange={e => setName(e.target.value)}
        placeholder="name:*"
        value={name}
        required
      />
      <EmailInput
        type="email"
        onChange={e => setEmail(e.target.value)}
        placeholder="email:*"
        value={email}
        required
      />
      <WebsiteInput
        type="text"
        onChange={e => setWebsite(e.target.value)}
        placeholder="webste url"
        value={website}
      />
      <Submit>post comment</Submit>
    </WrapComments>
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
`
const Title = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  margin: 3rem 0;
  font-size: 2rem;
`
const WrapComments = styled.form`
  display: flex;
  flex-direction: column;
`
const TextArea = styled.textarea`
  margin-bottom: 3rem;
`
const NameInput = styled.input``
const EmailInput = styled.input``
const WebsiteInput = styled.input``
const Submit = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.thirth};
  display: inline-block;
  padding: 1rem;
  text-align: center;
  text-transform: capitalize;
  margin-top: 3rem;
`
