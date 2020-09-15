import React from "react"
import styled, { css } from "styled-components"
import { flexbox, layout, space, color, typography } from "styled-system"
import { Link } from "gatsby"

// navigation basic style
export const NavItems = styled.ul`
  ${layout};
  ${flexbox};
  & > li {
    margin-left: 1rem;
    ${space};
    &:hover {
      ${color};
    }
  }
`

//Extend a Tag Style
const textTransform = props => `text-transform:${props.textTransform}`
export const NavList = styled.li`
  ${flexbox};
  ${layout};
  &:not(:first-child) {
    ${space};
  }
  color: ${props => props.theme.colors.secondary};
  & > a {
    ${textTransform};
    ${typography};
    &:hover {
      ${props =>
        props.Ahover &&
        css`
          color: ${props.Ahover};
        `}
    }
  }
  &:hover {
    color: ${props => props.theme.colors.primary};
    ${color};
  }
  &:hover > svg {
    fill: ${props => props.theme.colors.primary};
  }
`
// SVG Color Extend
const SVGcolor = props => `fill:${props.svgcolor} !important`
const NavLinkIntern = styled(Link)`
  ${space};
  & > svg {
    ${SVGcolor}
  }
`
const NavLinkExtern = styled.a`
  ${space};
  & > svg {
    ${SVGcolor}
  }
`

export const NavLink = props => {
  if (props.href)
    return (
      <NavLinkExtern href={props.href} target="blank" {...props}>
        {props.children}
      </NavLinkExtern>
    )
  if (props.to)
    return (
      <NavLinkIntern to={props.to} {...props}>
        {props.children}
      </NavLinkIntern>
    )
}
