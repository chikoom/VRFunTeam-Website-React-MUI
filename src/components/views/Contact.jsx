import React, { useEffect } from 'react'
import {
  Divider,
  Grid,
  Icon,
  makeStyles,
  Typography,
  useTheme,
} from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import ContactForm from '../ui/parts/ContactForm'
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import { usePagesContext } from '../../contexts/PagesContext'

const useStyles = makeStyles(theme => ({}))

const Contact = props => {
  const classes = useStyles()
  const theme = useTheme()
  const { setPageIndecies } = usePagesContext()

  useEffect(() => {
    setPageIndecies()
  }, [])
  return (
    <Grid container direction='row' justify='center'>
      <Grid
        item
        container
        xs={12}
        md={6}
        direction='column'
        justify='center'
        alignContent='center'
      >
        <Grid item style={{ minWidth: '300px' }}>
          <Typography variant='subtitle1'>
            We're waiting to make you fly
          </Typography>
        </Grid>
        <Divider />
        <Grid item>
          <Grid container direction='row'>
            <Grid item>
              <PhoneOutlinedIcon style={{ marginRight: '0.5em' }} />
            </Grid>
            <Grid item>
              <Typography variant='body1'>972-528-228-640</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction='row'>
            <Grid item>
              <MailOutlineIcon style={{ marginRight: '0.5em' }} />
            </Grid>
            <Grid item>
              <Typography variant='body1'>studio@vrfunteam.com</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid item>
          <ContactForm />
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={6}
        direction='column'
        justify='center'
        alignContent='center'
      >
        <Grid item>FORM Heading</Grid>
        <Grid item>FORM text</Grid>
        <Grid item>FORM</Grid>
      </Grid>
    </Grid>
  )
}

export default Contact
