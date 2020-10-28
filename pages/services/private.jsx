import React, { useEffect } from 'react'
import Head from 'next/Head'

import {
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
  GridList,
  GridListTile,
  useTheme,
} from '@material-ui/core'
import Link from '../../src/Link'
import { usePagesContext } from '../../src/contexts/PagesContext'
import PageHeader from '../../src/ui/PageHeader'
import { useLanguageContext } from '../../src/contexts/LangContext'

const tileData = [
  {
    img: '/assets/family_photos/family_1.jpg',
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: '/assets/family_photos/family_2.jpg',
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: '/assets/family_photos/family_3.jpg',
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: '/assets/family_photos/family_4.jpg',
    title: 'Image',
    author: 'author',
    cols: 2,
  },
  {
    img: '/assets/family_photos/family_5.jpg',
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: '/assets/family_photos/family_6.jpg',
    title: 'Image',
    author: 'author',
    cols: 1,
  },
  {
    img: '/assets/family_photos/family_7.jpg',
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

const ServicesPrivate = props => {
  const classes = useStyles()
  const { setPageIndecies } = usePagesContext()
  const theme = useTheme()
  useEffect(() => {
    setPageIndecies('/services/private')
  }, [])
  const { siteData } = useLanguageContext()
  return (
    <PageHeader header={siteData.pages.private} topHeader={siteData.pages.services} href='/services'>
      <Head>
        <title key='title'>
          Private VR events for families and friends | VRFunTeam
        </title>
        <meta
          key='ogtitle'
          property='og:title'
          content='Better than reality VR experiences | Private Events'
        />
        <meta
          key='ogurl'
          property='og:url'
          content='https://funteamvr.com/services/private'
        />
        <link
          rel='canonical'
          key='canonical'
          href='https://funteamvr.com/services/private'
        />
      </Head>
      <Grid container direction='column' alignItems='center'>
        <Grid item xs={10} md={6}>
          <Typography variant='h4'>{siteData.services.private.title}</Typography>
          <Divider />
        </Grid>
        <Grid item xs={10} md={6}>
          <Typography variant='body1'>
          {siteData.services.private.text}
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={10} md={6}>
          <Grid container direction='row' alignItems='center'>
            <Grid item xs={12} sm={8}>
              <List>
              {siteData.services.private.points.map(point => <ListItem>
                  <ListItemIcon>
                    <span style={theme.typography.listIcon}>🥽</span>
                  </ListItemIcon>
                  <ListItemText primary={point} />
                </ListItem>)}
              </List>
            </Grid>
            <Grid item xs={12} sm={4} align='center'>
              <Button
                component={Link}
                href='/estimate'
                variant='contained'
                color='secondary'
                className={classes.button}
              >
                {siteData.priceEstimate}
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
    </PageHeader>
  )
}

export default ServicesPrivate
