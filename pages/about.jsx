import React, { useEffect } from 'react'
import Head from 'next/Head'
import { Grid, makeStyles, Typography, useTheme } from '@material-ui/core'
import { usePagesContext } from '../src/contexts/PagesContext'
import PersonBlock from '../src/ui/parts/PersonBlock'
import PageHeader from '../src/ui/PageHeader'
import { useLanguageContext } from '../src/contexts/LangContext'

const managers = [
  {
    image: '/assets/idan.jpg',
    name: {en:'Idan Baron', he:'עידן בראון' },
    title: {en:`Founder & CTO`, he:`Founder & CTO` },
    text: {en:`Lorem ipsum bla bla`, he:`הדרושה לרמת לפיתוחה דעת והלאה` },
  },
  {
    image: '/assets/lihoo.jpg',
    name: {en:'Lihoo Zaid', he:'ליהוא זייד' },
    title: {en:`Founder & CEO`, he:`Founder & CEO` },
    text: {en:`Lorem ipsum bla bla`, he:`הדרושה לרמת לפיתוחה דעת והלאה` },
  },
]

const instructors = [
  {
    image: '/assets/dana.jpg',
    name: {en:'Dana Ganesh', he:'דנה גנאס' },
    title: {en:`Instructor`, he:`מדריכה` },
    text: {en:`Lorem ipsum bla bla`, he:`הדרושה לרמת לפיתוחה דעת והלאה` },
  },
  {
    image: '/assets/david.jpg',
    name: {en:'Dana Ganesh', he:'דנה גנאס' },
    title: {en:`Instructor`, he:`מדריכה` },
    text: {en:`Lorem ipsum bla bla`, he:`הדרושה לרמת לפיתוחה דעת והלאה` },
  },
  {
    image: '/assets/michael.jpg',
    name: {en:'Dana Ganesh', he:'דנה גנאס' },
    title: {en:`Instructor`, he:`מדריכה` },
    text: {en:`Lorem ipsum bla bla`, he:`הדרושה לרמת לפיתוחה דעת והלאה` },
  },
  {
    image: '/assets/ossy.jpg',
    name: {en:'Dana Ganesh', he:'דנה גנאס' },
    title: {en:`Instructor`, he:`מדריכה` },
    text: {en:`Lorem ipsum bla bla`, he:`הדרושה לרמת לפיתוחה דעת והלאה` },
  },
  {
    image: '/assets/ron.jpg',
    name: {en:'Dana Ganesh', he:'דנה גנאס' },
    title: {en:`Instructor`, he:`מדריכה` },
    text: {en:`Lorem ipsum bla bla`, he:`הדרושה לרמת לפיתוחה דעת והלאה` },
  },
  {
    image: '/assets/tammy.jpg',
    name: {en:'Dana Ganesh', he:'דנה גנאס' },
    title: {en:`Instructor`, he:`מדריכה` },
    text: {en:`Lorem ipsum bla bla`, he:`הדרושה לרמת לפיתוחה דעת והלאה` },
  },
]

const useStyles = makeStyles(theme => ({}))

const About = props => {
  const classes = useStyles()
  const { setPageIndecies, getPageMeta } = usePagesContext()
  const theme = useTheme()
  
  useEffect(() => {
    setPageIndecies('/about')
  }, [])
  const { siteData, language } = useLanguageContext()

  return (
    <PageHeader header={siteData.pages.about}>
      <Head>
        <title key='title'>About Us - Company & Team | VRFunTeam</title>
        <meta
          name='description'
          key='description'
          content='VRFunTeam provide imersive custom VR Experiences, led by talented instructors. Our team will ensure your trip trough the VR world will be imerssive and fun.'
        />
        <meta
          key='ogtitle'
          property='og:title'
          content='Better than reality VR experiences | About Us'
        />
        <meta
          key='ogurl'
          property='og:url'
          content='https://funteamvr.com/about'
        />
        <link
          rel='canonical'
          key='canonical'
          href='https://funteamvr.com/about'
        />
      </Head>
      <Grid container direction='column'>
        <Grid item style={{ marginBottom: '3em' }}>
          <Typography variant='h4' align='center' gutterBottom>
            {siteData.weAre.heading}
          </Typography>
        </Grid>
        <Grid item container direction='row' justify='center'>
          <Grid item xs={12} md={5}>
            <picture alt='funteam logo' className={classes.image}>
              <source
                srcSet={require('../public/assets/vrteam.png?webp')}
                type='image/webp'
                style={{ width: '90%' }}
              />
              <source
                srcSet={require('../public/assets/vrteam.png')}
                type='image/png'
                style={{ width: '90%' }}
              />
              <img
                src={require('../public/assets/vrteam.png?webp')}
                alt='funteam logo'
                style={{ width: '90%' }}
              />
            </picture>
            {/* <img
              src='/assets/vrteam.png?webp'
              alt='vrfunteam'
              style={{ width: '90%' }}
            /> */}
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant='body1' style={{ marginTop: '2em' }}>
            {siteData.weAre.text1}
            </Typography>
            <Typography variant='body1' style={{ marginTop: '2em' }}>
            {siteData.weAre.text2}
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{ marginBottom: '3em', marginTop: '5em' }}>
          <Typography variant='h4' align='center' gutterBottom>
          {siteData.theTeam.heading}
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction='row'
            justify='center'
            style={{ marginBottom: '3em' }}
          >
            {managers.map(person => (
              <Grid item key={person.name['en']}>
                <PersonBlock
                  image={person.image}
                  name={person.name[language]}
                  title={person.title[language]}
                  text={person.text[language]}
                />
              </Grid>
            ))}
          </Grid>
          <Grid
            container
            direction='row'
            justify='center'
            style={{ marginBottom: '5em' }}
          >
            {instructors.map(person => (
              <Grid item key={person.name['en']}>
                <PersonBlock
                  image={person.image}
                  name={person.name[language]}
                  title={person.title[language]}
                  text={person.text[language]}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </PageHeader>
  )
}

export default About
