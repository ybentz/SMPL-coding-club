import { useStaticQuery, graphql } from 'gatsby'
import 'normalize.css/normalize.css'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import './layout.css'

const Layout = ({ children, noHeader = false }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {!noHeader && <Header siteTitle={data.site.siteMetadata.title} />}
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
}

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
