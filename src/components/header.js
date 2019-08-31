import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import LogoImage from './LogoImage'

const Header = ({ headerTheme }) => {
  return (
    <HeaderStyled headerTheme={headerTheme}>
      <HeaderContent>
        <Link to="/">
          <LogoImage style={{ width: '75px' }} headerTheme={headerTheme} />
        </Link>
        <HeaderLinks>
          <HeaderLink to="/resources">Resources</HeaderLink>
          <HeaderLink to="/about">About</HeaderLink>
        </HeaderLinks>
      </HeaderContent>
    </HeaderStyled>
  )
}

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderLink = styled(Link)`
  margin-left: 30px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.15s;
  &:hover {
    color: #d2d2d2;
  }
`

const HeaderStyled = styled.header`
  background-color: ${({ headerTheme }) =>
    headerTheme.isTransparent ? 'rgba(255, 255, 255, 0)' : '#FFF'};
  margin-bottom: 1.45rem;
`

Header.propTypes = {
  headerTheme: PropTypes.object,
}

Header.defaultProps = {
  headerTheme: {},
}

export default Header
