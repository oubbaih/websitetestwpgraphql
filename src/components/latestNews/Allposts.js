import React, { useState } from "react"
import styled from "styled-components"
import { useStateContextValues } from "../../GlobalStore/index"
import LatestCard from "./LatestCard"
import { motion, AnimatePresence } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"
const Allposts = () => {
  const { allWpCategory } = useStaticQuery(graphql`
    query {
      allWpCategory {
        edges {
          node {
            name
            uri
            posts {
              nodes {
                title
                slug
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const { latestcategoryname } = useStateContextValues()
  const [ct, setct] = useState(2)
  const [hide, setHide] = useState(true)
  const HnadleClick = () => {
    if (latestcategoryname === "all") {
      setct(ct + 1)
      if (ct >= 3) {
        setHide(false)
      }
    }
  }
  const ParentVariants = {
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    initial: {
      opacity: 0,
    },
    exit: {
      opacity: 0,
    },
  }
  return (
    <Box>
      <AnimatePresence>
        <PostContainer
          variants={ParentVariants}
          animate="animate"
          initial="initial"
          key="modal-2"
        >
          {allWpCategory.edges.map(
            (cat, ind) =>
              latestcategoryname === "all" && (
                <LatestCard
                  key={ind}
                  datposts={cat.node.posts.nodes.slice(0, ct)}
                />
              )
          )}
          {latestcategoryname === "all" && hide && (
            <Button key="dddh" onClick={HnadleClick}>
              load more
            </Button>
          )}
        </PostContainer>
      </AnimatePresence>
    </Box>
  )
}

export default Allposts

const PostContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const Button = styled.button`
  color: ${props => props.theme.colors.secondary};
  border: 1px solid ${props => props.theme.colors.secondary};
  text-transform: capitalize;
  padding: 0.5rem;
  margin: auto;
  font-weight: 600;
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
