import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Divider, Grid, Typography, useTheme } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  heading: {
    marginTop: '2em',
    marginLeft: '10%',
  },
  topHeader: {
    textDecoration: 'none',
    fontWeight: 900,
    color: theme.palette.primary.main,
  },
}))

const PageHeader = props => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Grid container direction='column'>
      <Grid item className={classes.heading}>
        {props.topHeader ? (
          <>
            <Typography
              variant='subtitle'
              component={Link}
              className={classes.topHeader}
            >
              {props.topHeader}
            </Typography>
            <span className={classes.topHeader}> // </span>
          </>
        ) : (
          ''
        )}
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
