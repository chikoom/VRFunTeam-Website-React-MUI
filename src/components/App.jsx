import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { LangProvider } from '../contexts/LangContext'
import { ThemeContextProvider } from '../contexts/ThemeContext'
import CssBaseline from '@material-ui/core/CssBaseline'
import { usePagesContext } from '../contexts/PagesContext'
import Header from './ui/Header/Header'
import Footer from './ui/Footer/Footer'
import HomePage from './views/Home'

function App() {
  const { deconstructPages } = usePagesContext()
  const pages = deconstructPages()
  return (
    <LangProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <CssBaseline />
          <Header />
          <main style={{ minHeight: '80vh' }}>
            <Switch>
              <Route exact path='/' render={() => <HomePage />} />
            </Switch>
          </main>
          <Footer />
        </BrowserRouter>
      </ThemeContextProvider>
    </LangProvider>
  )
}

export default App
