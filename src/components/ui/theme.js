import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const vrPink = '#d84987'
const vrBlue = '#306ca0'

let dLightTheme = createMuiTheme({
  palette: {
    common: {
      digiPink: vrPink,
      digiBlue: vrBlue,
    },
    primary: {
      main: vrBlue,
    },
    secondary: {
      main: vrPink,
    },
  },
  typography: {
    h5: {
      fontWeight: 900,
    },
    tab: {
      fontFamily: 'Raleway',
      fontWeight: '700',
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
    },
  },
})

dLightTheme = responsiveFontSizes(dLightTheme)
export const lightTheme = dLightTheme

let dDarkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    common: {
      digiPink: vrPink,
      digiBlue: vrBlue,
    },
    primary: {
      main: vrPink,
    },
    secondary: {
      main: vrBlue,
    },
    background: {
      paper: '#424242',
      default: '#303030',
    },
  },
  typography: {
    h5: {
      fontWeight: 900,
    },
    tab: {
      fontFamily: 'Raleway',
      fontWeight: '700',
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
    },
  },
})

dDarkTheme = responsiveFontSizes(dDarkTheme)
export const darkTheme = dDarkTheme
