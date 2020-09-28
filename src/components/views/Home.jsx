import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  Icon,
  ListItemText,
  useMediaQuery,
  useTheme,
  Divider,
  Card,
} from '@material-ui/core'
import handsImage from '../../assets/hands.jpg'
import logoTrans from '../../assets/funteam-logo-transparent.svg'
import logoBlue from '../../assets/funteam-logo.svg'
import creativeIcon from '../../assets/icon-creative.svg'
import funIcon from '../../assets/icon-fun.svg'
import teamIcon from '../../assets/icon-teamwork.svg'
import oculusGlasses from '../../assets/glasses_oculus.png'
import funteamCouple from '../../assets/vrfunteam-couple.jpg'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import InfoImageBlock from '../ui/parts/InfoImageBlock'
import Cardblock from '../ui/parts/CardBlock'
import { usePagesContext } from '../../contexts/PagesContext'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  heroContainer: {
    backgroundImage: `url(${handsImage})`,
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
  contentBlock: {
    paddingLeft: '0',
    paddingRight: '0',
    paddingBottom: '5em',
  },
  image: {
    width: '100%',
  },
  coupleLogo: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: '2em',
    paddingTop: '5em',
    display: 'block',
    width: '16em',
    height: '16em',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.1em',
    },
  },
  coupleItem: {
    backgroundImage: `url(${funteamCouple})`,
    textAlign: 'justify center',
    backgroundPosition: '100% 100%',
    backgroundSize: 'cover',
    minHeight: '800px',
    [theme.breakpoints.down('md')]: {
      backgroundPosition: '20% 100%',
      paddingBottom: '35em',
    },
    [theme.breakpoints.down('xs')]: {
      backgroundPosition: '31% 100%',
      paddingBottom: '35em',
    },
  },
}))

const HomePage = props => {
  const classes = useStyles()
  const { setPageIndecies } = usePagesContext()

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  useEffect(() => {
    setPageIndecies()
  }, [])

  return (
    <Grid container direction='column'>
      <Grid item className={classes.contentBlock}>
        <Grid container className={classes.heroContainer}>
          <Grid
            container
            className={classes.heroBackdrop}
            alignContent='center'
          >
            <Grid item xs></Grid>
            <Grid item xs={10} md={6}>
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
      <Grid item className={classes.contentBlock}>
        <Grid
          container
          direction='row'
          alignItems='center'
          justify='center'
          spacing={10}
          style={{ width: '100%', margin: 'auto', height: 'auto' }}
        >
          <Grid item xs={12} md={4}>
            <InfoImageBlock
              image={teamIcon}
              header={'Family & Friends'}
              text={
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
              }
              path='/services/private'
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoImageBlock
              image={creativeIcon}
              header={'Company Events'}
              text={
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
              }
              path='/services/company'
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoImageBlock
              image={funIcon}
              header={`Exhibitions`}
              text={
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
              }
              path='/services/events'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.contentBlock}>
        <Grid
          container
          direction={'row-reverse'}
          alignItems='center'
          justify='center'
          spacing={10}
          style={{ width: '100%', margin: 'auto', height: 'auto' }}
        >
          <Grid item xs={12} md={4}>
            <img
              src={oculusGlasses}
              alt='funteam logo'
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} md={4} style={{ padding: '0' }}>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <Icon
                    className='fa fa-cube'
                    color='primary'
                    style={{ fontSize: '2em' }}
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={
                    matches ? { variant: 'body1' } : { variant: 'h6' }
                  }
                  primary='The most advanced VR Headset. No cables or clumsy equipment. Fast and easy adaptation.'
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Icon
                    className='fa fa-cube'
                    color='primary'
                    style={{ fontSize: '2em' }}
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={
                    matches ? { variant: 'body1' } : { variant: 'h6' }
                  }
                  primary='Suitable for groups of 2-12 participants, in all ages (6-80).'
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Icon
                    className='fa fa-cube'
                    color='primary'
                    style={{ fontSize: '2em' }}
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={
                    matches ? { variant: 'body1' } : { variant: 'h6' }
                  }
                  primary='Professional guidence by our emphatic instructors.'
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Icon
                    className='fa fa-cube'
                    color='primary'
                    style={{ fontSize: '2em' }}
                  />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={
                    matches ? { variant: 'body1' } : { variant: 'h6' }
                  }
                  primary='Our place or yours? We will be happy to advice you. Just contact us.'
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.contentBlock}>
        <Grid
          container
          direction={'row-reverse'}
          alignItems='center'
          justify='center'
          className={classes.coupleItem}
        >
          <Grid
            item
            xs={8}
            md={4}
            style={{
              marginLeft: 'auto',
              marginRight: matches ? 'auto' : '10%',
            }}
          >
            <Grid container direction='column'>
              <Grid item>
                <img
                  src={logoBlue}
                  alt='funteam logo'
                  className={classes.coupleLogo}
                />
              </Grid>
              <Grid item>
                <Typography variant='h4'>
                  WE ARE <strong>VR FUN TEAM</strong>
                </Typography>
                <Divider />
              </Grid>
              <Grid item>
                <Typography variant='body1' align='justify'>
                  A team of tech geeks and training instructors, who loves to
                  escort groups in conseptual trips into the Virtual Reality
                  world. Our mentors will guide you hand by hand into the new
                  world, and will know to take a step back when you'll be flying
                  on your own.
                </Typography>
                <Divider />
              </Grid>
              <Grid item>
                <Grid container justify='space-between'>
                  <Grid item>
                    <Button
                      variant='contained'
                      color='primary'
                      component={Link}
                      to={'/about'}
                      style={{
                        marginTop: '1em',
                      }}
                    >
                      About Us
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant='contained'
                      color='inherit'
                      component={Link}
                      to={'/contact'}
                      style={{
                        marginTop: '1em',
                        backgroundColor: 'white',
                      }}
                    >
                      Contact Us
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.contentBlock}>
        <Cardblock />
      </Grid>
    </Grid>
  )
}

export default HomePage
