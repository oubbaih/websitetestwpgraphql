import styled from "styled-components"
import { FaChevronDown } from "react-icons/fa"
import { space } from "styled-system"
import { motion } from "framer-motion"
export const Nav = styled.nav`
  width: 100%;
  height: 5rem;
  padding: 1rem 0rem;
`

export const Image = styled.img`
  width: 8rem;
  height: 1.5rem;
`
export const ArrowIcon = styled(FaChevronDown)`
  font-size: 1rem;
  ${space};
  fill: ${props => props.theme.colors.secondary};
  &:hover {
  }
`
export const Wrapper = styled(motion.div)`
  width: 100%;
  height: 25rem;
  position: absolute;
  z-index: 1000;
  background-color: ${props => props.theme.colors.thirth};
  border-top: 1px solid #aaa;
`
