import React, { useState, useContext } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { lightTheme, darkTheme, lightTheme_he, darkTheme_he } from '../ui/theme'

const ThemeUpdateContext = React.createContext()

export function useUpdateTheme() {
  return useContext(ThemeUpdateContext)
}

export function ThemeContextProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const [currentTheme, setCurrentTheme] = useState({
    dark: darkTheme,
    light: lightTheme,
  })

  const themes = {
    dark: {
      en: darkTheme,
      he: darkTheme_he,
    },
    light: {
      en: lightTheme,
      he: lightTheme_he,
    },
    he: {
      dark: darkTheme_he,
      light: lightTheme_he,
    },
    en: {
      dark: darkTheme,
      light: lightTheme,
    },
  }
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }
  const changeThemeLanguage = language => {
    setCurrentTheme(themes[language])
  }

  return (
    <ThemeUpdateContext.Provider
      value={{ toggleTheme, isDarkTheme, changeThemeLanguage }}
    >
      <ThemeProvider
        theme={isDarkTheme ? currentTheme.dark : currentTheme.light}
      >
        {children}
      </ThemeProvider>
    </ThemeUpdateContext.Provider>
  )
}
