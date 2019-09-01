import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const LogoImage = ({ imgStyles }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "SMPL-logo-text-white.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const image = data.placeholderImage
  return (
    <Img
      fluid={image.childImageSharp.fluid}
      style={imgStyles}
      alt="SMPL Coding Club Logo"
    />
  )
}

export default LogoImage
