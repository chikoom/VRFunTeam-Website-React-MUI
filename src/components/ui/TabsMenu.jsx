import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DarkModeButton } from './DarkModeButton'
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
import {
  useAllPagesContext,
  usePageContext,
  useUpdatePageContext,
} from '../../contexts/PagesContext'

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
  logo: {
    height: '7em',
    paddingTop: '1em',
    paddingBottom: '1em',
  },
  headerText: {
    marginLeft: '1em',
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
  logoButton: {
    padding: '0',
    '&:hover': {
      backgroundColor: 'transparent',
    },
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
  const pages = useAllPagesContext()
  const currentPageIndex = usePageContext()
  const updatePageContext = useUpdatePageContext()

  const handleTabChange = (e, value) => {
    updatePageContext([value, null])
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
    updatePageContext([parentIndex, index])
  }
  return (
    <>
      <Tabs
        value={currentPageIndex[0]}
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
              label={page.name}
              className={classes.tab}
              component={Link}
              to={page.path}
              key={page.path}
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
                          }}
                          component={Link}
                          to={childPage.path}
                          classes={{ root: classes.menuItem }}
                          selected={
                            childIndex === currentPageIndex[1] &&
                            index === currentPageIndex[0]
                          }
                        >
                          {childPage.name}
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
      <Button variant='contained' color='secondary' className={classes.button}>
        Price Estimate
      </Button>
    </>
  )
}

export default TabsMenu
