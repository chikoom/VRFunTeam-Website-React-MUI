import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import PropTypes from 'prop-types'

function ElevationScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
}

const Header = props => {
  return (
    <ElevationScroll>
      <AppBar position='fixed'>
        <Toolbar>DigiDigi Dev</Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Header
