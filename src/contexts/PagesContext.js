import React, { useState, useContext } from 'react'

const pages = [
  {
    name: 'Home',
    path: '/',
    special: false,
    icon: 'HomeIcon',
    children: [],
  },
  {
    name: 'Services',
    path: '/services',
    special: false,
    icon: 'AppsIcon',
    children: [
      {
        name: 'Private',
        path: '/services/private',
        children: [],
        special: false,
        icon: 'GroupIcon',
      },
      {
        name: 'Company',
        path: '/services/company',
        children: [],
        special: false,
        icon: 'BusinessIcon',
      },
      {
        name: 'Events',
        path: '/services/events',
        children: [],
        special: false,
        icon: 'EmojiEventsIcon',
      },
    ],
  },
  {
    name: 'Revolution',
    path: '/revolution',
    special: false,
    icon: 'AllInclusiveIcon',
    children: [],
  },
  {
    name: 'About',
    path: '/about',
    special: false,
    icon: 'InfoIcon',
    children: [],
  },
  {
    name: 'Contact',
    path: '/contact',
    special: false,
    icon: 'SendIcon',
    children: [],
  },
  {
    name: 'Estimate',
    path: '/estimate',
    special: true,
    icon: 'AccountBalanceWalletIcon',
    children: [],
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
