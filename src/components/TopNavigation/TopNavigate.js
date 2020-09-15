import React from "react"
import CustomDate from "./components/CustomDate"
import SocialMedia from "./components/SocialMedia"
import TopMenu from "./components/TopMenu"
import { NavBarTop } from "./style/TopNavStyle"
import { Container, Row, Col } from "../../styleTheming/basicSTyle/LayoutStyle"

const TopNavigation = () => {
  return (
    <NavBarTop>
      <Container>
        <Row justifyContent={["center", "space-between"]} display="flex">
          <Col display={["none", "block", "block", "block"]}>
            <CustomDate />
          </Col>
          <Col display={["none", "block", "block", "block"]} flexBasis="40%">
            <TopMenu />
          </Col>
          <Col>
            <SocialMedia />
          </Col>
        </Row>
      </Container>
    </NavBarTop>
  )
}
export default TopNavigation
