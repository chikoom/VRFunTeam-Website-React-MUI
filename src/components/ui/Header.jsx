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
  Menu,
  MenuItem,
} from '@material-ui/core/'
import logo from '../../assets/funteam-logo-bright.svg'
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
}))

const Header = props => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

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
                <Menu
                  id={`menu-${page.name}`}
                  key={page.path}
                  anchorEl={anchorEl}
                  open={menuOpen}
                  onClose={handleMenuClose}
                  MenuListProps={{ onMouseLeave: handleMenuClose }}
                >
                  {page.children.map(childPage => (
                    <MenuItem
                      key={childPage.path}
                      onClick={() => {
                        handleMenuClose()
                        handleTabChange('_', index)
                      }}
                      component={Link}
                      to={childPage.path}
                    >
                      {childPage.name}
                    </MenuItem>
                  ))}
                </Menu>
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
