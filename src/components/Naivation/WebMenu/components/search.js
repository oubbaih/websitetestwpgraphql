import React, { useState } from "react"
import { FaSearch } from "react-icons/fa"
import styled from "styled-components"
import SearchCards from "./SearchCards"
import { motion } from "framer-motion"
const Search = () => {
  const [openSearch, setOpenSearch] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const HandleSubmit = e => {
    e.preventDefault()
  }
  return (
    <>
      <button
        style={{ backgroundColor: "none", border: "none" }}
        onClick={e => {
          e.preventDefault()
          setOpenSearch(!openSearch)
        }}
      >
        <FaSearch style={{ fill: "#aaa" }} />
      </button>
      {openSearch && (
        <DivContnet>
          <Form
            onSubmit={HandleSubmit}
            animate={{ bottom: "-7.5rem" }}
            initial={{ bottom: "-10rem" }}
            transition={{ duration: 0.3 }}
          >
            <Input
              type="text"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
            <Button>Search</Button>
          </Form>
          <Box>{searchValue && <SearchCards SeachPost={searchValue} />}</Box>
        </DivContnet>
      )}
    </>
  )
}

export default Search

const Form = styled(motion.form)`
  width: 30rem;
  padding: 1rem;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  border: 1px solid #eee;
  border-top: 3px solid #f45511;
  background-color: #fff;
  bottom: -7.5rem;
  position: absolute;
  right: 12%;
  z-index: 10000;
`
const Input = styled.input`
  flex-basis: 80%;
  border: 1px solid #eee;
  height: 2rem;
`
const Button = styled.button`
  flex-basis: 20%;
  background-color: #000;
  color: #fff;
  font-weight: bold;
  text-transform: capitalize;
  font-size: 1.2rem;
  text-align: center;
`
const DivContnet = styled.div`
  position: relative;
`
const Box = styled.div`
  position: absolute;
  top: 7.5rem;
  right: 12%;
  z-index: 10000;
`
