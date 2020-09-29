import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  heading: {
    marginTop: '2em',
    marginLeft: '10%',
  },
}))

const PageHeader = props => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Grid container direction='column'>
      <Grid item className={classes.heading}>
        <Typography variant='h2' style={{ color: theme.palette.primary.main }}>
          {props.header}
        </Typography>
      </Grid>
      <Divider style={{ marginBottom: '3em' }} />
      <Grid item>{props.children}</Grid>
    </Grid>
  )
}

export default PageHeader
