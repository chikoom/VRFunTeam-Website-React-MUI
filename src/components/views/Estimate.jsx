import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { usePagesContext } from '../../contexts/PagesContext'

const useStyles = makeStyles(theme => ({}))

const Estimate = props => {
  const classes = useStyles()
  const { setPageIndecies } = usePagesContext()

  useEffect(() => {
    setPageIndecies()
  }, [])
  return <div>Estimate</div>
}

export default Estimate
