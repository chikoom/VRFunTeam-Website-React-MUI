import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {
  ListItem,
  ListItemText,
  Switch,
  ListItemSecondaryAction,
} from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined'
import { useUpdateTheme } from '../../contexts/ThemeContext'

const useStyles = makeStyles(theme => ({
  darkListItem: {
    fontSize: '1em',
  },
}))

const DarkModeListSwitch = props => {
  const classes = useStyles()
  const darkTheme = useUpdateTheme()
  return (
    <ListItem>
      <ListItemIcon>
        <Brightness4OutlinedIcon />
      </ListItemIcon>
      <ListItemText
        className={classes.darkListItem}
        id='switch-list-label-dark'
        disableTypography
      >
        {darkTheme.isDarkTheme ? 'Light' : 'Dark'}
      </ListItemText>
      <ListItemSecondaryAction>
        <Switch
          edge='end'
          onChange={darkTheme.toggleTheme}
          checked={darkTheme.isDarkTheme}
          inputProps={{ 'aria-labelledby': 'switch-list-label-dark' }}
        />
      </ListItemSecondaryAction>
    </ListItem>
  )
}
export default DarkModeListSwitch
