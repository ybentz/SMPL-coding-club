import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import Person from '../components/Person'
import SEO from '../components/seo'
import { PageSection, PageTextSection } from '../styles/Page'

const AboutPage = () => {
  const { people } = useStaticQuery(graphql`
    query {
      people: allPeopleJson {
        nodes {
          name
          description
          imageUrl {
            childImageSharp {
              fluid(maxWidth: 200) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout headerTitle="About">
      <SEO title="About Page" />
      <PageTextSection>
        <h2>About the coding club:</h2>
        <h4>
          The SMPL coding club is a self-learning experience that takes places
          around once a month in the San Mateo Public Library, usually on
          Saturdays at 11am in the computer lab.
          <br />
          <br />
          During each hour and a half session, the instructors are walking
          around the lab and are there to help, answer any question, explain,
          steer in the right direction, etc.
          <br />
          <br />
          If you've always been interested in learning what coding is all about
          or even if you already have some coding experience you're more than
          welcome to join us, expand your knowledge and learn new things!
        </h4>
      </PageTextSection>
      <PageSection>
        <h2>Meet the instructors:</h2>
        {people.nodes.map(person => {
          return <Person person={person} />
        })}
      </PageSection>
    </Layout>
  )
}

export default AboutPage
