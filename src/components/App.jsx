import React from 'react'
import Header from './ui/Header'
import { lightTheme, darkTheme } from './ui/theme'
import { ThemeProvider } from '@material-ui/core/styles'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Header />
      Hello
    </ThemeProvider>
  )
}

export default App
