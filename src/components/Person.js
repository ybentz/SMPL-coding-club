import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

const Person = ({ person }) => {
  const { name, description, imageUrl } = person
  return (
    <Container>
      <ImgStyled
        fluid={imageUrl.childImageSharp.fluid}
        alt={`${name} Avatar`}
      />
      <div>
        <h3>{name}</h3>
        {description && <p>{description}</p>}
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  max-width: 800px;
`

const ImgStyled = styled(Img)`
  width: 100px;
  height: 100px;
  margin-right: 1.5rem;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid #d4d4d4;
  box-shadow: 0 0 1.25rem 0 rgba(0, 0, 0, 0.25);
`

export default Person
