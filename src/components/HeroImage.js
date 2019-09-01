import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const BackgroundImageStyled = styled(BackgroundImage)`
  height: 400px;
`

const HeroImage = ({ children, className }) => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "hero-image.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = data.desktop.childImageSharp.fluid
  const overlayColor = `rgba(4,14,24, 0.7)`
  const backgroundFluidImageStack = [
    `linear-gradient(${overlayColor}, ${overlayColor})`,
    imageData,
  ]
  return (
    <BackgroundImageStyled
      Tag="section"
      fluid={backgroundFluidImageStack}
      backgroundColor={`#040e18`}
      className={className}
      style={{
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      {children}
    </BackgroundImageStyled>
  )
}

export default HeroImage
