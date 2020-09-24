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

const getCurrentPageIndecies = pagePath => {
  console.log(pagePath)
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
    console.log(value)
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
