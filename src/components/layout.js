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
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </SiteContent>
    </>
  )
}

const SiteContent = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 3rem 1.45rem;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
