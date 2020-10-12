import React, { useEffect } from 'react'
import Lottie from 'react-lottie'
import {
  Avatar,
  CardMedia,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core'
import { usePagesContext } from '../../contexts/PagesContext'
import estimateAnimation from '../../animations/estimate.json'
import creativeIcon from '../../assets/icon-creative.svg'
import funIcon from '../../assets/icon-fun.svg'
import teamIcon from '../../assets/icon-teamwork.svg'

const useStyles = makeStyles(theme => ({
  animationContainer: {
    overflow: 'hidden',
    height: '80%',
  },
  animation: {
    marginTop: '-25%',
    overflow: 'hidden',
  },
}))
const animationOptions = {
  loop: true,
  autoplay: true,
  animationData: estimateAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMin meet',
    imagePreserveAspectRatio: 'xMidYMin meet',
  },
}

const questions = [
  {
    id: 1,
    title: 'What are you looking for?',
    subtitle: 'choose the type of event',
    active: true,
    options: [
      {
        id: 1,
        title: 'Priavte or Family',
        subtitle: null,
        icon: teamIcon,
        iconAlt: 'Private and Family',
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: 'Comapny Events',
        subtitle: null,
        icon: creativeIcon,
        iconAlt: 'Comapny Events',
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: 'Exhibition or Conference',
        subtitle: null,
        icon: funIcon,
        iconAlt: 'Exhibition or Conference',
        selected: false,
        cost: 0,
      },
    ],
  },
]

const Estimate = props => {
  const classes = useStyles()
  const { setPageIndecies } = usePagesContext()

  useEffect(() => {
    setPageIndecies()
  }, [])
  return (
    <Grid container>
      <Grid item container direction='column' md={6}>
        <Grid item className={classes.animationContainer}>
          <Grid item className={classes.animation}>
            <Lottie options={animationOptions} height='50%' width='70%' />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction='column' md={6}>
        {questions
          .filter(question => question.active === true)
          .map(question => (
            <React.Fragment key={question.id}>
              <Grid key={question.id} item>
                <Typography variant='h4' align='center' gutterBottom>
                  {question.title}
                </Typography>
                <Typography variant='subtitle1' align='center' gutterBottom>
                  {question.subtitle}
                </Typography>
              </Grid>
              <Divider />
              <Grid item container>
                {question.options.map(option => (
                  <Grid item container direction='column' xs>
                    <Grid item>
                      <Typography variant='h6' align='center'>
                        {option.title}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img src={option.icon} alt='blablaba' width='100%' />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}
      </Grid>
    </Grid>
  )
}

export default Estimate
