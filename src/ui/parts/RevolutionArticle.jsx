import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import YoutubeContainer from './YoutubeContainer'

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
        <YoutubeContainer video={props.video} />
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
