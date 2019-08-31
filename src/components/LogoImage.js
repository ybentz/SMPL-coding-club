import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const LogoImage = ({ style, headerTheme }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "SMPL-logo-text.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      placeholderImageWhite: file(
        relativePath: { eq: "SMPL-logo-text-white.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  let image
  if (headerTheme.isLight) {
    image = data.placeholderImageWhite
  } else {
    image = data.placeholderImage
  }
  return (
    <Img
      fluid={image.childImageSharp.fluid}
      style={style}
      alt="SMPL Coding Club Logo"
    />
  )
}

export default LogoImage
