import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useLanguageContext } from '../../../src/contexts/LangContext'



const useStyles = makeStyles(theme => ({}))

const QnA = props => {
  const classes = useStyles()
  const theme = useTheme()

  const [expanded, setExpanded] = useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  const { siteData, language } = useLanguageContext()
  return (
    <>
      {siteData.faq.data.map((question, index) => 
      <Accordion
        expanded={expanded === `panel${index}`}
        onChange={handleChange(`panel${index}`)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index}a-content`}
          id={`panel${index}a-header`}
        >
          <Typography variant='h6'>
            {question.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body1' dangerouslySetInnerHTML={createMarkup(question['text'])}>
           
          </Typography>
        </AccordionDetails>
      </Accordion>
      )}
      
    </>
  )
}

export default QnA

function createMarkup(content) {
  return {
     __html: content    };
}; 

