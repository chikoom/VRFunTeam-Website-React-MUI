import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: '100%',
  },
}))

const Footer = props => {
  const classes = useStyles()
  return <footer className={classes.footer}>FOOT FOOT</footer>
}

export default Footer
