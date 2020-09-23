import React from 'react'
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
  const classes = useStyles()
  const pages = useAllPagesContext()
  const currentPageIndex = usePageContext()
  const updatePageContext = useUpdatePageContext()
  const handleTabChange = (e, value) => {
    updatePageContext(value)
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
              {pages.map(page => (
                <Tab
                  key={page.path}
                  label={page.name}
                  className={classes.tab}
                  component={Link}
                  to={page.path}
                />
              ))}
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
