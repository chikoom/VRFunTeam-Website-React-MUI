import React from 'react'
import PropTypes from 'prop-types'
import { ThemeContextProvider } from '../src/contexts/ThemeContext'
import { PagesProvider } from '../src/contexts/PagesContext'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from '../src/ui/Header/Header'
import Footer from '../src/ui/Footer/Footer'
import Router from 'next/router'
import * as gtag from '../src/functions/gtag'
Router.events.on('routeChangeComplete', url => gtag.pageview(url))

export default function MyApp(props) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <PagesProvider>
        <ThemeContextProvider>
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeContextProvider>
      </PagesProvider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
