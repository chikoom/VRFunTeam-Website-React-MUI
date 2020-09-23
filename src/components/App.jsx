import React, { useState } from 'react'
import Header from './ui/Header'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { lightTheme, darkTheme } from './ui/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { LangProvider } from '../contexts/LangContext'
import { ThemeContextProvider } from '../contexts/ThemeContext'

function App() {
  return (
    <LangProvider>
      <ThemeContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' render={() => <div>home</div>} />
            <Route exact path='/services' render={() => <div>services</div>} />
            <Route
              exact
              path='/services/private'
              render={() => <div>private</div>}
            />
            <Route
              exact
              path='/services/company'
              render={() => <div>company</div>}
            />
            <Route
              exact
              path='/services/events'
              render={() => <div>events</div>}
            />
            <Route
              exact
              path='/revolution'
              render={() => <div>revolution</div>}
            />
            <Route exact path='/about' render={() => <div>about</div>} />
            <Route exact path='/contact' render={() => <div>contact</div>} />
            <Route exact path='/estimate' render={() => <div>estimate</div>} />
          </Switch>
        </BrowserRouter>
      </ThemeContextProvider>
    </LangProvider>
  )
}

export default App
