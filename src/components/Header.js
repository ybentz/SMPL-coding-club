import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import LogoImage from './LogoImage'

const Header = ({ className }) => {
  return (
    <HeaderStyled className={className}>
      <Link to="/">
        <LogoImage imgStyles={{ width: '4.5rem' }} />
      </Link>
      <HeaderLinks>
        <HeaderLink to="/resources">Resources</HeaderLink>
        <HeaderLink to="/about">About</HeaderLink>
      </HeaderLinks>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1.45rem 0;
`

const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 600;
`

const HeaderLink = styled(Link)`
  margin-left: 1.875rem;
  color: ${({ theme }) => theme.colorPrimary};
  transition: color ${({ theme }) => theme.linkTransition};
  &:hover {
    color: ${({ theme }) => theme.colorPrimaryHover};
  }
`

Header.propTypes = {
  className: PropTypes.string,
}

Header.defaultProps = {
  className: '',
}

export default Header
