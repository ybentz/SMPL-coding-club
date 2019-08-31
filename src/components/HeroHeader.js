import React from 'react'

import Header from './Header'
import HeroImage from './HeroImage'

const HeroHeader = () => {
  const headerTheme = {
    isLight: true,
    isTransparent: true,
  }
  return (
    <HeroImage>
      <Header headerTheme={headerTheme} />
    </HeroImage>
  )
}

export default HeroHeader
