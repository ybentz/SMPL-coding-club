import 'normalize.css/normalize.css'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import HeroHeader from '../components/HeroHeader'
import { HeroTitle, HeroSubTitle } from '../styles/HeroHeader'
import theme from '../styles/theme'
import './layout.css'
// Load self-hosted fonts
import 'typeface-merriweather'
import 'typeface-lato'

const Layout = ({ children, headerTitle, headerSubTitle }) => (
  <ThemeProvider theme={theme}>
    <>
      <HeroHeader>
        <HeroTitle>{headerTitle}</HeroTitle>
        {headerSubTitle && <HeroSubTitle>{headerSubTitle}</HeroSubTitle>}
      </HeroHeader>
      <SiteContent>
        <main>{children}</main>
      </SiteContent>
      <Footer>
        <FooterContent>
          This website is built and maintained by Yonatan Bentzur and is not an
          official website for the City of San Mateo or the San Mateo Public
          Library.
        </FooterContent>
      </Footer>
    </>
  </ThemeProvider>
)

const contentPaddingVertical = '1.45rem'

const SiteContent = styled.div`
  margin: 0 auto;
  max-width: ${theme.maxContentWidth};
  padding: 0 1rem ${contentPaddingVertical};
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 3rem ${contentPaddingVertical};
  }
`

const Footer = styled.footer`
  background: ${theme.backgroundPrimary};
  color: ${theme.colorPrimary};
`

const FooterContent = styled(SiteContent)`
  padding-top: ${contentPaddingVertical};
  @media ${({ theme }) => theme.device.tablet} {
    padding-top: ${contentPaddingVertical};
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
