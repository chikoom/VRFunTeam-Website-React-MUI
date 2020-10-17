import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import {
  Button,
  Grid,
  TextField,
  useMediaQuery,
  useTheme,
  CircularProgress,
  Snackbar,
  Slide,
} from '@material-ui/core'
import { green, red } from '@material-ui/core/colors'
import SendIcon from '@material-ui/icons/Send'
import CheckIcon from '@material-ui/icons/Check'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline'
import { event as GAevent } from '../../functions/gtag'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    verticalAlign: 'middle',
    marginLeft: '1em',
  },
  errorIcon: {
    color: red[500],
    verticalAlign: 'middle',
    marginLeft: '1em',
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  alert: {
    zIndex: '9999',
  },
}))

function TransitionLeft(props) {
  return <Slide {...props} direction='left' />
}

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
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [sendError, setSendError] = useState(false)
  const [alert, setAlert] = useState({
    open: false,
    message: '',
    color: '',
  })

  useEffect(() => {
    if (props.message) setMessage(props.message)
  }, [props.message])

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  })

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
      validate: /^[0-9@a-zA-Z א-ת\-\!]*$/,
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

  const clearForm = () => {
    setName('')
    setNameErr(null)
    setEmail('')
    setEmailErr(null)
    setPhone('')
    setPhoneErr(null)
    setMessage('')
  }

  const checkAllErrors = () => {
    let valid = true
    if (nameErr !== false) {
      setNameErr(true)
      valid = false
    }
    if (emailErr !== false) {
      setEmailErr(true)
      valid = false
    }
    if (phoneErr !== false) {
      setPhoneErr(true)
      valid = false
    }

    return valid
  }

  const handleSubmit = () => {
    console.log(checkAllErrors())
    if (checkAllErrors()) {
      if (!loading) {
        setSuccess(false)
        setLoading(true)
        setSendError(false)
      }
      axios
        .post(
          'https://us-central1-vrfunteam-mailer.cloudfunctions.net/sendLead',
          { name, email, phone, message }
        )
        .then(res => {
          setSuccess(true)
          setLoading(false)
          clearForm()
          setAlert({
            open: true,
            backgroundColor: '#4BB543',
            message: 'You message has been sent!',
          })
          GAevent({
            category: 'Leads',
            action: 'Lead Sent',
            label: 'Website Conversions',
            value: '1',
          })
        })
        .catch(err => {
          setLoading(false)
          setSendError(true)
          setAlert({
            open: true,
            backgroundColor: '#FF3232',
            message: 'There was an error sending your message',
          })
          GAevent({
            category: 'Errors',
            action: 'Lead Failed',
            label: 'Website Conversions Errors',
            value: '0',
          })
        })
    }
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
          disabled={nameErr || emailErr || phoneErr || messageErr || loading}
          onClick={handleSubmit}
          className={buttonClassname}
        >
          Send Message{' '}
          {success ? (
            <CheckIcon />
          ) : (
            <SendIcon style={{ marginLeft: '0.5em' }} />
          )}
        </Button>

        {loading && (
          <CircularProgress size={30} className={classes.fabProgress} />
        )}
        {sendError && (
          <ErrorOutlineIcon size={30} className={classes.errorIcon} />
        )}
        <Snackbar
          className={classes.alert}
          open={alert.open}
          message={alert.message}
          ContentProps={{
            style: {
              backgroundColor: alert.backgroundColor,
            },
          }}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          onClose={() => setAlert({ ...alert, open: false })}
          autoHideDuration={4000}
        />
      </Grid>
    </Grid>
  )
}

export default ContactForm
