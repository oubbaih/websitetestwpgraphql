import React from "react"
import StyleTheming from "../styleTheming"
import TopNavigate from "./TopNavigation/TopNavigate"
import Navigation from "./Naivation/Navigation"
import { useStateContextValues } from "../GlobalStore"
import { motion } from "framer-motion"
import Background from "./Naivation/MobileMenu/components/Background"
import Footer from "./footer/Footer"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
function Layout({ children }) {
  const { mobilemenuopen } = useStateContextValues()
  const { wp } = useStaticQuery(graphql`
    query {
      wp {
        getHeader {
          favicon
        }
      }
    }
  `)
  return (
    <StyleTheming>
      <Helmet>
        <link rel="icon" href={wp.getHeader.favicon} />
      </Helmet>
      <Background />
      <motion.div
        animate={{ scale: mobilemenuopen ? 0.95 : 1 }}
        initial={{ scale: mobilemenuopen ? 0.95 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <TopNavigate />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </motion.div>
    </StyleTheming>
  )
}
export default Layout
