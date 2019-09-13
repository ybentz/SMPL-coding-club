import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Card } from '../styles/Card'
import { PageSection } from '../styles/Page'

const ResourcePage = ({ data }) => {
  const { name, description, links, imageUrl } = data.resource
  return (
    <Layout headerTitle={name} headerSubTitle={description}>
      <PageSectionStyled>
        <ImageContainer>
          <Img
            fluid={imageUrl.childImageSharp.fluid}
            style={{
              borderRadius: '0.625rem',
            }}
          />
        </ImageContainer>
        <LinkCardList>
          {links &&
            links.map(({ name, description, url }) => {
              return (
                <LinkCardStyled
                  as="a"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={url}
                >
                  <h4>{name}</h4>
                  <p>{description}</p>
                </LinkCardStyled>
              )
            })}
        </LinkCardList>
      </PageSectionStyled>
      <SEO title={`${name}`} image={imageUrl.childImageSharp.fluid.src} />
    </Layout>
  )
}

export const resourcePageQuery = graphql`
  query resourcePageQuery($slug: String!) {
    resource: resourcesJson(slug: { eq: $slug }) {
      name
      description
      links {
        description
        name
        url
      }
      imageUrl {
        childImageSharp {
          fluid(maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`

const ImageContainer = styled.div`
  width: 300px;
  max-height: 300px;
  overflow: hidden;
  margin-right: 2rem;
`

const PageSectionStyled = styled(PageSection)`
  display: flex;
`

const LinkCardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`

const LinkCardStyled = styled(Card)`
  display: inline-block;
  text-align: center;
  transition: transform 0.3s, color ${({ theme }) => theme.linkTransition};
  &:hover {
    transform: scale(1.05);
    color: ${({ theme }) => theme.colorSecondaryHover};
  }
  &:last-child {
    margin-bottom: 0;
  }
`

export default ResourcePage
