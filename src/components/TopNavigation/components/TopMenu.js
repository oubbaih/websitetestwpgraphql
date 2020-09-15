import React from "react"
import {
  NavItems,
  NavList,
  NavLink,
} from "../../../styleTheming/basicSTyle/navs"
import { TopMenuData } from "../DataSource/MenuData"
const TopMenu = () => {
  const { allWpMenu } = TopMenuData()
  return (
    <NavItems color="thirth" display="flex" justifyContent="space-between">
      {allWpMenu.edges.map(edge =>
        edge.node.menuItems.nodes.map((menu, index) => (
          <NavList key={index}>
            <NavLink to={menu.url}>{menu.label}</NavLink>
          </NavList>
        ))
      )}
    </NavItems>
  )
}

export default TopMenu
