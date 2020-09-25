import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import IconButton from '@material-ui/core/IconButton'
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined'
import { useUpdateTheme } from '../../contexts/ThemeContext'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

export const DarkModeButton = () => {
  const classes = useStyles()

  const darkTheme = useUpdateTheme()
  return (
    <div className={classes.root}>
      <IconButton onClick={darkTheme.toggleTheme} aria-label='delete'>
        <Brightness4OutlinedIcon />
      </IconButton>
    </div>
  )
}
