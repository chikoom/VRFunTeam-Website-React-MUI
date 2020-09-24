import React, { useState } from 'react'

const languages = ['en', 'he', 'du']

const LangContext = React.createContext()

export function LangProvider({ children }) {
  const [language, setLanguage] = useState('en')
  function changeLanguage(languageValue) {
    setLanguage(languageValue)
  }
  return (
    <LangContext.Provider value={language}>{children}</LangContext.Provider>
  )
}
