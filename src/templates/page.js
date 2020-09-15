import React from "react"
import Contact from "../components/Contact/Contact"
import Layout from "../components/layout"
const Page = ({ pageContext }) => {
  const { title } = pageContext

  if (title.toLowerCase() === "contact") {
    return <Contact />
  } else {
    return (
      <Layout>
        {" "}
        <h1>{pageContext.title}</h1>
      </Layout>
    )
  }
}

export default Page
