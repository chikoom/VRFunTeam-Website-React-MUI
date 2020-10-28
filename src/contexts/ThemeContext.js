import React, { useState, useContext, useEffect } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { lightTheme, darkTheme, lightTheme_he, darkTheme_he } from '../ui/theme'

const ThemeUpdateContext = React.createContext()

export function useUpdateTheme() {
  return useContext(ThemeUpdateContext)
}
const getQueryLanguage = qString => {
  return qString.includes('ln=he') ? 'he' : 'en'
}
export function ThemeContextProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const [currentTheme, setCurrentTheme] = useState(
    typeof window !== 'undefined' &&
      getQueryLanguage(window.location.search) === 'he'
      ? {
          dark: darkTheme_he,
          light: lightTheme_he,
        }
      : {
          dark: darkTheme,
          light: lightTheme,
        }
  )
  useEffect(() => {})

  const themes = {
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
