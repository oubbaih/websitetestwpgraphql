import React from "react"
import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
import { NavLink } from "../../../../styleTheming/basicSTyle/navs"
import {
  useDispatchFunctions,
  useStateContextValues,
} from "../../../../GlobalStore/index"
import SocialMedia from "../../../TopNavigation/components/SocialMedia"
import Menus from "./menus"
import { motion, AnimatePresence } from "framer-motion"
import ImageBg from "./ImageBg"
const Background = () => {
  const dispatch = useDispatchFunctions()
  const { mobilemenuopen } = useStateContextValues()
  const HandleClick = e => {
    e.preventDefault()
    dispatch({ type: "MOBILE_MENU_OPEN" })
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {mobilemenuopen && (
        <BackgroundStyle
          key="modal"
          animate={{ width: "100vw" }}
          initial={{ width: 0 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ImageBg />
          <Wrap>
            <SocialMedia svgcolor="#fff" />
            <ExNavLink href="#" onClick={HandleClick} svgcolor="#fff">
              <FaTimes />
            </ExNavLink>
            <Menus />
          </Wrap>
        </BackgroundStyle>
      )}
    </AnimatePresence>
  )
}

export default Background

const BackgroundStyle = styled(motion.div)`
  background-color: blue;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2000;
  overflow: hidden;
`
const Wrap = styled.div`
  position: absolute;
  left: 2rem;
  top: 3rem;
  z-index: 9000;
  display: flex;
  justify-content: flex-start;
  width: 100vw;
`
const ExNavLink = styled(NavLink)`
  position: absolute;
  right: 4rem;
`
