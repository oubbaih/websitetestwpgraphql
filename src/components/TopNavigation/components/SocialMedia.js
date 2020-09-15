import React from "react"
import { TopSocialMediaData } from "../DataSource/SocialMediaData"
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import {
  NavItems,
  NavList,
  NavLink,
} from "../../../styleTheming/basicSTyle/navs"

const SocialMedia = ({ svgcolor, props }) => {
  const { wp } = TopSocialMediaData()
  return (
    <NavItems display="flex" justifyContent="space-between" color="thirth">
      <NavList>
        <NavLink
          href={wp.generalinfoMediaSettings.facebookLink}
          svgcolor={svgcolor}
        >
          <FaFacebookF />
        </NavLink>
      </NavList>
      <NavList>
        <NavLink
          href={wp.generalinfoMediaSettings.instagramLink}
          svgcolor={svgcolor}
        >
          <FaInstagram />
        </NavLink>
      </NavList>
      <NavList>
        <NavLink
          href={wp.generalinfoMediaSettings.linkedLink}
          svgcolor={svgcolor}
        >
          <FaLinkedinIn />
        </NavLink>
      </NavList>
      <NavList>
        <NavLink
          href={wp.generalinfoMediaSettings.twetterLink}
          svgcolor={svgcolor}
        >
          <FaTwitter />
        </NavLink>
      </NavList>
      <NavList>
        <NavLink
          href={wp.generalinfoMediaSettings.youtubeLink}
          svgcolor={svgcolor}
        >
          <FaYoutube />
        </NavLink>
      </NavList>
    </NavItems>
  )
}

export default SocialMedia
