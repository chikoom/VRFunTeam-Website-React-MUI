import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button } from '@material-ui/core'
import handsImage from '../../assets/hands.jpg'
import logoTrans from '../../assets/funteam-logo-transparent.svg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
  heroContainer: {
    backgroundImage: `url(${handsImage})`,
    minHeight: '80vh',
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

const HomePage = props => {
  const classes = useStyles()
  return (
    <Grid container direction='column'>
      <Grid item>
        <Grid container className={classes.heroContainer}>
          <Grid container className={classes.heroBackdrop}>
            <Grid item xs></Grid>
            <Grid container xs={10} md={6} alignItems='center'>
              <Grid
                container
                direction='column'
                justify='center'
                alignContent='center'
                alignItems='center'
              >
                <Grid item>
                  <img
                    src={logoTrans}
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
                    Team Experience
                    <br />
                    in Virtual Reality
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant='h6'
                    align='justify'
                    className={classes.heroText}
                  >
                    Virtual Reality events are stirring the world - the
                    experience is emmersive and mind blowing, with no cables or
                    clumsy equipment. Take your team, family or friends to an
                    unforgettable jurney of consolidation, creative thinking and
                    pure fun.
                  </Typography>
                </Grid>
                <Grid container justify='center'>
                  <Grid container spacing={2} justify='center'>
                    <Button
                      variant='contained'
                      color='secondary'
                      className={classes.heroButton}
                    >
                      Price Estimate
                    </Button>
                    <Button
                      variant='outlined'
                      color='secondary'
                      endIcon={<ExpandMoreIcon />}
                      className={`${classes.heroButton} ${classes.heroButtonEmpty}`}
                    >
                      Learn More
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs></Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container>
          <Grid container direction='column'>
            <Grid item></Grid>
          </Grid>
          <Grid container direction='column'>
            <Grid item></Grid>
          </Grid>
          <Grid container direction='column'>
            <Grid item></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomePage
