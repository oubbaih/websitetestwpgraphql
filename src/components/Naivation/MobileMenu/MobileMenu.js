import React from "react"
import { FaBars } from "react-icons/fa"
import styled from "styled-components"
import { NavLink } from "../../../styleTheming/basicSTyle/navs"
import { useDispatchFunctions } from "../../../GlobalStore/index"
const MobileMenu = () => {
  const dispatch = useDispatchFunctions()
  const HandleClick = e => {
    e.preventDefault()
    dispatch({ type: "MOBILE_MENU_OPEN" })
  }
  return (
    <>
      <NavLink href="#" onClick={HandleClick} svgcolor="#aaa">
        <MenuIcon />
      </NavLink>
    </>
  )
}

export default MobileMenu

const MenuIcon = styled(FaBars)`
  font-size: 2.2rem;
`
