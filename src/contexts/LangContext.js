import React, { useState } from 'react'

const languages = ['en', 'he']

const LangContext = React.createContext()
export function useLanguageContext() {
  return useContext(LangContext)
}

export function LangProvider({ children }) {
  const [language, setLanguage] = useState('en')
  const contextValue = {
    language,
    setLanguage,
  }
  return (
    <LangContext.Provider value={contextValue}>{children}</LangContext.Provider>
  )
}
