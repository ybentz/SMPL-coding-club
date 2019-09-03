import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ResourceCardList from '../components/ResourceCardList'
import { PageSection, PageTextSection } from '../styles/Page'

const IndexPage = () => (
  <Layout
    headerTitle="San Mateo Public Library Coding Club"
    headerSubTitle="Kick off your journey in the coding world"
  >
    <SEO title="Home" />
    <PageTextSection>
      <h2>Welcome to the SMPL coding club!</h2>
      <p>
        Here are a few links to the most popular programming languages for
        beginners. Click on any of them to learn more.
      </p>
      <p>Now go learn, have fun and build something great.</p>
    </PageTextSection>
    <PageSection>
      <ResourceCardList filter={popularResourceFilter} />
    </PageSection>
    <PageTextSection>
      <p>
        To browse the list of all available programming languages and resources
        click <Link to="/resources">here</Link>.
      </p>
    </PageTextSection>
  </Layout>
)

const popularResources = ['scratch', 'python', 'javascript']
const popularResourceFilter = resource => {
  return popularResources.includes(resource.id)
}

export default IndexPage
