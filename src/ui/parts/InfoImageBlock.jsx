import React from 'react'
import {
  Grid,
  makeStyles,
  Typography,
  Divider,
  Button,
  Card,
} from '@material-ui/core'
import Link from '../../Link'
import { useLanguageContext } from '../../contexts/LangContext'
const useStyles = makeStyles(theme => ({
  image: {
    width: '100%',
    display: 'block',
  },
  block: {
    padding: 0,
    boxSizing: 'content-box',
  },
  blockItem: {
    boxSizing: 'content-box',
    width: '100%',
    height: 'fit-content',
  },
  divider: {
    marginBottom: '1em',
  },
}))

const InfoImageBlock = props => {
  const classes = useStyles()
  const { siteData } = useLanguageContext()
  return (
    <Card style={{ padding: '2em' }} elevation={2}>
      <Grid container className={classes.block} direction='column'>
        <Grid item className={classes.blockItem}>
          <Typography variant='h5' align='center'>
            {props.header}
          </Typography>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item className={classes.blockItem}>
          <Typography variant='body1' align='justify'>
            {props.text}
          </Typography>
        </Grid>
        <Grid item className={classes.blockItem}>
          <img src={props.image} alt='funteam logo' className={classes.image} />
        </Grid>
        <Grid item className={classes.blockItem} align='center'>
          <Button
            variant='outlined'
            color='primary'
            className={`${classes.heroButton} ${classes.heroButtonEmpty}`}
            component={Link}
            href={props.path}
          >
            {siteData.learnMore}
          </Button>
        </Grid>
      </Grid>
    </Card>
  )
}

export default InfoImageBlock
