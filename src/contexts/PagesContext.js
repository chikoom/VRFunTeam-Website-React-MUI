import React, { useState, useContext } from 'react'

const pages = [
  {
    name: 'Home',
    path: '/',
    children: [],
    special: false,
  },
  {
    name: 'Services',
    path: '/services',
    children: [
      {
        name: 'Private',
        path: '/services/private',
        children: [],
        special: false,
      },
      {
        name: 'Company',
        path: '/services/company',
        children: [],
        special: false,
      },
      {
        name: 'Events',
        path: '/services/events',
        children: [],
        special: false,
      },
    ],
  },
  {
    name: 'Revolution',
    path: '/revolution',
    children: [],
    special: false,
  },
  {
    name: 'About',
    path: '/about',
    children: [],
    special: false,
  },
  {
    name: 'Contact',
    path: '/contact',
    children: [],
    special: false,
  },
  {
    name: 'Estimate',
    path: '/estimate',
    children: [],
    special: true,
  },
]

const getCurrentPageIndecies = pagePath => {
  const indecies = [null, null]
  pages.forEach((page, index) => {
    if (page.path === pagePath) indecies[0] = index
    if (page.children) {
      page.children.forEach((childPage, childIndex) => {
        if (childPage.path === pagePath) {
          indecies[0] = index
          indecies[1] = childIndex
        }
      })
    }
  })
  return indecies
}

const deconstructPages = () => {
  const returnedPages = []
  pages.forEach(page => {
    returnedPages.push(page)
    let childrenCount = page.children.length
    while (childrenCount) {
      returnedPages.push(page.children[childrenCount - 1])
      --childrenCount
    }
  })
  return returnedPages
}

const PagesContext = React.createContext()
export function usePagesContext() {
  return useContext(PagesContext)
}

export const PagesProvider = ({ children }) => {
  const [currentPageIndecies, setCurrentPageIndecies] = useState(
    getCurrentPageIndecies(window.location.pathname)
  )
  const contextValue = {
    pages,
    currentPageIndecies,
    setCurrentPageIndecies,
    deconstructPages,
  }
  return (
    <PagesContext.Provider value={contextValue}>
      {children}
    </PagesContext.Provider>
  )
}
