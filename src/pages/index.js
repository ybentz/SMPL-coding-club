import { Link } from 'gatsby'
import styled from 'styled-components'
import React from 'react'

import HeroHeader from '../components/HeroHeader'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ResourceCardList from '../components/ResourceCardList'

const IndexPage = () => (
  <>
    <HeroHeader />
    <Layout noHeader={true}>
      <SEO title="Home" />
      <Section>
        <h2>Welcome to the SMPL coding club!</h2>
        <p>
          Here are a few links to the most popular programming languages for
          beginners. Click on any of them to learn more.
        </p>
        <p>Now go learn, have fun and build something great.</p>
      </Section>
      <Section>
        <ResourceCardList filter={popularResourceFilter} />
      </Section>
      <Section>
        <p>
          To browse the list of all available programming languages and
          resources click <Link to="/resources">here</Link>.
        </p>
      </Section>
    </Layout>
  </>
)

const popularResources = ['scratch', 'python', 'javascript']
const popularResourceFilter = resource => {
  return popularResources.includes(resource.id)
}

const Section = styled.div`
  margin: 2rem 0;
`

export default IndexPage
