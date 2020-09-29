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
import PageHeader from './ui/PageHeader'
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
              <Route
                exact
                path='/about'
                render={() => (
                  <PageHeader header='About Us'>
                    <About />
                  </PageHeader>
                )}
              />
              <Route
                exact
                path='/revolution'
                render={() => (
                  <PageHeader header='The VR Revolution'>
                    <Revolution />
                  </PageHeader>
                )}
              />
              <Route
                exact
                path='/services'
                render={() => (
                  <PageHeader header='Our Services'>
                    <Services />
                  </PageHeader>
                )}
              />
              <Route
                exact
                path='/contact'
                render={() => (
                  <PageHeader header='Contact Us'>
                    <Contact />
                  </PageHeader>
                )}
              />
              <Route
                exact
                path='/estimate'
                render={() => (
                  <PageHeader header='Price Estimate'>
                    <Estimate />
                  </PageHeader>
                )}
              />
              <Route
                exact
                path='/services/events'
                render={() => (
                  <PageHeader header='Conferences & Exhibitions'>
                    <ServicesEvents />
                  </PageHeader>
                )}
              />
              <Route
                exact
                path='/services/company'
                render={() => (
                  <PageHeader header='Company Events'>
                    <ServicesCompany />
                  </PageHeader>
                )}
              />
              <Route
                exact
                path='/services/private'
                render={() => (
                  <PageHeader header='Family & Friends'>
                    <ServicesPrivate />
                  </PageHeader>
                )}
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
