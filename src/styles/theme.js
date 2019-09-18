import { darken, lighten } from 'polished'
import { device } from './media-queries'

const defaultTheme = {
  maxContentWidth: '1280px',
  backgroundPrimary: '#0a0e1a',
  colorPrimary: '#e8e8e8',
  colorSecondary: '#4d4d4d',
  colorAccent: '#5ab963',
  linkTransition: '0.2s',
}

const defaultThemeDeps = {
  colorPrimaryHover: lighten(0.1, defaultTheme.colorPrimary),
  colorSecondaryHover: darken(0.2, defaultTheme.colorSecondary),
}

export default {
  ...defaultTheme,
  ...defaultThemeDeps,
  device,
}
