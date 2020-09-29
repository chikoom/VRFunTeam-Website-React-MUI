import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  useMediaQuery,
  useTheme,
  Grid,
  Typography,
  Divider,
  Button,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  playerWrapper: {
    width: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '80%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  playerContainer: {
    width: '80%',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}))

const VideoBlock = props => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Grid container justify='center' alignContent='center'>
      <Grid item md={6} className={classes.playerWrapper}>
        <Grid container justify='center' alignContent='center'>
          <Grid item className={classes.playerContainer}>
            <iframe
              title='Oculus Quest'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/cmZ-4BsCoIA?'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              iv_load_policy='3'
              modestbranding='1'
              style={{ width: '100%' }}
            ></iframe>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4}>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h3'>THE VR REVOLUTION</Typography>
            <Typography variant='body1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              exercitationem eaque, architecto repudiandae dolores, quos quas
              aspernatur officiis obcaecati, vero distinctio. Sit beatae
              adipisci hic. Eveniet cumque illum aperiam id!
            </Typography>
            <Divider />
            <Button component={Link} to='/revolution' variant='outlined'>
              The Revolution
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default VideoBlock
