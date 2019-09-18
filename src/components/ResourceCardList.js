import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import React from 'react'

import ResourceCard from './ResourceCard'

const ResourceCardList = ({ filter }) => {
  const { resources } = useStaticQuery(graphql`
    query {
      resources: allResourcesJson {
        nodes {
          id
          slug
          name
          description
          imageUrl {
            childImageSharp {
              fluid(maxHeight: 400) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const filteredResources = filter
    ? resources.nodes.filter(filter)
    : resources.nodes
  return (
    <CardList>
      {filteredResources.map(resource => {
        return <ResourceCard resource={resource} key={resource.id} />
      })}
    </CardList>
  )
}

const CardList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto;
  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${({ theme }) => theme.device.laptop} {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 1.5rem;
  }
`

export default ResourceCardList
