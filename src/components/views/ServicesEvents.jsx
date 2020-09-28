import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { usePagesContext } from '../../contexts/PagesContext'

const useStyles = makeStyles(theme => ({}))

const ServicesEvents = props => {
  const classes = useStyles()
  const { setPageIndecies } = usePagesContext()

  useEffect(() => {
    setPageIndecies()
  }, [])
  return <div>ServicesEvents</div>
}

export default ServicesEvents
