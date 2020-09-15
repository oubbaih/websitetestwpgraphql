// import React from "react"
// import { Link } from "gatsby"
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
// import styled from "styled-components"
// import { motion } from "framer-motion"
// function Pager({ pageContext }) {
//   console.log(pageContext)
//   const { previousPagePath, nextPagePath } = pageContext
//   console.log(previousPagePath)
//   console.log(nextPagePath)
//   return (
//     <div style={{ display: "flex", flexDrection: "space-between" }}>
//       {previousPagePath && (
//         <motion.div
//           whileTap={{
//             scale: 0.8,
//             opacity: 0.2,
//             transition: { duration: 0.4, ease: "easeInOut" },
//           }}
//         >
//           <ExLink to={previousPagePath}>
//             <FaArrowLeft />
//           </ExLink>
//         </motion.div>
//       )}
//       {nextPagePath && (
//         <motion.div
//           whileTap={{
//             scale: 0.8,
//             opacity: 0.2,
//             transition: { duration: 0.4, ease: "easeInOut" },
//           }}
//         >
//           <ExLink to={nextPagePath}>
//             <FaArrowRight />
//           </ExLink>
//         </motion.div>
//       )}
//     </div>
//   )
// }

// export default Pager

// const ExLink = styled(Link)`
//   padding: 1rem;
//   width: 5rem;
//   height: 5rem;
//   border-radius: 50%;
//   background-color: ${props => props.theme.colors.orange};
//   display: flex;
//   &:first-child {
//     margin-left: 1rem;
//   }
//   & > svg {
//     fill: ${props => props.theme.colors.thirth};
//     margin: auto;
//   }
// `
