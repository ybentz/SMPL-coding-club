import { Link } from 'gatsby'
import styled from 'styled-components'
import React from 'react'

import {
  CardDescription,
  CardHeader,
  CardImage,
  CardWithImage,
  CardWithImageContent,
} from '../styles/Card'

const ResourceCard = ({ resource }) => (
  <LinkStyled to={`/resources/${resource.slug}`}>
    <CardWithImageStyled>
      <CardImageStyled fluid={resource.imageUrl.childImageSharp.fluid} />
      <CardWithImageContent>
        <CardHeader>{resource.name}</CardHeader>
        <CardDescription>{resource.description}</CardDescription>
      </CardWithImageContent>
    </CardWithImageStyled>
  </LinkStyled>
)

const LinkStyled = styled(Link)`
  display: flex;
`

const CardWithImageStyled = styled(CardWithImage)`
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`

const CardImageStyled = styled(CardImage)`
  height: 250px;
  box-shadow: 0 0.5rem 1.25rem 0 rgba(0, 0, 0, 0.05);
`

export default ResourceCard
