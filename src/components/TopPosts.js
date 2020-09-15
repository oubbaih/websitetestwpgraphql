import React, { useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

function TopPosts() {
  useEffect(() => {
    SlicePosts(0, postsPerPage)
    setNext(next * 2)
  }, [])
  const { allWpPost } = useStaticQuery(graphql`
    query {
      allWpPost(limit: 12) {
        nodes {
          title
          content
        }
      }
    }
  `)
  const postsPerPage = 3
  let [arrayForHoldingPosts, setarrayForHoldingPosts] = useState([])
  const [hideBtn, setHideBtn] = useState(true)
  const allPosts = allWpPost.nodes
  const [next, setNext] = useState(3)
  const SlicePosts = (start, end) => {
    const CurrentSlice = allPosts.slice(start, end)
    setarrayForHoldingPosts([...CurrentSlice])
  }
  const HandleShowMorePosts = () => {
    if (next === 9) {
      setHideBtn(false)
    }
    setNext(next => next + postsPerPage)
    SlicePosts(0, next)
  }
  return (
    <>
      {arrayForHoldingPosts.map((items, index) => (
        <div key={index} style={{ border: "5px solid #00f", margin: "5rem 0" }}>
          <h1>{items.title}</h1>
        </div>
      ))}
      {hideBtn && <button onClick={HandleShowMorePosts}>show more</button>}
    </>
  )
}

export default TopPosts
