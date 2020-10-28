import React from 'react'
import ContactButton from '../ContactButton'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Link from '../../Link'
import { makeStyles } from '@material-ui/core/styles'
import { usePagesContext } from '../../contexts/PagesContext'
import Copyright from './Copyright'
import { useLanguageContext } from '../../contexts/LangContext'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
    zIndex: theme.zIndex.modal - 1,
    position: 'relative',
    color: '#fafafa',
  },
  gridColumn: {
    margin: '3em',
  },
  gridLink: {
    fontFamily: theme.typography.fontFamily,
    textDecoration: 'none',
    color: '#fafafa',
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
  const { siteData, language } = useLanguageContext()

  return (
    <footer className={classes.footer}>
      <Grid container justify='center'>
        
          <Grid item className={classes.gridColumn}>
            <Grid container direction='column' spacing={2}>
              <GridLink path={'/'} text={siteData.pages.home} />
              <GridLink path={'/about'} text={siteData.pages.about} />
            <GridLink path={'/contact'} text={siteData.pages.contact} />
            </Grid>
          </Grid>
        
        
          <Grid item className={classes.gridColumn}>
            <Grid container direction='column' spacing={2}>
              <GridLink path={'/services/private'} text={siteData.pages.private} />
              <GridLink path={'/services/company'} text={siteData.pages.company} />
              <GridLink
                path={'/services/events'}
                text={siteData.pages.events}
              />
            </Grid>
          </Grid>
        
        <Hidden mdDown>
          <Grid item className={classes.gridColumn}>
            <Grid container direction='column' spacing={2}>
              <GridLink path={'/revolution'} text={siteData.pages.revolution} />
              <GridLink path={'/revolution'} text={siteData.pages.blog} />
            </Grid>
          </Grid>
        </Hidden>

        <Grid item className={classes.gridColumn}>
            <Grid container direction='column' spacing={2}>
              <Typography variant='h6'>VRFunTeam</Typography>
              <GridLink path={'tel:972528228640'} text={'052-8228640'} />
              <GridLink path={'mailto:studio@vrfunteam.com'} text={'studio@vrfunteam.com'} />
            </Grid>
          </Grid>

      </Grid>
      <Copyright />
      <ContactButton />
    </footer>
  )
}

export default Footer
