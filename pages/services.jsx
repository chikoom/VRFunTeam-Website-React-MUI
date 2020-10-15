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
  return (
    <PageHeader header='Our Services'>
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
            <Typography variant='h4'>Family & Friends</Typography>
            <Divider />
            <Typography variant='body1'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Typography>
            <Button
              variant='text'
              color='primary'
              component={Link}
              href={'/services/private'}
              style={{ padding: 0 }}
            >
              Learn More
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
            <Typography variant='h4'>Company & Teams</Typography>
            <Divider />
            <Typography variant='body1'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Typography>
            <Button
              variant='text'
              color='primary'
              component={Link}
              href={'/services/company'}
              style={{ padding: 0 }}
            >
              Learn More
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
            <Typography variant='h4'>Exhibitions & Conferences</Typography>
            <Divider />
            <Typography variant='body1'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Typography>
            <Button
              variant='text'
              color='primary'
              component={Link}
              href={'/services/events'}
              style={{ padding: 0 }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </PageHeader>
  )
}

export default Services
