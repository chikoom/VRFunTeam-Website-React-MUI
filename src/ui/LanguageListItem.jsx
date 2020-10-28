import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, useMediaQuery, useTheme } from '@material-ui/core'
import LanguageButton from './LanguageButton'
import TranslateIcon from '@material-ui/icons/Translate';

const useStyles = makeStyles(theme => ({
  langListItem: {
    fontSize: '1em',
  },
}))


const LanguageListItem = props => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <ListItem style={{direction: theme.direction}}>
      <ListItemIcon>
        <TranslateIcon />
      </ListItemIcon>
      <ListItemText
        className={classes.langListItem}
        id='switch-list-label-dark'
        disableTypography
      >
        Language
      </ListItemText>
      <ListItemSecondaryAction>
      <LanguageButton />
  
      </ListItemSecondaryAction>
    </ListItem>
    )
    
}

export default LanguageListItem