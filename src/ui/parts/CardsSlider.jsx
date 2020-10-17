import React, { useEffect, useState } from 'react'
import Switch from '@material-ui/core/Switch'
import Paper from '@material-ui/core/Paper'
import Slide from '@material-ui/core/Slide'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Card, CardContent, Divider, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({}))
var timeOutHandler

const elements = [
  {
    content: `It is a long established fact that a reader will be distracted
    by the readable content of a page when looking at its layout.`,
    subContent: `Idan Baron | SEO Chikoom inc`,
  },
  {
    content: `Mow Mow Mow.`,
    subContent: `Kundofoni | SEO FancyFeast inc`,
  },
  {
    content: `lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum `,
    subContent: `Moshiko MushMush | SEO DigiDigi inc`,
  },
]

const CardsSlider = props => {
  const classes = useStyles()
  const theme = useTheme()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideEnter, setSlideEnter] = useState(true)
  useEffect(() => {
    return () => {
      clearTimeout(timeOutHandler)
    }
  }, [])
  return (
    <Grid
      container
      direction={'row-reverse'}
      alignItems='center'
      justify='center'
      style={{ overflow: 'hidden' }}
    >
      <Grid item md={6} xs={8}>
        {elements.map((element, index) => (
          <Slide
            key={element.subContent}
            direction={slideEnter ? 'left' : 'right'}
            in={currentIndex === index && slideEnter}
            mountOnEnter
            unmountOnExit
            timeout={{
              enter: 1000,
              exit: 500,
            }}
            onEntered={() => {
              timeOutHandler = setTimeout(() => {
                setSlideEnter(false)
              }, 3500)
            }}
            onExited={() => {
              if (currentIndex === elements.length - 1) setCurrentIndex(0)
              else setCurrentIndex(currentIndex + 1)
              setSlideEnter(true)
            }}
            // style={{ position: 'absolute', width: '50%' }}
          >
            <Card>
              <CardContent>
                <Grid container direction='column'>
                  <Grid item>
                    <Typography variant='h4' style={{ fontWeight: 400 }}>
                      "{element.content}"
                    </Typography>
                    <Divider />
                  </Grid>
                  <Grid item>
                    <Typography variant='subtitle2'>
                      {element.subContent}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Slide>
        ))}
      </Grid>
    </Grid>
  )
}

export default CardsSlider
