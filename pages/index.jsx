import React, { useEffect } from 'react'
import Link from '../src/Link'
import Head from 'next/Head'

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
} from '@material-ui/core'
import {shortenText} from '../src/ui/helpers/ui-helpers'
import { usePagesContext } from '../src/contexts/PagesContext'
import InfoImageBlock from '../src/ui/parts/InfoImageBlock'
import VideoBlock from '../src/ui/parts/VideoBlock'
import HeroBlock from '../src/ui/parts/HeroBlock'
import CardsSlider from '../src/ui/parts/CardsSlider'
import { useLanguageContext } from '../src/contexts/LangContext'

const useStyles = makeStyles(theme => ({
  contentBlock: {
    paddingLeft: '0',
    paddingRight: '0',
    paddingBottom: '5em',
    minHeight: '60vh',
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
    backgroundImage: `url('${require('../public/assets/vrfunteam-couple.jpg?webp')}')`,
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
    setPageIndecies('/')
  }, [])
  const { siteData, language } = useLanguageContext()
  return (
    <Grid container direction='column'>
      <Head>
        <title key='title'>
          VR events for teams, families and conferences | VRFunTeam
        </title>
        <meta
          key='ogtitle'
          property='og:title'
          content='Better than reality VR experiences | VRFunTeam'
        />
        <meta key='ogurl' property='og:url' content='https://funteamvr.com' />
        <link rel='canonical' key='canonical' href='https://funteamvr.com/' />
      </Head>
      <Grid item className={classes.contentBlock}>
        <HeroBlock />
      </Grid>
      <Grid item className={classes.contentBlock}>
        <Grid
          container
          direction='row'
          alignItems='center'
          justify='center'
          spacing={10}
          style={{ width: '100%', margin: 'auto', height: 'auto' }}
          id='contentStart'
        >
          <Grid item xs={12} md={4}>
            <InfoImageBlock
              image='/assets/icon-teamwork.svg'
              header={siteData.services.private.title}
              text={shortenText(siteData.services.private.text,120)}
              path='/services/private'
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoImageBlock
              image='/assets/icon-creative.svg'
              header={siteData.services.company.title}
              text={shortenText(siteData.services.company.text,120)}
              path='/services/company'
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoImageBlock
              image='/assets/icon-fun.svg'
              header={siteData.services.events.title}
              text={shortenText(siteData.services.events.text,120)}
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
            <picture alt='funteam logo' className={classes.image}>
              <source
                srcSet={require('../public/assets/glasses_oculus.png?webp')}
                type='image/webp'
              />
              <source
                srcSet={require('../public/assets/glasses_oculus.png')}
                type='image/png'
              />
              <img
                src={require('../public/assets/glasses_oculus.png?webp')}
                alt='funteam logo'
                className={classes.image}
              />
            </picture>
            {/* <img
              src='/assets/glasses_oculus.png?webp'
              alt='funteam logo'
              className={classes.image}
            /> */}
          </Grid>
          <Grid item xs={12} md={4} style={{ padding: '0' }}>
            <List>
              {siteData.megaPoints.map(point => <ListItem>
                <ListItemIcon>
                  
                  <span style={{ fontSize: '4em', marginRight:'1em' }}>🚀</span>
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={
                    matches ? { variant: 'body1' } : { variant: 'h6' }
                  }
                  primary={point}
                />
              </ListItem>)}
            </List>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        justify='center'
        alignContent='center'
        className={classes.contentBlock}
      >
        <VideoBlock article={siteData.articles[0]} button={siteData.pages.revolution} />
      </Grid>
      <Grid
        item
        container
        className={classes.contentBlock}
        alignItems='center'
        style={{
          backgroundSize: '3%',
          backgroundImage: `url('/assets/triTile.svg')`,
          minHeight: '80vh',
        }}
      >
        {/* <Cardblock /> */}
        <CardsSlider elements={siteData.qoutes}/>
      </Grid>
      <Grid
        item
        className={classes.contentBlock}
        style={{ paddingBottom: '0' }}
      >
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
                  src='/assets/funteam-logo.svg'
                  alt='funteam logo'
                  className={classes.coupleLogo}
                />
              </Grid>
              <Grid item>
                <Typography variant='h4'>
                {siteData.weAre.heading}
                </Typography>
                <Divider />
              </Grid>
              <Grid item>
                <Typography variant='body1' align='justify'>
                {siteData.weAre.text1}
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
                      href={'/about'}
                      style={{
                        marginTop: '1em',
                      }}
                    >
                      {siteData.pages.about}
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant='contained'
                      color='inherit'
                      component={Link}
                      href={'/contact'}
                      style={{
                        marginTop: '1em',
                        backgroundColor: 'white',
                      }}
                    >
                       {siteData.pages.contact}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default HomePage
