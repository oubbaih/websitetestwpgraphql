import React from "react"
import styled from "styled-components"
import Image from "../../../Image"
import { motion } from "framer-motion"
import { NavLink } from "../../../../styleTheming/basicSTyle/navs"

const SlideContent = ({ data, custom }) => {
  const ContentAnimation = {
    animate: i => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
      },
    }),
    initial: {
      opacity: 0,
    },
  }

  return (
    <Content
      custom={custom}
      variants={ContentAnimation}
      initial="initial"
      animate="animate"
    >
      <NavLink to={`/blog/${data.slug}`}>
        {data.featuredImage && (
          <Image
            imageUrl={data.featuredImage.node.remoteFile.childImageSharp.fixed}
          />
        )}
        <h3>{data.title}</h3>
      </NavLink>
    </Content>
  )
}

export default SlideContent
const Content = styled(motion.div)`
  width: 22rem;
  height: 12rem;
  h3 {
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`
