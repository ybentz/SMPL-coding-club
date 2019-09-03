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
        <div>
          {links &&
            links.map(({ name, description, url }) => {
              return (
                <LinkCardStyled>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <h4>{name}</h4>
                    <p>{description}</p>
                  </a>
                </LinkCardStyled>
              )
            })}
        </div>
      </PageSectionStyled>
      <SEO
        title={`Resource Page - ${name}`}
        image={imageUrl.childImageSharp.fluid.src}
      />
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
          fluid(maxHeight: 400) {
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

const LinkCardStyled = styled(Card)`
  margin-bottom: 1.125rem;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
  &:hover a {
    color: #000000;
  }
  &:last-child {
    margin-bottom: 0;
  }
`

export default ResourcePage
