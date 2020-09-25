import React from 'react'
import Header from './ui/Header/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { LangProvider } from '../contexts/LangContext'
import { ThemeContextProvider } from '../contexts/ThemeContext'
import CssBaseline from '@material-ui/core/CssBaseline'
import { useAllPagesContext } from '../contexts/PagesContext'

const deconstructPages = pagesArray => {
  const returnedPages = []
  pagesArray.forEach(page => {
    returnedPages.push(page)
    let childrenCount = page.children.length
    while (childrenCount) {
      returnedPages.push(page.children[childrenCount - 1])
      --childrenCount
    }
  })
  return returnedPages
}

function App() {
  const pages = deconstructPages(useAllPagesContext())
  return (
    <LangProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <CssBaseline />
          <Header />
          <Switch>
            {pages.map(page => (
              <Route
                key={page.path}
                exact
                path={page.path}
                render={() => <div>{page.name}</div>}
              />
            ))}
          </Switch>
        </BrowserRouter>
      </ThemeContextProvider>
    </LangProvider>
  )
}

export default App
