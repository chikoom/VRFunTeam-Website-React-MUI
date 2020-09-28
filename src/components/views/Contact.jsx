import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { usePagesContext } from '../../contexts/PagesContext'

const useStyles = makeStyles(theme => ({}))

const Contact = props => {
  const classes = useStyles()
  const { setPageIndecies } = usePagesContext()

  useEffect(() => {
    setPageIndecies()
  }, [])
  return <div>Contact</div>
}

export default Contact
