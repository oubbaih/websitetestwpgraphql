import React from "react"
import Menu from "./components/menu"
import Search from "./components/search"
import Logo from "./components/logo"
import {
  Container,
  Row,
  Col,
} from "../../../styleTheming/basicSTyle/LayoutStyle"
import { Nav } from "../style/style"
import DropDown from "./components/dropDown"
import MobileMenu from "../MobileMenu/MobileMenu"
import styled from "styled-components"
const WebMenu = () => {
  return (
    <>
      <Nav>
        <Container>
          <Row
            display="flex"
            justifyContent="space-between"
            alignItems="baseLine"
          >
            <Col display={["flex", "flex", "none", "none"]}>
              <MobileMenu />
            </Col>
            <Col>
              <Logo />
            </Col>
            <Col flexBasis="80%" display={["none", "none", "flex", "flex"]}>
              <Menu />
            </Col>
            <ExCol>
              <Search />
            </ExCol>
          </Row>
        </Container>
      </Nav>
      <DropDown />
    </>
  )
}

export default WebMenu
const ExCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
