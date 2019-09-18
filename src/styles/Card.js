import Img from 'gatsby-image'
import styled from 'styled-components'

const cardPadding = '0.75rem'
export const cardBorderRadius = '0.5625rem'

export const Card = styled.div`
  padding: ${cardPadding};
  border-radius: ${cardBorderRadius};
  box-shadow: 0 0 1.25rem 0 rgba(0, 0, 0, 0.15);
`

export const CardWithImage = styled(Card)`
  padding: 0;
`

export const CardWithImageContent = styled.div`
  padding: ${cardPadding};
`

export const CardHeader = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

export const CardDescription = styled.p`
  font-size: 1rem;
`

export const CardImage = styled(Img)`
  width: 100%;
  height: 100%;
  border-radius: ${cardBorderRadius};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`
