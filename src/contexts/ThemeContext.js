import React, { useState, useContext } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { lightTheme, darkTheme } from '../components/ui/theme'

const ThemeUpdateContext = React.createContext()

export function useUpdateTheme() {
  return useContext(ThemeUpdateContext)
}

export function ThemeContextProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <ThemeUpdateContext.Provider value={{ toggleTheme, isDarkTheme }}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeUpdateContext.Provider>
  )
}
