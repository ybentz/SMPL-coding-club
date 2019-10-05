import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Card, cardBorderRadius } from '../styles/Card'
import { PageSection } from '../styles/Page'

const ResourcePage = ({ data }) => {
  const { name, description, links, imageUrl } = data.resource
  return (
    <Layout headerTitle={name} headerSubTitle={description}>
      <PageSectionStyled>
        <ImageContainer>
          <ImgStyled fluid={imageUrl.childImageSharp.fluid} />
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
                  {description && <p>{description}</p>}
                </LinkCardStyled>
              )
            })}
        </LinkCardList>
      </PageSectionStyled>
      <SEO
        title={name}
        description={`Beginner-friendly learning resources for ${name}`}
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
          fluid(maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  }
`

const PageSectionStyled = styled(PageSection)`
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
  }
`

const imageMaxHeight = '200px'
const imageMaxHeightMobileL = '300px'
const ImageContainer = styled.div`
  width: 100%;
  max-height: ${imageMaxHeight};
  overflow: hidden;
  margin-bottom: 1.5rem;
  border-radius: ${cardBorderRadius};
  flex-shrink: 0;
  @media ${({ theme }) => theme.device.mobileL} {
    max-height: ${imageMaxHeightMobileL};
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 200px;
    flex-direction: row;
    margin-right: 2rem;
  }
  @media ${({ theme }) => theme.device.laptop} {
    width: 300px;
  }
`

const ImgStyled = styled(Img)`
  border-radius: ${cardBorderRadius};
  max-height: ${imageMaxHeight};
  @media ${({ theme }) => theme.device.mobileL} {
    max-height: ${imageMaxHeightMobileL};
  }
`

const LinkCardList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    max-width: none;
  }
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
