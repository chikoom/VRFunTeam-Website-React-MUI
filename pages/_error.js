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
    <>
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
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .css-3d-text {
              margin-bottom:20px;
              text-align:center;
              font-size: 150px;
              color: #548dff;
              text-shadow: 0px 0px 0 rgb(73,130,244),0px 1px 0 rgb(61,118,232),0px 2px 0 rgb(50,107,221),0px 3px 0 rgb(38,95,209),0px 4px 0 rgb(27,84,198),0px 5px 0 rgb(16,73,187),0px 6px 0 rgb(4,61,175),0px 7px 0 rgb(-7,50,164),0px 8px 0 rgb(-18,39,153),0px 9px 0 rgb(-30,27,141),0px 10px 0 rgb(-41,16,130),0px 11px 0 rgb(-53,4,118),0px 12px 0 rgb(-64,-7,107),0px 13px  0 rgb(-75,-18,96),0px 14px 13px rgba(32,43,99,0.66),0px 14px 1px rgba(32,43,99,0.5),0px 0px 13px rgba(32,43,99,.2);
           }
             
                <style> 
                  `,
          }}
        ></style>
      </Head>
      <Grid
        container
        justify='center'
        alignContent='center'
        style={{ minHeight: '90vh' }}
        direction='column'
      >
        <Grid item>
          <Typography variant='h2' align='center'>
            OH NO!
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h1' className='css-3d-text'>
            404
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h5' align='center'>
            There is nothing here...
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default About
