import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { useLanguageContext } from '../contexts/LangContext'
import Link from '../Link'
import { useRouter } from 'next/router'
import { useUpdateTheme } from '../contexts/ThemeContext'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  flag:{
    width:'30px'
  }
}))

const LanguageButton = props => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const router = useRouter()
  const { language, languages, changeLanguageTo } = useLanguageContext()
  const {changeThemeLanguage} = useUpdateTheme()
  const classes = useStyles()

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleSelect = lang => {
    setAnchorEl(null)
    changeLanguageTo(lang)
    changeThemeLanguage(lang)
  }

  return (
    <div>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <img className={classes.flag} src={`./assets/flags/${language}.svg`} alt={`${language} flag`} />
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ zIndex: '9999' }}
      >
        {languages.map(savedLanguage => (
          <MenuItem
            key={savedLanguage}
            component={Link}
            href={`${router.pathname}?ln=${savedLanguage}`}
            onClick={() => handleSelect(savedLanguage)}
          >
            <img className={classes.flag} src={`./assets/flags/${savedLanguage}.svg`} alt={`${savedLanguage} flag`} />
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default LanguageButton
