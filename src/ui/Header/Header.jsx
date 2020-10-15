import React from 'react'
import Link from '../../Link'
import DrawerMenu from './DrawerMenu'
import { ElevationScroll } from '../helpers/ui-helpers'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  useMediaQuery,
  useTheme,
  Hidden,
} from '@material-ui/core/'
import { usePagesContext } from '../../contexts/PagesContext'
import TabsMenu from './TabsMenu'

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '2.4em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '1.4em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1em',
    },
  },
  headerText: {
    marginLeft: '1em',
  },
  logo: {
    height: '7em',
    paddingTop: '1em',
    paddingBottom: '1em',
    [theme.breakpoints.down('md')]: {
      height: '6em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5em',
    },
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
  const { setCurrentPageIndecies } = usePagesContext()

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const handleTabChange = (e, value) => {
    setCurrentPageIndecies([value, null])
  }

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar>
            <Button
              onClick={() => handleTabChange('_', 0)}
              className={classes.logoButton}
              component={Link}
              href='/'
              disableRipple
            >
              <img
                src='/assets/funteam-logo-bright.svg'
                alt='funteam logo'
                className={classes.logo}
              />
            </Button>

            <div className={classes.headerText}>
              <div>
                <Typography variant='h5'>VRFunTeam</Typography>
              </div>
              <div>
                <Typography variant='subtitle1'>Better Than Reality</Typography>
              </div>
            </div>
            <Hidden mdDown>
              <TabsMenu />
            </Hidden>
            <Hidden lgUp>
              <DrawerMenu />
            </Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div name='toolbar-spacing' className={classes.toolbarMargin}></div>
    </>
  )
}

export default Header
