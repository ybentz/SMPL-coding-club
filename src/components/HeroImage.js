import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'
import styled from 'styled-components'

import theme from '../styles/theme'

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
  const overlayColor = `rgba(4, 14, 24, 0.7)`
  const backgroundFluidImageStack = [
    `linear-gradient(${overlayColor}, ${overlayColor})`,
    imageData,
  ]
  return (
    <BackgroundImageStyled
      Tag="section"
      fluid={backgroundFluidImageStack}
      backgroundColor={theme.backgroundPrimary}
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
