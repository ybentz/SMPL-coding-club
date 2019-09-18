import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'
import styled from 'styled-components'

import theme from '../styles/theme'

const BackgroundImageStyled = styled(BackgroundImage)`
  height: 400px;
  @media ${({ theme }) => theme.device.tablet} {
    /* iOS misbehaves with 'fixed' so remove from mobile entirely */
    /* Targeting psuedo-elements directly per https://www.gatsbyjs.org/packages/gatsby-background-image/#responsive-styling */
    &,
    &::before,
    &::after {
      background-attachment: fixed;
    }
  }
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
    >
      {children}
    </BackgroundImageStyled>
  )
}

export default HeroImage
