import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme, Grid, Typography, Button } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Link from '../../Link'
import { Link as ScrollLink } from 'react-scroll'
import { useLanguageContext } from '../../contexts/LangContext'

const useStyles = makeStyles(theme => ({
  heroContainer: {
    backgroundImage: "url('/assets/hands.jpg')",
    minHeight: '80vh',
    height: 'auto',
    backgroundPosition: '50%',
    backgroundSize: 'cover',
  },
  heroBackdrop: {
    backgroundColor: 'rgba(33, 75, 112,0.8)',
  },
  heroLogo: {
    width: '18em',
    height: '18em',
  },
  heroHeader: {
    fontWeight: 700,
    color: '#fff',
  },
  heroText: {
    color: '#fff',
    marginTop: '1em',
    marginBottom: '1.5em',
    paddingRight: '10%',
    paddingLeft: '10%',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.1em',
    },
  },
  heroButton: {
    margin: '0.5em',
  },
  heroButtonEmpty: {
    color: '#fff',
    borderColor: '#fff',
  },
}))

const HeroBlock = props => {
  const classes = useStyles()
  const theme = useTheme()
  const { siteData } = useLanguageContext()
  return (
    <Grid container className={classes.heroContainer}>
      <Grid container className={classes.heroBackdrop} alignContent='center'>
        <Grid item xs></Grid>
        <Grid item xs={10} md={6}>
          <Grid
            container
            direction='column'
            justify='center'
            alignContent='center'
            alignItems='center'
            style={{ marginBottom: '5em', marginTop: '1em' }}
          >
            <Grid item>
              <img
                src='/assets/funteam-logo-transparent.svg'
                alt='funteam logo'
                className={classes.heroLogo}
              />
            </Grid>
            <Grid item>
              <Typography
                variant='h4'
                align='center'
                className={classes.heroHeader}
                gutterBottom
              >
                {siteData.heroHeader}
                {/* Team Experience
                <br />
                in Virtual Reality */}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='h6'
                align='justify'
                className={classes.heroText}
              >
                {siteData.heroText}
              </Typography>
            </Grid>
            <Grid container justify='center'>
              <Grid container spacing={2} justify='center'>
                <Button
                  variant='contained'
                  color='secondary'
                  className={classes.heroButton}
                  component={Link}
                  href='/estimate'
                >
                  {siteData.priceEstimate}
                </Button>
                <Button
                  variant='outlined'
                  color='secondary'
                  endIcon={<ExpandMoreIcon />}
                  className={`${classes.heroButton} ${classes.heroButtonEmpty}`}
                  component={ScrollLink}
                  to='contentStart'
                  smooth={true}
                  offset={-70}
                >
                  {siteData.learnMore}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Grid>
  )
}

export default HeroBlock
