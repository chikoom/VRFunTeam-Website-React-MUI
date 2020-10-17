import React, { useEffect, useState } from 'react'
import Head from 'next/Head'
// import Lottie from 'react-lottie-player'
import clsx from 'clsx'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import Slider from '@material-ui/core/Slider'
import { usePagesContext } from '../src/contexts/PagesContext'
// import estimateAnimation from '../src/animations/estimate.json'
import ContactForm from '../src/ui/parts/ContactForm'
import PageHeader from '../src/ui/PageHeader'

const useStyles = makeStyles(theme => ({
  animationContainer: {
    overflow: 'hidden',
    height: '80%',
  },
  animation: {
    marginTop: '-25%',
    overflow: 'hidden',
  },
  imgButton: {
    cursor: 'pointer',
  },
  optionSelected: {
    backgroundColor: theme.palette.primary.light,
  },
  playerIcon: {
    width: '100px',
    height: '100px',
    marginLeft: '2em',
  },
  optionTitle: {
    fontWeight: '400',
    fontSize: '1em',
  },
  subHeading: {
    fontWeight: '400',
    marginTop: '2em',
    marginBottom: '2em',
  },
}))
// const animationOptions = {
//   loop: true,
//   autoplay: true,
//   animationData: estimateAnimation,
//   rendererSettings: {
//     preserveAspectRatio: 'xMidYMin meet',
//     imagePreserveAspectRatio: 'xMidYMin meet',
//   },
// }

const questions = [
  {
    id: 1,
    title: 'What are you looking for?',
    subtitle: null,
    active: true,
    options: [
      {
        id: 1,
        title: 'Private & Family',
        subtitle: null,
        icon: '/assets/icon-teamwork.svg',
        iconAlt: 'Private & Family',
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: 'Comapny Events',
        subtitle: null,
        icon: '/assets/icon-creative.svg',
        iconAlt: 'Comapny Events',
        selected: false,
        cost: 1.2,
      },
      {
        id: 3,
        title: `Exhibition & Conference`,
        subtitle: null,
        icon: '/assets/icon-fun.svg',
        iconAlt: `Exhibition & Conference`,
        selected: false,
        cost: 1.5,
      },
    ],
  },
]
const hoursMarks = [
  {
    value: 1,
    label: '1hrs',
  },
  {
    value: 2,
    label: '2hrs',
  },
  {
    value: 3,
    label: '3hrs',
  },
  {
    value: 4,
    label: '4hrs',
  },
  {
    value: 5,
    label: '5hrs',
  },
  {
    value: 6,
    label: '6hrs',
  },
  {
    value: 7,
    label: '7hrs',
  },
  {
    value: 8,
    label: '8hrs',
  },
  {
    value: 9,
    label: '9hrs',
  },
  {
    value: 10,
    label: '10+',
  },
]

