import React, { useState, useContext } from 'react'

const Pages = [
  {
    name: 'Home',
    path: '/',
    children: [],
  },
  {
    name: 'Services',
    path: '/services',
    children: [
      {
        name: 'Private',
        path: '/services/private',
        children: [],
      },
      {
        name: 'Company',
        path: '/services/company',
        children: [],
      },
      {
        name: 'Events',
        path: '/services/events',
        children: [],
      },
    ],
  },
  {
    name: 'Revolution',
    path: '/revolution',
    children: [],
  },
  {
    name: 'About',
    path: '/about',
    children: [],
  },
  {
    name: 'Contact',
    path: '/contact',
    children: [],
  },
  {
    name: 'Estimate',
    path: '/estimate',
    children: [],
  },
]

const PageContext = React.createContext()
const PageUpdateContext = React.createContext()
const AllPagesContext = React.createContext()

export function usePageContext() {
  return useContext(PageContext)
}

export function useUpdatePageContext() {
  return useContext(PageUpdateContext)
}

export function useAllPagesContext() {
  return useContext(AllPagesContext)
}

const getCurrentPageIndex = pagePath => {
  return Pages.findIndex(page => page.path === pagePath)
}

export const PagesProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(
    getCurrentPageIndex(window.location.pathname)
  )
  const updateCurrentPage = value => {
    setCurrentPage(value)
  }
  return (
    <AllPagesContext.Provider value={Pages}>
      <PageContext.Provider value={currentPage}>
        <PageUpdateContext.Provider value={updateCurrentPage}>
          {children}
        </PageUpdateContext.Provider>
      </PageContext.Provider>
    </AllPagesContext.Provider>
  )
}
