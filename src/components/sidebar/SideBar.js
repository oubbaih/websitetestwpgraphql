import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import SideLatestPost from "./SideLatestPost"
import SocialMedia from "./SocialMedia"
import NewsLetter from "./NewsLetter"
const SideBar = () => {
  const { allFooterWidgetCustopmApi } = useStaticQuery(graphql`
    query {
      allFooterWidgetCustopmApi {
        nodes {
          widgets {
            rendered
          }
        }
      }
    }
  `)
  return (
    <Aside>
      <NewsLetter />
      <SocialMedia />
      {allFooterWidgetCustopmApi.nodes.map(widget =>
        widget.widgets.map((wi, idss) => (
          <div dangerouslySetInnerHTML={{ __html: wi.rendered }} key={idss} />
        ))
      )}

      <SideLatestPost />
    </Aside>
  )
}

export default SideBar

const Aside = styled.aside`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-basis: 30%;
  @media (max-width: 726px) {
    display: none;
  }
`
