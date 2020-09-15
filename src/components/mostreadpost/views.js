import React from "react"
import { gql, useQuery } from "@apollo/client"
const POSTS_VIEWS = gql`
  query MyQuery($postid: ID!) {
    post(id: $postid) {
      postViews
    }
  }
`
const Views = ({ postId }) => {
  const { loading, error, data } = useQuery(POSTS_VIEWS, {
    variables: { postid: { postId }, refetch: true },
  })
  if (loading) return <p style={{ opacity: 0 }}>loading ...</p>
  if (error) return <p style={{ opacity: 0 }}>error ...</p>
  console.log(postId)
  return (
    <span>
      {data.post.postView === "" || data.post.postView === 0
        ? "View 0"
        : `Views ${data.post.postView}`}
    </span>
  )
}

export default Views
