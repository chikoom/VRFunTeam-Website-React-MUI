import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useMediaQuery, useTheme } from '@material-ui/core'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({}))

const QnA = props => {
  const classes = useStyles()
  const theme = useTheme()

  const [expanded, setExpanded] = useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography variant='h6'>
            Where does all this FUN happenes?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body1'>
            We will be glad to arrive at your place for consulation and location
            impression. Together we'll decide if the activity will be at your
            place or at one of our designated studios across town.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography variant='h6'>
            What is the price for all this FUN?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body1'>
            Our prices changed according to the group size, type of event and
            the location. You're welcome to contact us for a quote, or{' '}
            <a href='/estimate'>estimate the price using our calculator</a>.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography variant='h6'>
            What if not all of our group is into VR?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body1'>
            All is good, not everyone must transform into another world. We can
            offer activities combining human interaction, use of computer/tv
            screens or trough a mobile app.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography variant='h6'>
            What kind of technology are you using?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body1'>
            We arrive at your place with Oculus Quest goggels, by Facebook. One
            of the most advanced VR hadset in the market, which allows 4K
            experience without the need of cables or heavy equipment.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default QnA
