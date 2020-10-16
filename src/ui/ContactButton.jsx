import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Backdrop from '@material-ui/core/Backdrop'
import Snackbar from '@material-ui/core/Snackbar'
import Grid from '@material-ui/core/Grid'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import ShareIcon from '@material-ui/icons/Share'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import CallIcon from '@material-ui/icons/Call'
import LinkIcon from '@material-ui/icons/Link'

import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  root: {
    height: 380,
    transform: 'translateZ(0px)',
    flexGrow: 1,
    position: 'absolute',
    bottom: '0',
    right: '0',
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  socialGrid: {
    position: 'absolute',
    bottom: '1em',
    right: '1em',
    width: 'auto',
  },
  socialIcon: {
    width: '40px',
    height: '40px',
    color: '#fafafa',
  },
}))

export default function ContactButton() {
  // const pageUrl = document.querySelector('link[rel=canonical]')
  //   ? document.querySelector('link[rel=canonical]').href
  //   : document.location.href
  const pageUrl = 'https://www.funteamvr.com'
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [snakOpen, setSnakOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          text: 'Hello World',
          url: window.location.href,
        })
        .then(() => console.log('Successful share'))
        .catch(error => console.log('Error sharing:', error))
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(pageUrl).then(() => {
      document.execCommand('copy')
      setSnakOpen(true)
    })
  }

  return (
    <>
      {matches ? (
        <div className={classes.root}>
          <Backdrop open={open} />
          <SpeedDial
            ariaLabel='SpeedDial tooltip example'
            className={classes.speedDial}
            hidden={hidden}
            icon={<SpeedDialIcon />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
          >
            {navigator.clipboard ? (
              <SpeedDialAction
                key='Copy-Link'
                icon={<LinkIcon />}
                tooltipTitle='CopyLink'
                tooltipOpen
                onClick={handleCopy}
              />
            ) : null}

            {navigator.share ? (
              <SpeedDialAction
                key='Share'
                icon={<ShareIcon />}
                tooltipTitle='Share'
                tooltipOpen
                onClick={handleShare}
              />
            ) : null}

            <SpeedDialAction
              key='Call'
              icon={<CallIcon />}
              tooltipTitle='Call'
              tooltipOpen
              onClick={handleClose}
              FabProps={{
                component: 'a',
                href: 'tel:0528228640',
              }}
            />

            <SpeedDialAction
              key='WhatsApp'
              icon={<WhatsAppIcon />}
              tooltipTitle='WhatsApp'
              tooltipOpen
              onClick={handleClose}
              FabProps={{
                component: 'a',
                href: 'https://wa.me/972528228640',
              }}
            />
          </SpeedDial>

          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            open={snakOpen}
            autoHideDuration={2000}
            onClose={() => setSnakOpen(false)}
            message={`Copied: ${pageUrl}`}
          />
        </div>
      ) : (
        <Grid container className={classes.socialGrid}>
          <Grid item>
            <IconButton
              aria-label='facebook'
              component={'a'}
              href={'https://facebook.com'}
              target={'_blank'}
            >
              <FacebookIcon className={classes.socialIcon} />
            </IconButton>
            <IconButton
              aria-label='instagram'
              component={'a'}
              href={'https://instagram.com'}
              target={'_blank'}
            >
              <InstagramIcon className={classes.socialIcon} />
            </IconButton>
            <IconButton
              aria-label='whatsapp'
              component={'a'}
              href={'https://wa.me/972528228640'}
              target={'_blank'}
            >
              <WhatsAppIcon className={classes.socialIcon} />
            </IconButton>
          </Grid>
        </Grid>
      )}
    </>
  )
}
