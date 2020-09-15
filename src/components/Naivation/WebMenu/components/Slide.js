import React, { useState } from "react"
import styled from "styled-components"
import { Row, Col } from "../../../../styleTheming/basicSTyle/LayoutStyle"
import { useStateContextValues } from "../../../../GlobalStore/index"
import SlideContent from "./slideContent"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa"
import { motion } from "framer-motion"
const Slide = ({ arr }) => {
  const [next, setNext] = useState(0)
  const [hideBtnLeft, sethideBtnLeft] = useState(true)
  const [hideBtnRight, sethideBtnRight] = useState(false)
  const { category } = useStateContextValues()

  const HandelGoRight = () => {
    setNext(0)
    sethideBtnLeft(true)
    sethideBtnRight(false)
  }
  const HandelGoLeft = () => {
    setNext(-900)
    sethideBtnRight(true)
    sethideBtnLeft(false)
  }

  return (
    <Box>
      <Row display="flex" justifyContent="space-between" alignItems="baseLine">
        {arr.map(ite =>
          ite.nodes.map(
            (it, idss) =>
              category === it.name && (
                <>
                  {it.posts.nodes.map(
                    (item, idex) =>
                      idex < 8 && (
                        <Col key={idex}>
                          <motion.div initial={{ x: 0 }} animate={{ x: next }}>
                            <SlideContent custom={idex} data={item} />
                          </motion.div>
                        </Col>
                      )
                  )}
                  {it.posts.nodes.length >= 6 ? (
                    <ArroBox key={idss}>
                      <ArrowBtn onClick={HandelGoRight} disabled={hideBtnLeft}>
                        <FaAngleLeft />
                      </ArrowBtn>
                      <ArrowBtn onClick={HandelGoLeft} disabled={hideBtnRight}>
                        <FaAngleRight />
                      </ArrowBtn>
                    </ArroBox>
                  ) : (
                    <ArroBox style={{ opacity: 0.2 }} key={idss}>
                      <ArrowBtn>
                        <FaAngleLeft />
                      </ArrowBtn>
                      <ArrowBtn>
                        <FaAngleRight />
                      </ArrowBtn>
                    </ArroBox>
                  )}
                </>
              )
          )
        )}
      </Row>
    </Box>
  )
}

export default Slide
const Box = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-left: 2rem;
  padding-top: 3rem;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
`
const ArroBox = styled.div`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  left: 2rem;
  bottom: 1rem;
  & > button:not(:first-child) {
    margin-left: 0.4rem;
  }
`
const ArrowBtn = styled.button`
  &:disabled {
    opacity: 0.4;
  }

  & > svg {
    fill: #eee;
    border: 1px solid #eee;
    width: 100%;
    height: 100%;
    padding: 0.5rem;
  }
  &:hover {
    background-color: orange;
    & > svg {
      border: none;
    }
  }
  background-color: red;
  width: 2.5rem;
  height: 2.5rem;
`
