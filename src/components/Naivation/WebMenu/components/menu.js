import React from "react"
import { PrimaryMenuData } from "../DataSource/dataMenu"
import {
  NavItems,
  NavList,
  NavLink,
} from "../../../../styleTheming/basicSTyle/navs"
import { ArrowIcon } from "../../style/style"

import { useDispatchFunctions } from "../../../../GlobalStore/index"
const Menu = () => {
  const dispatch = useDispatchFunctions()
  const { allWpMenu } = PrimaryMenuData()

  return (
    <NavItems display="flex">
      {allWpMenu.nodes.map(node =>
        node.menuItems.nodes.map((item, index) => (
          <NavList
            key={index}
            textTransform="uppercase"
            color="secondary"
            Ahover="#000"
            fontWeight="600"
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
            ml={["0rem", "0rem", ".9rem", "1.5rem"]}
            fontSize={["0px", "0px", "13px", "15px"]}
            flexWrap="nowrap"
            onMouseEnter={event => {
              let MyCategory = event.target.textContent
              MyCategory.toLowerCase() !== "home" &&
                dispatch({
                  type: "DROPDOWN_STATE",
                  category: MyCategory,
                  open: true,
                })
            }}
          >
            {item.label.toLowerCase() === "home" ? (
              <NavLink to="/" fontSize="1.6rem">
                {item.label}
              </NavLink>
            ) : (
              <NavLink to={item.url} fontSize="1.6rem">
                {item.label}
              </NavLink>
            )}
            {item.label.toLowerCase() !== "home" && <ArrowIcon ml="0.5rem" />}
          </NavList>
        ))
      )}
    </NavItems>
  )
}

export default Menu
