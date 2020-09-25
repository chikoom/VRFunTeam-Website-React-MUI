import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { LangProvider } from '../contexts/LangContext'
import { ThemeContextProvider } from '../contexts/ThemeContext'
import CssBaseline from '@material-ui/core/CssBaseline'
import { useAllPagesContext } from '../contexts/PagesContext'
import Footer from './ui/Footer/Footer'
const Main = props => {
  // const pages = deconstructPages(useAllPagesContext())
}

export default Main
