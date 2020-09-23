import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
import { ElevationScroll } from './helpers/ui-helpers'
import logo from '../../assets/funteam-logo-bright.svg'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { DarkModeButton } from './DarkModeButton'

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
  const [tabValue, setTabValue] = useState(0)
  const handleTabChange = (e, value) => {
    setTabValue(value)
  }
  const classes = useStyles()
  useEffect(() => {
    if (window.location.pathname === '/' && tabValue !== 0) setTabValue(0)
    if (window.location.pathname === '/services' && tabValue !== 1)
      setTabValue(1)
    if (window.location.pathname === '/revolution' && tabValue !== 2)
      setTabValue(2)
    if (window.location.pathname === '/about' && tabValue !== 3) setTabValue(3)
    if (window.location.pathname === '/contact' && tabValue !== 4)
      setTabValue(4)
  }, [tabValue])
  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar>
            <Button
              onClick={() => setTabValue(0)}
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
              value={tabValue}
              onChange={handleTabChange}
              className={classes.tabContainer}
            >
              <Tab
                label='Home'
                className={classes.tab}
                component={Link}
                to='/'
              />
              <Tab
                label='Services'
                className={classes.tab}
                component={Link}
                to='/services'
              />
              <Tab
                label='Revolution'
                className={classes.tab}
                component={Link}
                to='/revolution'
              />
              <Tab
                label='About'
                className={classes.tab}
                component={Link}
                to='/about'
              />
              <Tab
                label='Contact'
                className={classes.tab}
                component={Link}
                to='/contact'
              />
            </Tabs>
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
