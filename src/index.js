import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { PagesProvider } from './contexts/PagesContext'

ReactDOM.render(
  <PagesProvider>
    <App />
  </PagesProvider>,
  document.getElementById('root')
)
