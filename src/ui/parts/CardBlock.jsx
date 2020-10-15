import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import {
  useMediaQuery,
  useTheme,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
} from '@material-ui/core'
import Link from '../../Link'

const useStyles = makeStyles(theme => ({}))

const CardBlock = props => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Grid
      container
      direction={'row-reverse'}
      alignItems='center'
      justify='center'
    >
      <Grid item md={6} xs={8}>
        <Card>
          <CardContent>
            <Grid container direction='column'>
              <Grid item>
                <Typography variant='body1'>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </Typography>
                <Divider />
              </Grid>
              <Grid item>
                <Typography variant='subtitle2'>
                  Idan Baron | SEO Chikoom inc
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default CardBlock
