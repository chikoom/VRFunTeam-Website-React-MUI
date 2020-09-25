import React from 'react'
import Header from './ui/Header/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { LangProvider } from '../contexts/LangContext'
import { ThemeContextProvider } from '../contexts/ThemeContext'
import CssBaseline from '@material-ui/core/CssBaseline'
import { usePagesContext } from '../contexts/PagesContext'
import Footer from './ui/Footer/Footer'

function App() {
  const { deconstructPages } = usePagesContext()
  const pages = deconstructPages()
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
          <Footer />
        </BrowserRouter>
      </ThemeContextProvider>
    </LangProvider>
  )
}

export default App
