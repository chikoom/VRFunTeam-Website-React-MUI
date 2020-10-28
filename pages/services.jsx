import React, { useEffect } from 'react'
import Head from 'next/Head'

import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { usePagesContext } from '../src/contexts/PagesContext'
import Link from '../src/Link'
import PageHeader from '../src/ui/PageHeader'
import { useLanguageContext } from '../src/contexts/LangContext'

const useStyles = makeStyles(theme => ({
  img: {
    width: '100%',
  },
}))

const Services = props => {
  const classes = useStyles()
  const { setPageIndecies } = usePagesContext()

  useEffect(() => {
    setPageIndecies('/services')
  }, [])
  const { siteData } = useLanguageContext()
  return (
    <PageHeader header={siteData.pages.services}>
      <Head>
        <title key='title'>
          VR events for families, companies and conferences | VRFunTeam
        </title>
        <meta
          name='description'
          key='description'
          content='We do exiting VR experiences for Private and Family Events, Companies an Team Events and Special Exhibitions and Conferences custom expreriences.'
        />
        <meta
          key='ogtitle'
          property='og:title'
          content='Better than reality VR experiences | Services'
        />
        <meta
          key='ogurl'
          property='og:url'
          content='https://funteamvr.com/services'
        />
        <link
          rel='canonical'
          key='canonical'
          href='https://funteamvr.com/services'
        />
      </Head>
      <Grid container direction='column'>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item xs={12} md={3}>
            <img
              src='/assets/icon-teamwork.svg'
              alt='Family & Friends'
              className={classes.img}
            />
          </Grid>
          <Grid item xs={12} md={4} style={{ marginLeft: '4em' }}>
            <Typography variant='h4'>{siteData.services.private.title}</Typography>
            <Divider />
            <Typography variant='body1'>
            {siteData.services.private.text}
            </Typography>
            <Button
              variant='text'
              color='primary'
              component={Link}
              href={'/services/private'}
              style={{ padding: 0 }}
            >
              {siteData.learnMore}
            </Button>
          </Grid>
        </Grid>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item xs={12} md={3}>
            <img
              src='/assets/icon-creative.svg'
              alt='Company & Teams'
              className={classes.img}
            />
          </Grid>
          <Grid item xs={12} md={4} style={{ marginLeft: '4em' }}>
            <Typography variant='h4'>{siteData.services.company.title}</Typography>
            <Divider />
            <Typography variant='body1'>
            {siteData.services.company.text}
            </Typography>
            <Button
              variant='text'
              color='primary'
              component={Link}
              href={'/services/company'}
              style={{ padding: 0 }}
            >
              {siteData.learnMore}
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='center'
          style={{ marginBottom: '3em' }}
        >
          <Grid item xs={12} md={3}>
            <img
              src='/assets/icon-fun.svg'
              alt='Exhibitions & Conferences'
              className={classes.img}
            />
          </Grid>
          <Grid item xs={12} md={4} style={{ marginLeft: '4em' }}>
            <Typography variant='h4'>{siteData.services.events.title}</Typography>
            <Divider />
            <Typography variant='body1'>
            {siteData.services.events.text}
            </Typography>
            <Button
              variant='text'
              color='primary'
              component={Link}
              href={'/services/events'}
              style={{ padding: 0 }}
            >
              {siteData.learnMore}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </PageHeader>
  )
}

export default Services
