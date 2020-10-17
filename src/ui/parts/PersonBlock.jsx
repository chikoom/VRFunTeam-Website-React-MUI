import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Grid, Typography, useTheme } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  img: {
    width: '100px',
    height: '100px',
  },
}))

const PersonBlock = props => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Grid container direction='column' style={{ padding: '2em' }}>
      <Grid item align='center'>
        <Avatar alt={props.name} src={props.image} className={classes.img} />
      </Grid>
      <Grid item>
        <Typography variant='h6' align='center'>
          {props.name}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='h6' align='center'>
          {props.title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1' align='center'>
          {props.text}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default PersonBlock
