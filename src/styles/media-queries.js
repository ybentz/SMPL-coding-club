export const minSize = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const device = {
  mobileS: `(min-width: ${minSize.mobileS})`,
  mobileM: `(min-width: ${minSize.mobileM})`,
  mobileL: `(min-width: ${minSize.mobileL})`,
  tablet: `(min-width: ${minSize.tablet})`,
  laptop: `(min-width: ${minSize.laptop})`,
  laptopL: `(min-width: ${minSize.laptopL})`,
  desktop: `(min-width: ${minSize.desktop})`,
}
