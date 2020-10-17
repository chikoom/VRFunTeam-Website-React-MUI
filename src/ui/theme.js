import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const vrPink = '#d84987'
const vrBlue = '#306ca0'
const themeAll = {
  typography: {
    h1: {
      fontWeight: 900,
      fontFamily: 'Raleway',
    },
    h2: {
      fontWeight: 900,
      fontFamily: 'Raleway',
    },
    h3: {
      fontWeight: 900,
      fontFamily: 'Raleway',
    },
    h4: {
      fontWeight: 900,
      fontFamily: 'Raleway',
    },
    h5: {
      fontWeight: 900,
      fontFamily: 'Raleway',
    },
    h6: {
      fontWeight: 900,
      fontFamily: 'Raleway',
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
    listIcon: {
      fontSize: '2em',
      transform: 'rotate(-15deg)',
      textShadow: '0px 0px 23px #555',
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: vrBlue,
        fontSize: '1rem',
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
    MuiDivider: {
      root: {
        marginTop: '1em',
        marginBottom: '2em',
      },
    },
    MuiAccordion: {
      root: {
        '&.Mui-expanded': {
          margin: 0,
        },
      },
    },
  },
}

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
  ...themeAll,
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
  ...themeAll,
})

dDarkTheme = responsiveFontSizes(dDarkTheme)
export const darkTheme = dDarkTheme
