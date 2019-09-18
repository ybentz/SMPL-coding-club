import styled from 'styled-components'

import { device } from './media-queries'

export const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  font-family: Merriweather, Helvetica, sans-serif;
  @media ${device.mobileL} {
    font-size: 2.5rem;
  }
  @media ${device.laptop} {
    font-size: 3rem;
  }
`

export const HeroSubTitle = styled.h3`
  max-width: 750px;
  font-size: 1.125rem;
  line-height: 2rem;
  text-align: center;
  @media ${device.laptop} {
    font-size: 1.375rem;
  }
`
