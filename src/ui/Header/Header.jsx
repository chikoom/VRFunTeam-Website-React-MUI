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
          <Toolbar style={{ paddingLeft: '2%', paddingRight: '2%' }}>
            <Button
              onClick={() => handleTabChange('_', 0)}
              className={classes.logoButton}
              component={Link}
              href='/'
              disableRipple
            >
              <svg
                className={classes.logo}
                id='Layer_1'
                data-name='Layer 1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 562 485'
              >
                <defs>
                  <style>{`.cls-3{fill:none;stroke:#7bade2;stroke-miterlimit:10;stroke-width:2px}.cls-4{fill:#0058a8}`}</style>
                </defs>
                <path fill='#e6e6e6' d='M281 3L3 481h278V3z' />
                <path fill='#f0f0f0' d='M281 3l278 478H281V3z' />
                <path
                  className='cls-3'
                  d='M281 3l276 479H4L281 3zM281 3v166M4 482l167-70M558 482l-160-67'
                />
                <path
                  className='cls-4'
                  d='M249 219l15-51h18l-19 66h-28l-19-66h18zM285 234v-66h35q12 0 17 4t5 16q0 11-3 15t-11 6q13 1 13 12v13h-17v-10q0-8-8-8h-13v18zm18-33h13q5 0 6-2t2-8a15 15 0 00-1-6l-6-2h-14zM186 326v-66h47v15h-29v13h27v14h-27v24zM241 260h18v43q0 6 2 7c1 1 4 2 9 2q7 0 8-2c2-1 2-3 2-6v-44h18v44q0 13-6 18t-21 5q-17 0-23-4t-7-18zM309 260h30l19 50v-50h18v66h-30l-19-49v49h-18zM140 353h52v15h-17v51h-18v-51h-17zM198 419v-66h48v14h-30v12h28v12h-28v13h31v15zM252 419l20-66h27l20 66h-18l-3-12h-24l-3 12zm26-25h16l-8-28zM324 353h28l13 41 12-42h29v66h-18v-46l-15 47h-16l-15-47v47h-18z'
                />
              </svg>
              {/* <img
                src='/assets/funteam-logo-bright.svg'
                alt='funteam logo'
                className={classes.logo}
              /> */}
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
