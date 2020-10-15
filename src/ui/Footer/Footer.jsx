import React from 'react'
import ContactButton from '../ContactButton'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Link from '../../Link'
import { makeStyles } from '@material-ui/core/styles'
import { usePagesContext } from '../../contexts/PagesContext'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    zIndex: theme.zIndex.modal + 100,
    position: 'relative',
    color: '#fafafa',
  },
  gridColumn: {
    margin: '3em',
  },
  gridLink: {
    fontFamily: theme.typography.fontFamily,
    textDecoration: 'none',
    '&:visited': {
      color: '#fafafa',
    },
  },
}))

const GridLink = props => {
  const classes = useStyles()
  const { path, text } = props
  const { getCurrentPageIndecies, setCurrentPageIndecies } = usePagesContext()
  const handleLinkClick = path => {
    console.log(path)
    setCurrentPageIndecies(getCurrentPageIndecies(path))
  }
  return (
    <Grid
      item
      component={Link}
      href={path}
      onClick={() => {
        handleLinkClick(path)
      }}
      className={classes.gridLink}
    >
      {text}
    </Grid>
  )
}

const Footer = props => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Grid container justify='center'>
        <Hidden mdDown>
          <Grid item className={classes.gridColumn}>
            <Grid container direction='column' spacing={2}>
              <GridLink path={'/'} text={'Home'} />
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdDown>
          <Grid item className={classes.gridColumn}>
            <Grid container direction='column' spacing={2}>
              <GridLink path={'/services'} text={'Our Services'} />
              <GridLink path={'/services/private'} text={'Personal & Family'} />
              <GridLink path={'/services/company'} text={'Companies & Teams'} />
              <GridLink
                path={'/services/events'}
                text={'Conferences & Events'}
              />
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdDown>
          <Grid item className={classes.gridColumn}>
            <Grid container direction='column' spacing={2}>
              <GridLink path={'/revolution'} text={'The Revolution'} />
              <GridLink path={'/revolution'} text={'VR Blog'} />
              <GridLink path={'/revolution'} text={'New'} />
            </Grid>
          </Grid>
        </Hidden>

        <Grid item className={classes.gridColumn}>
          <Grid container direction='column' spacing={2}>
            <GridLink path={'/about'} text={'About'} />
            <GridLink path={'/contact'} text={'Contact Us'} />
          </Grid>
        </Grid>
      </Grid>

      <ContactButton />
    </footer>
  )
}

export default Footer
