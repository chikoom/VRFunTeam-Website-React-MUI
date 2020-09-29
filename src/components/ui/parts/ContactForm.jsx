import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Button,
  Grid,
  TextField,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles(theme => ({}))

const ContactForm = props => {
  const classes = useStyles()
  const theme = useTheme()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const fieldMapping = {
    name: setName,
    email: setEmail,
    phone: setPhone,
    message: setMessage,
  }

  const handleInput = event => {
    fieldMapping[event.target.id](event.target.value)
  }

  return (
    <Grid container direction='column' justify='center'>
      <Grid item>
        <TextField
          variant='filled'
          fullWidth
          label='Name'
          id='name'
          value={name}
          onChange={handleInput}
        />
      </Grid>
      <Grid item>
        <TextField
          variant='filled'
          fullWidth
          label='Email'
          id='email'
          value={email}
          onChange={handleInput}
        />
      </Grid>
      <Grid item>
        <TextField
          variant='filled'
          fullWidth
          label='Phone'
          id='phone'
          value={phone}
          onChange={handleInput}
        />
      </Grid>
      <Grid item>
        <TextField
          variant='filled'
          fullWidth
          placeholder='How can we help you?'
          multiline
          rows={8}
          id='message'
          value={message}
          onChange={handleInput}
          style={{ marginTop: '2em' }}
        />
      </Grid>
      <Grid item style={{ marginTop: '1em' }}>
        <Button variant='contained' color='primary'>
          Send Message <SendIcon style={{ marginLeft: '0.5em' }} />
        </Button>
      </Grid>
    </Grid>
  )
}

export default ContactForm
