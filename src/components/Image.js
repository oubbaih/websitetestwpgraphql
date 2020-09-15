import React from "react"
import Img from "gatsby-image"
const Image = ({ imageUrl }) => {
  if (!imageUrl) return ""
  return <Img fixed={imageUrl} />
}

export default Image
