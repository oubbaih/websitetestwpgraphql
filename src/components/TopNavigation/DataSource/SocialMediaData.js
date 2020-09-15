import { graphql, useStaticQuery } from "gatsby"

export const TopSocialMediaData = () =>
  useStaticQuery(graphql`
    query {
      wp {
        generalinfoMediaSettings {
          facebookLink
          instagramLink
          linkedLink
          twetterLink
          youtubeLink
        }
      }
    }
  `)
