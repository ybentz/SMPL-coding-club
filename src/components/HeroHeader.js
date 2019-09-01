import React from 'react'
import styled from 'styled-components'

import Header from './Header'
import HeroImage from './HeroImage'

const HeroHeader = () => {
  return (
    <HeroImageStyled>
      <Content>
        <HeaderStyled />
        <HeroHeaderContent>
          <Title>San Mateo Public Library Coding Club</Title>
          <h3>Kick off your journey in the coding world</h3>
        </HeroHeaderContent>
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

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
`

export default HeroHeader
