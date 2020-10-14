import React, { useEffect } from 'react'
import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core'
import { usePagesContext } from '../../contexts/PagesContext'
import creativeIcon from '../../assets/icon-creative.svg'
import funIcon from '../../assets/icon-fun.svg'
import teamIcon from '../../assets/icon-teamwork.svg'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  img: {
    width: '100%',
  },
}))

const Services = props => {
  const classes = useStyles()
  const { setPageIndecies } = usePagesContext()

  useEffect(() => {
    setPageIndecies()
  }, [])
  return (
    <Grid container direction='column'>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={12} md={3}>
          <img src={teamIcon} alt='Family & Friends' className={classes.img} />
        </Grid>
        <Grid item xs={12} md={4} style={{ marginLeft: '4em' }}>
          <Typography variant='h4'>Family & Friends</Typography>
          <Divider />
          <Typography variant='body1'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </Typography>
          <Button
            variant='text'
            color='primary'
            component={Link}
            to={'/services/private'}
            style={{ padding: 0 }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={12} md={3}>
          <img
            src={creativeIcon}
            alt='Company & Teams'
            className={classes.img}
          />
        </Grid>
        <Grid item xs={12} md={4} style={{ marginLeft: '4em' }}>
          <Typography variant='h4'>Company & Teams</Typography>
          <Divider />
          <Typography variant='body1'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </Typography>
          <Button
            variant='text'
            color='primary'
            component={Link}
            to={'/services/company'}
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
            src={funIcon}
            alt='Exhibitions & Conferences'
            className={classes.img}
          />
        </Grid>
        <Grid item xs={12} md={4} style={{ marginLeft: '4em' }}>
          <Typography variant='h4'>Exhibitions & Conferences</Typography>
          <Divider />
          <Typography variant='body1'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </Typography>
          <Button
            variant='text'
            color='primary'
            component={Link}
            to={'/services/events'}
            style={{ padding: 0 }}
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Services
