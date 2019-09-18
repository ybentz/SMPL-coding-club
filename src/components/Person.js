import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

import { Card } from '../styles/Card'

const Person = ({ person }) => {
  const { name, description, imageUrl } = person
  return (
    <CardStyled>
      <Container>
        <ImgStyled
          fluid={imageUrl.childImageSharp.fluid}
          alt={`${name} Avatar`}
        />
        <h3>{name}</h3>
        {description && <p>{description}</p>}
      </Container>
    </CardStyled>
  )
}

const CardStyled = styled(Card)`
  display: inline-block;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`

const Container = styled.div`
  display: grid;
  grid-gap: 0.5rem 0.75rem;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 1fr min-content;
  align-items: center;
  grid-template-areas:
    'avatar name'
    'description description';
  &::last-child {
    margin-bottom: 0;
  }
  p {
    grid-area: description;
  }
  h3 {
    grid-area: name;
  }
  h3,
  p {
    margin: 0;
  }
  @media ${({ theme }) => theme.device.tablet} {
    grid-template-areas:
      'avatar name'
      'avatar description';
    max-width: 800px;
  }
`

const ImgStyled = styled(Img)`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colorPrimary};
  box-shadow: 0 0 1.25rem 0 rgba(0, 0, 0, 0.25);
  grid-area: avatar;
  @media ${({ theme }) => theme.device.tablet} {
    width: 100px;
    height: 100px;
  }
`

export default Person
