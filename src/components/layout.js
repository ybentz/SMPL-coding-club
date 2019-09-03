import 'normalize.css/normalize.css'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import HeroHeader from '../components/HeroHeader'
import { HeroTitle } from '../styles/HeroHeader'
import './layout.css'

const Layout = ({ children, headerTitle, headerSubTitle }) => (
  <>
    <HeroHeader>
      <HeroTitle>{headerTitle}</HeroTitle>
      {headerSubTitle && <h3>{headerSubTitle}</h3>}
    </HeroHeader>
    <SiteContent>
      <main>{children}</main>
    </SiteContent>
    <Footer>
      <FooterContent>
        This Site is built and maintained by Yonatan bentzur and is not an
        official SMPL website.
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
