import React, { useEffect } from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import { usePagesContext } from '../../contexts/PagesContext'
import vrteam from '../../assets/vrteam.png'
import dana from '../../assets/dana.jpg'
import david from '../../assets/david.jpg'
import idan from '../../assets/idan.jpg'
import lihoo from '../../assets/lihoo.jpg'
import michael from '../../assets/michael.jpg'
import ossy from '../../assets/ossy.jpg'
import ron from '../../assets/ron.jpg'
import tammy from '../../assets/tammy.jpg'
import PersonBlock from '../ui/parts/PersonBlock'

const managers = [
  {
    image: idan,
    name: 'Idan Baron',
    title: 'Founder & CTO',
    text: 'Lorem ipsum bla bla',
  },
  {
    image: lihoo,
    name: 'Lihoo Zaid',
    title: 'Founder & CEO',
    text: 'Lorem ipsum bla bla',
  },
]

const instructors = [
  {
    image: dana,
    name: 'Dana Ganesh',
    title: 'Instructor',
    text: 'Lorem ipsum bla bla',
  },
  {
    image: david,
    name: 'David Forman',
    title: 'Instructor',
    text: 'Lorem ipsum bla bla',
  },
  {
    image: michael,
    name: 'Michael Strauss',
    title: 'Instructor',
    text: 'Lorem ipsum bla bla',
  },
  {
    image: ossy,
    name: 'Ossy Biton',
    title: 'Instructor',
    text: 'Lorem ipsum bla bla',
  },
  {
    image: ron,
    name: 'Ron Bauman',
    title: 'Instructor',
    text: 'Lorem ipsum bla bla',
  },
  {
    image: tammy,
    name: 'Tammy Fine',
    title: 'Instructor',
    text: 'Lorem ipsum bla bla',
  },
]

const useStyles = makeStyles(theme => ({}))

const About = props => {
  const classes = useStyles()
  const { setPageIndecies } = usePagesContext()

  useEffect(() => {
    setPageIndecies()
  }, [])
  return (
    <Grid container direction='column'>
      <Grid item style={{ marginBottom: '3em' }}>
        <Typography variant='h4' align='center' gutterBottom>
          We Are VRFunTeam
        </Typography>
      </Grid>
      <Grid item container direction='row' justify='center'>
        <Grid item xs={12} md={5}>
          <img src={vrteam} alt='vrfunteam' style={{ width: '90%' }} />
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
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
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
  )
}

export default About
