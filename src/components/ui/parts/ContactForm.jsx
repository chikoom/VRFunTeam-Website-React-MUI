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
  const [nameErr, setNameErr] = useState(null)
  const [email, setEmail] = useState('')
  const [emailErr, setEmailErr] = useState(null)
  const [phone, setPhone] = useState('')
  const [phoneErr, setPhoneErr] = useState(null)
  const [message, setMessage] = useState('')
  const [messageErr, setMessageErr] = useState(false)

  const fieldMapping = {
    name: {
      set: setName,
      validate: /^[a-zA-Z א-ת\-]+$/,
      err: 'Invalid Name',
      setErr: setNameErr,
      isErr: nameErr,
    },

    email: {
      set: setEmail,
      validate: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      err: 'Invalid Email',
      setErr: setEmailErr,
      isErr: emailErr,
    },
    phone: {
      set: setPhone,
      validate: /^(\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4}))+$/,
      err: 'Invalid Phone',
      setErr: setPhoneErr,
      isErr: phoneErr,
    },
    message: {
      set: setMessage,
      validate: /^[0-9@a-zA-Z א-ת\-]*$/,
      err: 'Invalid Message',
      setErr: setMessageErr,
      isErr: messageErr,
    },
  }

  const handleInput = event => {
    fieldMapping[event.target.id].set(event.target.value)
    if (fieldMapping[event.target.id].isErr) {
      checkError(event.target.id, event.target.value)
    }
  }

  const handleInputBlur = event => {
    checkError(event.target.id, event.target.value)
  }

  const checkError = (targetId, value) => {
    let valid = ''
    valid = fieldMapping[targetId].validate.test(value)
    console.log(valid)
    if (!valid) fieldMapping[targetId].setErr(true)
    else fieldMapping[targetId].setErr(false)
    return valid
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
          onBlur={handleInputBlur}
          error={nameErr}
          helperText={nameErr ? fieldMapping.name.err : ''}
          required
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
          onBlur={handleInputBlur}
          error={phoneErr}
          helperText={phoneErr ? fieldMapping.phone.err : ''}
          required
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
          onBlur={handleInputBlur}
          error={emailErr}
          helperText={emailErr ? fieldMapping.email.err : ''}
          required
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
          onBlur={handleInputBlur}
          style={{ marginTop: '2em' }}
          error={messageErr}
          helperText={messageErr ? fieldMapping.message.err : ''}
        />
      </Grid>
      <Grid item style={{ marginTop: '1em' }}>
        <Button
          variant='contained'
          color='primary'
          disabled={nameErr || emailErr || phoneErr || messageErr}
        >
          Send Message <SendIcon style={{ marginLeft: '0.5em' }} />
        </Button>
      </Grid>
    </Grid>
  )
}

export default ContactForm
