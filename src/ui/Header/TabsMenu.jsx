import React, { useState } from 'react'
import Link from '../../Link'
import { DarkModeButton } from '../DarkModeButton'
import {
  Tabs,
  Tab,
  Button,
  makeStyles,
  MenuItem,
  MenuList,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
} from '@material-ui/core/'
import { usePagesContext } from '../../contexts/PagesContext'
import { event as GAevent } from '../../functions/gtag'
import LanguageButton from '../LanguageButton'
import { useLanguageContext } from '../../contexts/LangContext'

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '10px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    color: 'white',
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: '0px',
    zIndex: 1302,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
    '&.Mui-selected': {
      opacity: 1,
    },
  },
}))

const TabsMenu = props => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const classes = useStyles()
  const {
    pages,
    currentPageIndecies,
    setCurrentPageIndecies,
  } = usePagesContext()

  const handleTabChange = (e, value) => {
    // setCurrentPageIndecies([value, null])
  }
  const handleMenuClick = event => {
    setAnchorEl(event.currentTarget)
    setMenuOpen(true)
  }
  const handleMenuClose = event => {
    setAnchorEl(null)
    setMenuOpen(false)
  }
  const handleListKeyDown = event => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setMenuOpen(false)
    }
  }
  const handleSubMenuClick = (event, parentIndex, index) => {
    setAnchorEl(null)
    setMenuOpen(false)
    // setCurrentPageIndecies([parentIndex, index])
  }
  const { siteData, language } = useLanguageContext()
  return (
    <>
      <Tabs
        value={currentPageIndecies[0]}
        onChange={handleTabChange}
        className={classes.tabContainer}
      >
        {pages.map(page => {
          const hasChildren = page.children.length
          return (
            <Tab
              aria-owns={
                hasChildren && anchorEl ? `menu-${page.name}` : undefined
              }
              aria-haspopup={hasChildren && anchorEl ? true : undefined}
              onMouseOver={
                hasChildren ? event => handleMenuClick(event) : undefined
              }
              label={page.nameLang[language]}
              className={classes.tab}
              component={Link}
              href={page.path}
              key={page.path}
              onClick={() =>
                GAevent({
                  category: 'Menu Buttons',
                  action: `Desktop Tabs ${page.name} Click`,
                  label: 'Website Actions',
                  value: '0',
                })
              }
            />
          )
        })}
      </Tabs>
      {pages.map((page, index) => {
        const hasChildren = page.children.length
        return hasChildren && anchorEl ? (
          <Popper
            open={menuOpen}
            anchorEl={anchorEl}
            role={undefined}
            transition
            disablePortal
            key={page.path}
            keepMounted
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
                <Paper classes={{ root: classes.menu }} elevation={0}>
                  <ClickAwayListener onClickAway={handleMenuClose}>
                    <MenuList
                      disablePadding
                      onMouseLeave={handleMenuClose}
                      autoFocusItem={false}
                      id={`menu-${page.name}`}
                      onKeyDown={handleListKeyDown}
                    >
                      {page.children.map((childPage, childIndex) => (
                        <MenuItem
                          key={childPage.path}
                          onClick={event => {
                            handleMenuClose()
                            handleTabChange(event, index)
                            handleSubMenuClick(event, index, childIndex)
                            GAevent({
                              category: 'Menu Buttons',
                              action: `Desktop Tabs ${childPage.name} Click`,
                              label: 'Website Actions',
                              value: '0',
                            })
                          }}
                          component={Link}
                          href={childPage.path}
                          classes={{ root: classes.menuItem }}
                          selected={
                            childIndex === currentPageIndecies[1] &&
                            index === currentPageIndecies[0]
                          }
                        >
                          {childPage.nameLang[language]}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        ) : (
          ''
        )
      })}
      <DarkModeButton />
      <LanguageButton />
      <Button
        component={Link}
        href='/estimate'
        variant='contained'
        color='secondary'
        className={classes.button}
        onClick={() =>
          GAevent({
            category: 'Estimate',
            action: 'Desktop Tabs Special Estimate Click',
            label: 'Website Actions',
            value: '0',
          })
        }
      >
        {siteData.priceEstimate}
      </Button>
    </>
  )
}

export default TabsMenu
