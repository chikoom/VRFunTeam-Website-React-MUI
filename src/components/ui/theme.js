import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const digiPink = '#5bb7fb'
const digiBlue = '#2e86d1'
//c8375f
let dLightTheme = createMuiTheme({
  palette: {
    common: {
      digiPink: digiPink,
      digiBlue: digiBlue,
    },
    primary: {
      main: digiBlue,
    },
    secondary: {
      main: digiPink,
    },
  },
  typography: {
    h5: {
      fontWeight: 900,
    },
  },
})

dLightTheme = responsiveFontSizes(dLightTheme)
export const lightTheme = dLightTheme

let dDarkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
})

dDarkTheme = responsiveFontSizes(dDarkTheme)
export const darkTheme = dDarkTheme
