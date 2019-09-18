import styled from 'styled-components'

import { device } from './media-queries'

export const PageSection = styled.div`
  margin: 2rem 0;
  @media ${device.tablet} {
    margin: 3rem 0;
  }
`

export const PageTextSection = styled(PageSection)`
  max-width: 800px;
`
