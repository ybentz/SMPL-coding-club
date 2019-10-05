import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ResourceCardList from '../components/ResourceCardList'
import { PageSection, PageTextSection } from '../styles/Page'

const ResourcesPage = () => (
  <Layout
    headerTitle="Coding Resources"
    headerSubTitle="List of programming languages and other useful topics"
  >
    <SEO
      title="Resource List"
      description="Find beginner-friendly learning resources for many popular programming languages"
    />
    <PageTextSection>
      <h4>
        These are some of the best programming languages to start coding with.
        Most of them are beginner friendly but are very powerful and broadly
        used in the biggest tech companies out there.
      </h4>
    </PageTextSection>
    <PageSection>
      <ResourceCardList />
    </PageSection>
  </Layout>
)

export default ResourcesPage
