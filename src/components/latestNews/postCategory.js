import React from "react"
import styled from "styled-components"
import { useStateContextValues } from "../../GlobalStore/index"
import LatestCard from "./LatestCard"
import { motion, AnimatePresence } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"
const PostCategory = () => {
  const { latestcategoryname } = useStateContextValues()
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
  const ne = 10
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
          key="modal-1"
        >
          {allWpCategory.edges.map(
            (cat, ind) =>
              cat.node.name === latestcategoryname && (
                <LatestCard
                  key={`mode-${ind}`}
                  datposts={cat.node.posts.nodes.slice(0, ne)}
                />
              )
          )}
        </PostContainer>
      </AnimatePresence>
    </Box>
  )
}

export default PostCategory

const PostContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
