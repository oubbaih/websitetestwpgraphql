import React from "react"
import moment from "moment"

const CustomDate = () => {
  const Custom = moment().format("dddd ,MMMM Do YYYY")
  return <p>{Custom}</p>
}

export default CustomDate
