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
import Link from '../../Link'
import YoutubeContainer from './YoutubeContainer'

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
            <YoutubeContainer video='cmZ-4BsCoIA' />
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
            <Button component={Link} href='/revolution' variant='outlined'>
              The Revolution
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default VideoBlock
