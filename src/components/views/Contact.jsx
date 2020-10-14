import React, { useEffect } from 'react'
import {
  Divider,
  Grid,
  Icon,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import ContactForm from '../ui/parts/ContactForm'
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import { usePagesContext } from '../../contexts/PagesContext'
import QnA from '../ui/parts/QnA'

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
}))

const Contact = props => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
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
        style={{ marginBottom: '5em' }}
      >
        <Grid item style={{ width: '80%', maxWidth: '400px' }}>
          <Typography variant='subtitle1'>
            We're eager to make you fly
          </Typography>
        </Grid>
        <Divider />
        <Grid item>
          <Grid container direction='row'>
            <Grid item>
              <PhoneOutlinedIcon style={{ marginRight: '0.5em' }} />
            </Grid>
            <Grid item>
              <Typography variant='body1'>
                <a className={classes.link} href='tel:+972528228640'>
                  972-528-228-640
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction='row'>
            <Grid item>
              <MailOutlineIcon style={{ marginRight: '0.5em' }} />
            </Grid>
            <Grid item>
              <Typography variant='body1'>
                <a className={classes.link} href='mailto:studio@vrfunteam.com'>
                  studio@vrfunteam.com
                </a>
              </Typography>
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
        alignContent={matchesMD ? 'center' : 'flex-start'}
        style={{ marginBottom: '5em' }}
      >
        <Grid item style={{ width: '90%', maxWidth: '500px' }}>
          <Grid item>
            <Typography variant='h4'>FAQ</Typography>
          </Grid>
          <Divider />
          <QnA />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Contact
