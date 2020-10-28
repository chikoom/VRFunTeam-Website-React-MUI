import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, useTheme } from '@material-ui/core'
import { useLanguageContext } from '../../contexts/LangContext'

const useStyles = makeStyles(theme => ({
  copyfooter: {
    backgroundColor: theme.palette.primary.dark,
    width: '100%',
    position: 'relative',
    color: '#fafafa',
    paddingTop: '0.75em',
    paddingBottom: '0.75em',
  },
}))

const Copyright = props => {
  const classes = useStyles()
  const theme = useTheme()
  const { siteData } = useLanguageContext()

  return (
    <Grid
      container
      justify='center'
      alignItems='center'
      className={classes.copyfooter}
    >
      <Grid item>
        <Typography variant='caption'>{siteData.copyright} |</Typography>
      </Grid>
      <Grid
        item
        style={{
          display: 'grid',
          justifyContent: 'center',
          marginLeft: '0.5em',
        }}
      >
        <a
          href='https://www.idanbaron.com'
          target='_blank'
          style={{
            display: 'grid',
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
            width='15px'
            height='15px'
          >
            <path
              d='M49 3a47 47 0 00-14 91 2 2 0 003-1l4-19a12 12 0 01-4-5 13 13 0 01-1-6 12 12 0 011-6 12 12 0 015-4 13 13 0 016-2 13 13 0 017 2 12 12 0 014 4 13 13 0 012 6 19 19 0 01-1 7l-4 10-7 16v1h1a47 47 0 0046-45C99 24 77 2 49 3zm11 30a13 13 0 01-4 5 13 13 0 01-13 0 13 13 0 01-5-5 12 12 0 010-12 13 13 0 015-5 12 12 0 0113 0 13 13 0 014 5 12 12 0 010 12z'
              fill='#fff'
            />
          </svg>
        </a>
      </Grid>
      <Grid
        item
        style={{
          display: 'grid',
          justifyContent: 'center',
          marginLeft: '0.5em',
        }}
      >
        <a
          href='https://github.com/chikoom'
          target='_blank'
          style={{
            display: 'grid',
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
            width='15px'
            height='15px'
          >
            <path
              d='M50 5a47 47 0 00-15 92c2 0 3-1 3-3v-8c-13 3-16-6-16-6-2-5-5-7-5-7-5-3 0-3 0-3 5 1 7 5 7 5 5 7 11 5 14 4a10 10 0 013-6c-10-1-21-5-21-24a18 18 0 014-12c0-1-2-6 1-13 0 0 4-1 13 5a45 45 0 0123 0c9-6 13-5 13-5 3 7 1 12 1 13a18 18 0 015 12c0 19-11 23-22 24 2 1 3 4 3 8v13c0 2 1 3 4 3A47 47 0 0050 5z'
              fill='#fff'
              fillRule='evenodd'
            />
          </svg>
        </a>
      </Grid>
    </Grid>
  )
}

export default Copyright
