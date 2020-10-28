import React, { useEffect } from 'react'
import Head from 'next/Head'

import {
  Divider,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import ContactForm from '../src/ui/parts/ContactForm'
import { usePagesContext } from '../src/contexts/PagesContext'
import QnA from '../src/ui/parts/QnA'
import PageHeader from '../src/ui/PageHeader'
import { useLanguageContext } from '../src/contexts/LangContext'

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
}))

const Contact = props => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const { setPageIndecies } = usePagesContext()

  useEffect(() => {
    setPageIndecies('/contact')
  }, [])
  const { siteData, language } = useLanguageContext()
  return (
    <PageHeader header={siteData.pages.contact}>
      <Head>
        <title key='title'>
          Contact us and order your VR event | VRFunTeam
        </title>
        <meta
          name='description'
          key='description'
          content='Contact VRFunTeam for all the details about your custom VR event. Price estimate, consultation or any question about VR experiences.'
        />
        <meta
          key='ogtitle'
          property='og:title'
          content='Better than reality VR experiences | Contact Us'
        />
        <meta
          key='ogurl'
          property='og:url'
          content='https://funteamvr.com/contact'
        />
        <link
          rel='canonical'
          key='canonical'
          href='https://funteamvr.com/contact'
        />
      </Head>
      <Grid container direction='row' justify='center'>
        <Grid
          item
          container
          xs={12}
          md={6}
          direction='column'
          justify='center'
          alignContent='center'
          style={{ marginBottom: '5em' }}
        >
          <Grid item style={{ width: '80%', maxWidth: '400px' }}>
            <Typography variant='subtitle1'>
              {siteData.contactForm.heading}
            </Typography>
          </Grid>
          <Divider />
          <Grid item>
            <Grid container direction='row'>
              <Grid item>
                <PhoneOutlinedIcon style={{ marginRight: '0.5em' }} />
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <a className={classes.link} href='tel:+972528228640'>
                    972-528-228-640
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction='row'>
              <Grid item>
                <MailOutlineIcon style={{ marginRight: '0.5em' }} />
              </Grid>
              <Grid item>
                <Typography variant='body1'>
                  <a
                    className={classes.link}
                    href='mailto:studio@vrfunteam.com'
                  >
                    studio@vrfunteam.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Grid item>
            <ContactForm />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={6}
          direction='column'
          alignContent={matchesMD ? 'center' : 'flex-start'}
          style={{ marginBottom: '5em' }}
        >
          <Grid item style={{ width: '90%', maxWidth: '500px' }}>
            <Grid item>
              <Typography variant='h4'>{siteData.faq.title}</Typography>
            </Grid>
            <Divider />
            <QnA />
          </Grid>
        </Grid>
      </Grid>
    </PageHeader>
  )
}

export default Contact
