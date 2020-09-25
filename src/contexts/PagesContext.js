import React, { useState, useContext } from 'react'

const Pages = [
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

const getCurrentPageIndecies = pagePath => {
  const indecies = [null, null]
  Pages.forEach((page, index) => {
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

export const PagesProvider = ({ children }) => {
  const [currentPageIndecies, setCurrentPageIndecies] = useState(
    getCurrentPageIndecies(window.location.pathname)
  )

  const updateCurrentPage = value => {
    setCurrentPageIndecies(value)
  }
  return (
    <AllPagesContext.Provider value={Pages}>
      <PageContext.Provider value={currentPageIndecies}>
        <PageUpdateContext.Provider value={updateCurrentPage}>
          {children}
        </PageUpdateContext.Provider>
      </PageContext.Provider>
    </AllPagesContext.Provider>
  )
}
