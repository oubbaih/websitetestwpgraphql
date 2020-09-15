import styled, { css } from "styled-components"
import { flexbox, layout } from "styled-system"
export const Container = styled.div`
  max-width: 75%;
  /* background-color: #eeeeee; */
  margin: 0 auto;
  ${props =>
    props.fluid &&
    css`
      max-width: 100% !important;
    `}
  height:100%;
  @media (max-width: 830px) {
    max-width: 95%;
  }
`

export const Row = styled.div`
  ${layout};
  ${flexbox};
  height: 100%;
  width: 100%;
`
export const Col = styled.div`
  ${flexbox};
  ${layout};
`
