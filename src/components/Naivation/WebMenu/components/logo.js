import React from "react"
import { LogoData } from "../DataSource/dataLogo"
import { NavLink } from "../../../../styleTheming/basicSTyle/navs"
import { Image } from "../../style/style"
const Logo = () => {
  const { wp } = LogoData()
  return (
    <NavLink to="/">
      <Image src={wp.getHeader.logo} alt="logo image" />
    </NavLink>
  )
}

export default Logo
