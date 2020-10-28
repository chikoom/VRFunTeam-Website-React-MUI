import React, { useContext, useState } from 'react'
import { siteData } from './site_data'
const languages = ['en', 'he']

const LangContext = React.createContext()
export function useLanguageContext() {
  return useContext(LangContext)
}

const getQueryLanguage = qString => {
  return qString.includes('ln=he') ? 'he' : 'en'
}

export function LangProvider({ children }) {
  const [language, setLanguage] = useState(
    typeof window !== 'undefined'
      ? getQueryLanguage(window.location.search)
      : 'en'
  )
  const changeLanguageTo = langString => {
    console.log('Changing language to ', langString)
    setLanguage(langString)
  }
  const contextValue = {
    siteData: siteData[language],
    language,
    languages,
    changeLanguageTo,
  }
  return (
    <LangContext.Provider value={contextValue}>{children}</LangContext.Provider>
  )
}
