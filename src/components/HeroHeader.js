import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import HeroImage from './HeroImage'

const HeroHeader = ({ children }) => {
  return (
    <HeroImageStyled>
      <Content>
        <HeaderStyled />
        <HeroHeaderContent>{children}</HeroHeaderContent>
      </Content>
    </HeroImageStyled>
  )
}

const HeroImageStyled = styled(HeroImage)`
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  padding: 0 3rem;
`

const HeaderStyled = styled(Header)`
  display: flex;
  width: 100%;
`

const HeroHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  color: #d4d4d4;
`

export default HeroHeader
