import React, { useEffect } from 'react'
import {
  Button,
  Divider,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
  GridList,
  GridListTile,
} from '@material-ui/core'
import { usePagesContext } from '../../contexts/PagesContext'
import { Link } from 'react-router-dom'
import events_1 from '../../assets/events_photos/events_1.jpg'
import events_2 from '../../assets/events_photos/events_2.jpg'
import events_3 from '../../assets/events_photos/events_3.png'
import events_4 from '../../assets/events_photos/events_4.jpg'
import events_5 from '../../assets/events_photos/events_5.jpg'
import events_6 from '../../assets/events_photos/events_6.jpg'
import events_7 from '../../assets/events_photos/events_7.jpg'

const tileData = [
  {
    img: events_1,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: events_2,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: events_3,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: events_4,
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: events_5,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: events_6,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: events_7,
    title: 'Image',
    author: 'author',
    cols: 1,
  },
]

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '90%',
    height: 'auto',
  },
}))

const ServicesEvents = props => {
  const classes = useStyles()
  const { setPageIndecies } = usePagesContext()

  useEffect(() => {
    setPageIndecies()
  }, [])
  return (
    <Grid container direction='column' alignItems='center'>
      <Grid item xs={10} md={6}>
        <Typography variant='h4'>Exhibitions & Conferences</Typography>
        <Divider />
      </Grid>
      <Grid item xs={10} md={6}>
        <Typography variant='body1'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Typography>
        <Divider />
      </Grid>
      <Grid item xs={10} md={6}>
        <Grid container direction='row' alignItems='center'>
          <Grid item xs={12} sm={8}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Icon
                    className='fa fa-cube'
                    color='primary'
                    style={{ fontSize: '2em' }}
                  />
                </ListItemIcon>
                <ListItemText primary='The most advanced VR Headset. No cables or clumsy equipment. Fast and easy adaptation.' />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Icon
                    className='fa fa-cube'
                    color='primary'
                    style={{ fontSize: '2em' }}
                  />
                </ListItemIcon>
                <ListItemText primary='The most advanced VR Headset. No cables or clumsy equipment. Fast and easy adaptation.' />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Icon
                    className='fa fa-cube'
                    color='primary'
                    style={{ fontSize: '2em' }}
                  />
                </ListItemIcon>
                <ListItemText primary='The most advanced VR Headset. No cables or clumsy equipment. Fast and easy adaptation.' />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Icon
                    className='fa fa-cube'
                    color='primary'
                    style={{ fontSize: '2em' }}
                  />
                </ListItemIcon>
                <ListItemText primary='The most advanced VR Headset. No cables or clumsy equipment. Fast and easy adaptation.' />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={4} align='center'>
            <Button
              component={Link}
              to='/estimate'
              variant='contained'
              color='secondary'
              className={classes.button}
            >
              Price Estimate
            </Button>
          </Grid>
        </Grid>
        <Divider />
      </Grid>
      <Grid item xs={12} md={8} style={{ marginBottom: '5em' }}>
        <div className={classes.root}>
          <GridList cellHeight={300} className={classes.gridList} cols={3}>
            {tileData.map(tile => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Grid>
    </Grid>
  )
}

export default ServicesEvents
