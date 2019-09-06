import 'normalize.css/normalize.css'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import HeroHeader from '../components/HeroHeader'
import { HeroTitle, HeroSubTitle } from '../styles/HeroHeader'
import './layout.css'

const Layout = ({ children, headerTitle, headerSubTitle }) => (
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
)

const contentWidth = '1280px'
const contentPaddingHorizontal = '3rem'
const contentPaddingVertical = '1.45rem'

const SiteContent = styled.div`
  margin: 0 auto;
  max-width: ${contentWidth};
  padding: 0 ${contentPaddingHorizontal} ${contentPaddingVertical};
`

const Footer = styled.footer`
  background: #0a0e1a;
  color: #d4d4d4;
`

const FooterContent = styled(SiteContent)`
  padding-top: ${contentPaddingVertical};
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
