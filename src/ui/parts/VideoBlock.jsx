import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme, Grid, Typography, Divider, Button } from '@material-ui/core'
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
  const {article}=props
  return (
    <Grid container justify='center' alignContent='center'>
      <Grid item md={6} className={classes.playerWrapper}>
        <Grid container justify='center' alignContent='center'>
          <Grid item className={classes.playerContainer}>
            <YoutubeContainer video={article.video} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4}>
        <Grid container direction='column'>
          <Grid item>
            <Typography variant='h3'>{article.title}</Typography>
            <Typography variant='body1'>
            {article.text}
            </Typography>
            <Divider />
            <Button component={Link} href='/revolution' variant='outlined'>
              {props.button}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default VideoBlock
