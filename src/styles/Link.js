import styled from 'styled-components'
import { darken } from 'polished'
import { Link } from 'gatsby'

import theme from '../styles/theme'

export const LinkButton = styled(Link)`
  display: inline-block;
  height: 2rem;
  line-height: 2rem;
  font-weight: 600;
  letter-spacing: 0.75px;
  padding: 0.125rem 1rem;
  background-color: ${theme.colorAccent};
  color: white;
  border-radius: 0.25rem;
  text-transform: capitalize;
  transition: background-color 0.15s;
  &:hover {
    background-color: ${darken(0.05, theme.colorAccent)};
  }
`
