import React, { useState, useContext } from 'react'

const createPagePathMap = pages => {
  const map = {}
  pages.forEach(page => {
    map[page.path] = page
    if (page.children.length > 0) {
      page.children.forEach(childPage => {
        map[childPage.path] = childPage
      })
    }
  })
  return map
}

const pages = [
  {
    name: 'Home',
    nameLang: {
      en: 'Home',
      he: 'בית',
    },
    path: '/',
    special: false,
    icon: 'HomeIcon',
    children: [],
  },
  {
    name: 'Services',
    nameLang: {
      en: 'Services',
      he: 'אירועים',
    },
    path: '/services',
    special: false,
    icon: 'AppsIcon',
    children: [
      {
        name: 'Private',
        nameLang: {
          en: 'Private',
          he: 'פרטיים',
        },
        path: '/services/private',
        children: [],
        special: false,
        icon: 'GroupIcon',
      },
      {
        name: 'Company',
        nameLang: {
          en: 'Company',
          he: 'חברות',
        },
        path: '/services/company',
        children: [],
        special: false,
        icon: 'BusinessIcon',
      },
      {
        name: 'Events',
        nameLang: {
          en: 'Events',
          he: 'כנסים',
        },
        path: '/services/events',
        children: [],
        special: false,
        icon: 'EmojiEventsIcon',
      },
    ],
  },
  {
    name: 'Revolution',
    nameLang: {
      en: 'Revolution',
      he: 'המהפכה',
    },
    path: '/revolution',
    special: false,
    icon: 'AllInclusiveIcon',
    children: [],
  },
  {
    name: 'About',
    nameLang: {
      en: 'About',
      he: 'עלינו',
    },
    path: '/about',
    special: false,
    icon: 'InfoIcon',
    children: [],
    meta: `
    <title key='title'>About Us - Company & Team | VRFunTeam</title>
    <meta name="description" key="description" content=""/>
    `,
  },
  {
    name: 'Contact',
    nameLang: {
      en: 'Contact',
      he: 'יצירת קשר',
    },
    path: '/contact',
    special: false,
    icon: 'SendIcon',
    children: [],
  },
  {
    name: 'Estimate',
    nameLang: {
      en: 'Estimate',
      he: 'הערכת מחיר',
    },
    path: '/estimate',
    special: true,
    icon: 'AccountBalanceWalletIcon',
    children: [],
  },
]

// const pagesMap = createPagePathMap(pages)

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
    getCurrentPageIndecies('/about')
  )

  const setPageIndecies = path => {
    setCurrentPageIndecies(getCurrentPageIndecies(path))
  }

  const contextValue = {
    pages,
    currentPageIndecies,
    getCurrentPageIndecies,
    setCurrentPageIndecies,
    deconstructPages,
    setPageIndecies,
  }
  return (
    <PagesContext.Provider value={contextValue}>
      {children}
    </PagesContext.Provider>
  )
}
