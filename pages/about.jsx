import React, { useEffect } from 'react'
import Head from 'next/Head'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import { usePagesContext } from '../src/contexts/PagesContext'
import PersonBlock from '../src/ui/parts/PersonBlock'
import PageHeader from '../src/ui/PageHeader'

const managers = [
  {
    image: '/assets/idan.jpg',
    name: 'Idan Baron',
    title: 'Founder & CTO',
    text: 'Lorem ipsum bla bla',
  },
  {
    image: '/assets/lihoo.jpg',
    name: 'Lihoo Zaid',
    title: 'Founder & CEO',
    text: 'Lorem ipsum bla bla',
  },
]

const instructors = [
  {
    image: '/assets/dana.jpg',
    name: 'Dana Ganesh',
    title: 'Instructor',
    text: 'Lorem ipsum bla bla',
  },
  {
    image: '/assets/david.jpg',
    name: 'David Forman',
    title: 'Instructor',
    text: 'Lorem ipsum bla bla',
  },
  {
    image: '/assets/michael.jpg',
    name: 'Michael Strauss',
    title: 'Instructor',
    text: 'Lorem ipsum bla bla',
  },
  {
    image: '/assets/ossy.jpg',
    name: 'Ossy Biton',
    title: 'Instructor',
    text: 'Lorem ipsum bla bla',
  },
  {
    image: '/assets/ron.jpg',
    name: 'Ron Bauman',
    title: 'Instructor',
    text: 'Lorem ipsum bla bla',
  },
  {
    image: '/assets/tammy.jpg',
    name: 'Tammy Fine',
    title: 'Instructor',
    text: 'Lorem ipsum bla bla',
  },
]

const useStyles = makeStyles(theme => ({}))

const About = props => {
  const classes = useStyles()
  const { setPageIndecies, getPageMeta } = usePagesContext()

  useEffect(() => {
    setPageIndecies('/about')
  }, [])
  return (
    <PageHeader header='About Us'>
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
            We Are VRFunTeam
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
              A team of tech geeks and training instructors, who loves to escort
              groups in conseptual trips into the Virtual Reality world. Our
              mentors will guide you hand by hand into the new world, and will
              know to take a step back when you'll be flying on your own.
            </Typography>
            <Typography variant='body1' style={{ marginTop: '2em' }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </Typography>
          </Grid>
        </Grid>
        <Grid item style={{ marginBottom: '3em', marginTop: '5em' }}>
          <Typography variant='h4' align='center' gutterBottom>
            The Team
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
              <Grid item key={person.name}>
                <PersonBlock
                  image={person.image}
                  name={person.name}
                  title={person.title}
                  text={person.text}
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
              <Grid item key={person.name}>
                <PersonBlock
                  image={person.image}
                  name={person.name}
                  title={person.title}
                  text={person.text}
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
