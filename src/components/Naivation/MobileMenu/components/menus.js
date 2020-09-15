import React from "react"
import { PrimaryMenuData } from "../../WebMenu/DataSource/dataMenu"
import {
  NavLink,
  NavItems,
  NavList,
} from "../../../../styleTheming/basicSTyle/navs"
import styled from "styled-components"
const Menus = () => {
  const { allWpMenu } = PrimaryMenuData()
  return (
    <NavItems justifyContent="flex-start" flexDirection="column" mb="3rem">
      {allWpMenu.nodes.map(cat =>
        cat.menuItems.nodes.map((menu, index) => (
          <ExNavList key={index}>
            {menu.label.toLowerCase() === "home" ? (
              <NavLink to="/" fontSize="1.6rem">
                {menu.label}
              </NavLink>
            ) : (
              <NavLink to={menu.url} fontSize="1.6rem">
                {menu.label}
              </NavLink>
            )}
            <NavItems justifyContent="flex-start" flexDirection="column">
              {menu.childItems.nodes.map((child, idss) => (
                <ExNavList key={idss} textTransform="uppercase">
                  <NavLink to={child.url} fontSize="1.6rem">
                    {child.label}
                  </NavLink>
                </ExNavList>
              ))}
            </NavItems>
          </ExNavList>
        ))
      )}
    </NavItems>
  )
}

export default Menus

const ExNavList = styled(NavList)`
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  letter-spacing: 0.5rem;

  &:first-child {
    margin-top: 8rem;
  }
  &:hover {
    color: #000;
  }
`
