import React from "react"
import { gql, useQuery } from "@apollo/client"
import { FaSpinner, FaUserCircle } from "react-icons/fa"
import styled from "styled-components"
const QUERY_POST_VIEWS = gql`
  query PostViwsQuery($id: ID!) {
    post(id: $id) {
      commentCount
      comments {
        nodes {
          approved
          author {
            node {
              name
            }
          }
          content
        }
      }
    }
  }
`
const CommentQuery = ({ postId }) => {
  const { loading, error, data } = useQuery(QUERY_POST_VIEWS, {
    variables: { id: postId },
    pollInterval: 500,
  })

  if (loading) return <FaSpinner />
  if (error) return <p>0</p>

  return (
    <span>{data.post.commentCount === null ? 0 : data.post.commentCount}</span>
  )
}

export const CommentAproverd = ({ postId }) => {
  const { loading, error, data } = useQuery(QUERY_POST_VIEWS, {
    variables: { id: postId },
    pollInterval: 500,
  })

  if (loading) return <FaSpinner />
  if (error) return <p>0</p>
  return (
    <Wrap>
      {data.post.comments.nodes.map(
        (comment, index) =>
          comment.approved && (
            <Box key={index}>
              <UserPhoto>
                <FaUserCircle />
              </UserPhoto>
              <Content>
                <UserName>{comment.author.node.name}</UserName>
                <UserMessage
                  dangerouslySetInnerHTML={{ __html: comment.content }}
                />
              </Content>
            </Box>
          )
      )}
    </Wrap>
  )
}

export default CommentQuery

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 5rem;
`
const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  flex: 1;
`
const UserPhoto = styled.div`
  & > svg {
    font-size: 5rem;
  }
`
const UserName = styled.div`
  text-transform: uppercase;
  font-weight: 700;
`
const UserMessage = styled.div`
  color: ${props => props.theme.colors.secondary};
  margin-top: 0.5rem;
  font-size: 1.4rem;
  text-transform: capitalize;
  background-color: #f3f3f3;
  display: inline-block;
  padding: 0.5rem;
  border-radius: 2%;
  min-height: 10rem;
`
