import React from "react"
import TopMenu from "../../TopNavigation/components/TopMenu"
import { Container } from "../../../styleTheming/basicSTyle/LayoutStyle"
import styled from "styled-components"
const BottomNav = () => {
  return (
    <Nav>
      <Container>
        <Box>
          <CopyRoght>
            ©All Right Reserved by : <span>Lahcen oubbaih</span>{" "}
          </CopyRoght>
          <TopMenu />
        </Box>
      </Container>
    </Nav>
  )
}

export default BottomNav

const Nav = styled.nav`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  font-size: 1.4rem;
  @media (max-width: 260px) {
    height: 8rem;
  }
`
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  @media (max-width: 418px) {
    flex-direction: column;
  }
`
const CopyRoght = styled.p`
  text-transform: capitalize;
  text-align: center;
  & > span {
    color: ${props => props.theme.colors.orange};
    font-weight: 700;
    font-size: 1.1rem;
  }
`
