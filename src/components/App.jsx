import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { LangProvider } from '../contexts/LangContext'
import { ThemeContextProvider } from '../contexts/ThemeContext'
import CssBaseline from '@material-ui/core/CssBaseline'
import { usePagesContext } from '../contexts/PagesContext'
import Header from './ui/Header/Header'
import Footer from './ui/Footer/Footer'
import HomePage from './views/Home'
import About from './views/About'
import Revolution from './views/Revolution'
import Services from './views/Services'
import Estimate from './views/Estimate'
import ServicesEvents from './views/ServicesEvents'
import ServicesCompany from './views/ServicesCompany'
import ServicesPrivate from './views/ServicesPrivate'
import Contact from './views/Contact'

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
              <Route exact path='/about' render={() => <About />} />
              <Route exact path='/revolution' render={() => <Revolution />} />
              <Route exact path='/services' render={() => <Services />} />
              <Route exact path='/contact' render={() => <Contact />} />
              <Route exact path='/estimate' render={() => <Estimate />} />
              <Route
                exact
                path='/services/events'
                render={() => <ServicesEvents />}
              />
              <Route
                exact
                path='/services/company'
                render={() => <ServicesCompany />}
              />
              <Route
                exact
                path='/services/private'
                render={() => <ServicesPrivate />}
              />
            </Switch>
          </main>
          <Footer />
        </BrowserRouter>
      </ThemeContextProvider>
    </LangProvider>
  )
}

export default App
