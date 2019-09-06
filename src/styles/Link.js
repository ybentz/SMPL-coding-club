import styled from 'styled-components'
import { darken } from 'polished'
import { Link } from 'gatsby'

// TODO - move colors to theme
const buttonBackgroundColor = '#005aff'

export const LinkButton = styled(Link)`
  display: inline-block;
  height: 2rem;
  line-height: 2rem;
  font-size: 0.9rem;
  padding: 0.125rem 0.75rem;
  background-color: ${buttonBackgroundColor};
  color: white;
  border-radius: 0.25rem;
  text-transform: uppercase;
  transition: background-color 0.15s;
  &:hover {
    background-color: ${darken(0.05, buttonBackgroundColor)};
  }
`
