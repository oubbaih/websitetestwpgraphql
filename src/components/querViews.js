import React from "react"
import { gql, useQuery } from "@apollo/client"
import { FaSpinner } from "react-icons/fa"

const QUERY_POST_VIEWS = gql`
  query PostViwsQuery($id: ID!) {
    post(id: $id) {
      postViews
    }
  }
`
const QuerViews = ({ postId }) => {
  const { loading, error, data } = useQuery(QUERY_POST_VIEWS, {
    variables: { id: postId },
    pollInterval: 500,
  })

  if (loading) return <FaSpinner />
  if (error) return <p>0</p>

  return <span>{data.post.postViews}</span>
}

export default QuerViews