const Estimate = props => {
  const classes = useStyles()
  const { setPageIndecies } = usePagesContext()
  const [selectedId, setSelectedId] = useState(0)
  const [playerIconImg, setPlayerIconImg] = useState(
    '/assets/player-icons-02.svg'
  )
  const [priceData, setPriceData] = useState({
    eventType: '',
    eventCost: 0,
    players: 2,
    hours: 1,
  })

  const createMsg = () => {
    return `Hello VRFunTeam! I would like more details about a ${
      priceData.eventType
    } event, with ${priceData.players} participants, for ${
      priceData.hours
    } hours. I got a price estimate of $${calculatePrice()}. Thank you!`
  }

  const calculatePrice = () => {
    const { eventCost, players, hours } = priceData
    return Math.floor(eventCost * players * 25 * hours)
  }
  const participantLabel = value => {
    const playerImg =
      value === 1
        ? '/assets/player-icons-01.svg'
        : value === 2
        ? '/assets/player-icons-02.svg'
        : value <= 5
        ? '/assets/player-icons-03.svg'
        : '/assets/player-icons-04.svg'

    // setPlayerIconImg(playerImg)
    const returnValue = value === 20 ? '21+' : value
    return returnValue
  }

  const hoursLabel = value => {
    return value === 10 ? '10+' : value
  }

  const handleOptionClick = (id, cost, title) => {
    setPriceData({
      ...priceData,
      eventType: title,
      eventCost: cost,
    })
    setSelectedId(id)
  }
  useEffect(() => {
    setPageIndecies('/estimate')
  }, [])
  return (
    <PageHeader header='Price Estimate'>
      <Head>
        <title key='title'>Price Estimate for VR events | VRFunTeam</title>
        <meta
          name='description'
          key='description'
          content='Get a free price estimate for your custom VR Event, using our estimate calculator. '
        />
        <meta
          key='ogtitle'
          property='og:title'
          content='Better than reality VR experiences | Free Estimate'
        />
        <meta
          key='ogurl'
          property='og:url'
          content='https://funteamvr.com/estimate'
        />
        <link
          rel='canonical'
          key='canonical'
          href='https://funteamvr.com/estimate'
        />
      </Head>
      <Grid container justify='center'>
        <Grid item container direction='column' md={3}>
          <Grid item className={classes.animationContainer}>
            <Grid item className={classes.animation}>
              {/* <Lottie
                loop
                rendererSettings={{
                  preserveAspectRatio: 'xMidYMin meet',
                  imagePreserveAspectRatio: 'xMidYMin meet',
                }}
                animationData={estimateAnimation}
                play
                style={{ width: '70%', height: '50%' }}
              /> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction='column' md={7}>
          {questions
            .filter(question => question.active === true)
            .map(question => (
              <React.Fragment key={question.id}>
                <Grid item container justify='center'>
                  <Typography
                    variant='h5'
                    align='center'
                    className={classes.subHeading}
                    gutterBottom
                  >
                    Choose your type of event
                  </Typography>
                </Grid>
                <Grid item container justify='center'>
                  {question.options.map(option => (
                    <Grid
                      item
                      container
                      direction='column'
                      xs
                      className={clsx(classes.imgButton, {
                        [classes.optionSelected]: selectedId === option.id,
                      })}
                      onClick={() =>
                        handleOptionClick(option.id, option.cost, option.title)
                      }
                      key={option.id}
                      style={{ maxWidth: '250px', padding: '1em' }}
                    >
                      <Grid item>
                        <Typography
                          variant='h6'
                          align='center'
                          className={classes.optionTitle}
                        >
                          {option.title}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <img
                          src={option.icon}
                          alt='blablaba'
                          width='100%'
                          height='100%'
                        />
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </React.Fragment>
            ))}
          <Grid item container justify='center'>
            <Typography
              variant='h5'
              align='center'
              className={classes.subHeading}
              gutterBottom
            >
              How many players?
            </Typography>
          </Grid>
          <Grid item container alignItems='center' justify='center'>
            <Grid item xs={6} md={6}>
              <Slider
                min={1}
                max={20}
                defaultValue={2}
                valueLabelFormat={participantLabel}
                getAriaValueText={participantLabel}
                aria-labelledby='discrete-slider-always'
                step={1}
                marks={null}
                valueLabelDisplay='on'
                style={{ width: '100%' }}
                onChange={(event, value) =>
                  setPriceData({
                    ...priceData,
                    players: parseInt(value),
                  })
                }
              />
            </Grid>
            <Grid item xs={3} md={1}>
              <img
                src={playerIconImg}
                alt='players'
                className={classes.playerIcon}
              />
            </Grid>
          </Grid>
          <Grid item container justify='center'>
            <Typography
              variant='h5'
              align='center'
              className={classes.subHeading}
              gutterBottom
            >
              How long would you play?
            </Typography>
          </Grid>
          <Grid item container justify='center' style={{ marginTop: '2em' }}>
            <Grid item xs={10} md={8}>
              <Slider
                min={1}
                max={10}
                defaultValue={1}
                valueLabelFormat={hoursLabel}
                getAriaValueText={hoursLabel}
                aria-labelledby='discrete-slider-always'
                step={1}
                marks={hoursMarks}
                valueLabelDisplay='on'
                style={{ width: '100%' }}
                onChange={(event, value) =>
                  setPriceData({
                    ...priceData,
                    hours: parseInt(value),
                  })
                }
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            justify='center'
            style={{ marginTop: '3em', marginBottom: '3em' }}
          >
            <Grid item>
              <Typography variant='h5' align='center' gutterBottom>
                Price Est:
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='h5' align='center' gutterBottom>
                {`$${calculatePrice()}`}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justify='center' style={{ marginBottom: '5em' }}>
            <Grid item xs={10} md={8}>
              <ContactForm message={createMsg()} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageHeader>
  )
}

export default Estimate
