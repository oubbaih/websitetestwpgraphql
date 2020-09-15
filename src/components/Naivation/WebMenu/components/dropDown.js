import React from "react"
import { Container } from "../../../../styleTheming/basicSTyle/LayoutStyle"
import {
  useStateContextValues,
  useDispatchFunctions,
} from "../../../../GlobalStore/index"
import { graphql, useStaticQuery } from "gatsby"
import { Wrapper } from "../../style/style"

import Slide from "./Slide"
const DropDown = () => {
  const { allWpCategory } = useStaticQuery(graphql`
    query {
      allWpCategory {
        nodes {
          name
          posts {
            nodes {
              title
              slug
              featuredImage {
                node {
                  remoteFile {
                    childImageSharp {
                      fixed(width: 200, height: 120) {
                        ...GatsbyImageSharpFixed
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
  let arr = []
  arr.push(allWpCategory)
  const { open, category } = useStateContextValues()
  const dispatch = useDispatchFunctions()
  return (
    <>
      {open && category.toLowerCase() !== "home" && (
        <Wrapper
          onMouseEnter={e => dispatch({ type: "DROPDOWN_STATE", open: true })}
          onMouseLeave={e => dispatch({ type: "DROPDOWN_STATE", open: false })}
          animate={{ height: open ? "25rem" : 0 }}
          initial={{ height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Container>
            <Slide arr={arr} />
          </Container>
        </Wrapper>
      )}
    </>
  )
}

export default DropDown
