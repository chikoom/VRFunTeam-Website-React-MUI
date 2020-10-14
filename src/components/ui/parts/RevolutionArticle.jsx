import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({}))

const RevolutionArticle = props => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Grid
      container
      direction={parseInt(props.index) % 2 === 0 ? 'row' : 'row-reverse'}
      justify='space-around'
      style={{ marginBottom: '6em' }}
    >
      <Grid item xs={12} md={5}>
        <iframe
          title='Oculus Quest'
          width='560'
          height='315'
          src={`https://www.youtube.com/embed/${props.video}`}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          iv_load_policy='3'
          modestbranding='1'
          style={{ width: '100%' }}
        ></iframe>
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography variant='h4'>{props.title}</Typography>
        <Divider />
        <Typography variant='body1'>{props.text}</Typography>
      </Grid>
    </Grid>
  )
}

export default RevolutionArticle
