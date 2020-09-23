import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ElevationScroll } from './helpers/ui-helpers'
import { DarkModeButton } from './DarkModeButton'
import {
  AppBar,
  Toolbar,
  Typography,
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
import logo from '../../assets/funteam-logo-bright.svg'
import {
  useAllPagesContext,
  usePageContext,
  useUpdatePageContext,
} from '../../contexts/PagesContext'
import zIndex from '@material-ui/core/styles/zIndex'

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
  },
}))

const Header = props => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedSubIndex, setSelectedSubIndex] = useState(0)

  const classes = useStyles()
  const pages = useAllPagesContext()
  const currentPageIndex = usePageContext()
  const updatePageContext = useUpdatePageContext()

  const handleTabChange = (e, value) => {
    updatePageContext(value)
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
  const handleSubMenuClick = (event, index) => {
    setAnchorEl(null)
    setMenuOpen(false)
    setSelectedSubIndex(index)
  }
  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar>
            <Button
              onClick={() => handleTabChange('_', 0)}
              className={classes.logoButton}
              component={Link}
              to='/'
              disableRipple
            >
              <img src={logo} alt='funteam logo' className={classes.logo} />
            </Button>

            <div className={classes.headerText}>
              <div>
                <Typography variant='h5'>VRFunTeam</Typography>
              </div>
              <div>
                <Typography variant='subtitle1'>Better Than Reality</Typography>
              </div>
            </div>

            <Tabs
              value={currentPageIndex}
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
              return hasChildren ? (
                <Popper
                  open={menuOpen}
                  anchorEl={anchorEl}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === 'bottom'
                            ? 'center top'
                            : 'center bottom',
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
                                  handleSubMenuClick(event, childIndex)
                                }}
                                component={Link}
                                to={childPage.path}
                                classes={{ root: classes.menuItem }}
                                selected={
                                  childIndex === selectedSubIndex &&
                                  index === currentPageIndex
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
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
            >
              Price Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div name='toolbar-spacing' className={classes.toolbarMargin}></div>
    </>
  )
}

export default Header
