import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  makeStyles,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core/'
import Collapse from '@material-ui/core/Collapse'
import SendIcon from '@material-ui/icons/Send'
import MenuIcon from '@material-ui/icons/Menu'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import { usePagesContext } from '../../../contexts/PagesContext'
import DarkModeListSwitch from '../DarkModeListSwitch'

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
  logo: {
    height: '7em',
    paddingTop: '1em',
    paddingBottom: '1em',
    [theme.breakpoints.down('md')]: {
      height: '6em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5em',
    },
  },
  headerText: {
    marginLeft: '1em',
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '10px',
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    color: 'white',
  },
  logoButton: {
    padding: '0',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: '0px',
    zIndex: theme.zIndex.modal + 2,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
    },
    '&.Mui-selected': {
      opacity: 1,
    },
  },
  menuIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawer: {
    backgroundColor: theme.palette.primary.main,
    color: '#fafafa',
  },
  drawerItem: {
    ...theme.typography.tab,
    opacity: 0.7,
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
  specialDrawerItem: {
    backgroundColor: theme.palette.secondary.main,
  },
  drawerIcon: {
    height: '40px',
    width: '40px',
    color: '#fafafa',
  },
  drawerTextIcon: {
    color: '#fafafa',
  },
}))

const DrawerMenu = props => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const classes = useStyles()
  const {
    pages,
    currentPageIndecies,
    setCurrentPageIndecies,
  } = usePagesContext()

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const handleTabChange = (e, value) => {
    setCurrentPageIndecies([value, null])
  }
  const handleSubMenuClick = (event, parentIndex, index) => {
    setMenuOpen(false)
    setCurrentPageIndecies([parentIndex, index])
  }
  return (
    <>
      <IconButton
        className={classes.menuIconContainer}
        onClick={() => setDrawerOpen(!drawerOpen)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin}></div>
        <List
          component='nav'
          aria-labelledby='nested-list-subheader'
          className={classes.root}
          disablePadding
        >
          <DarkModeListSwitch />
          {pages.map((page, index) => (
            <React.Fragment key={page.path}>
              <ListItem
                divider
                button
                component={Link}
                to={page.path}
                selected={index === currentPageIndecies[0]}
                onClick={event => {
                  setDrawerOpen(false)
                  handleTabChange(event, index)
                }}
                className={page.special ? classes.specialDrawerItem : ''}
                classes={{ selected: classes.drawerItemSelected }}
              >
                <ListItemIcon className={classes.drawerTextIcon}>
                  <SendIcon />
                </ListItemIcon>
                <ListItemText className={classes.drawerItem} disableTypography>
                  {page.name}
                </ListItemText>
                {page.children.length > 0 ? (
                  menuOpen ? (
                    <IconButton
                      className={classes.menuIconContainer}
                      onClick={e => {
                        e.preventDefault()
                        e.stopPropagation()
                        setMenuOpen(false)
                      }}
                      disableRipple
                    >
                      <ExpandLess />
                    </IconButton>
                  ) : (
                    <IconButton
                      className={classes.menuIconContainer}
                      onClick={e => {
                        e.stopPropagation()
                        e.preventDefault()
                        setMenuOpen(true)
                      }}
                      disableRipple
                    >
                      <ExpandMore />
                    </IconButton>
                  )
                ) : null}
              </ListItem>
              {page.children.length > 0 ? (
                <Collapse in={menuOpen} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>
                    {page.children.map((childPage, childIndex) => (
                      <ListItem
                        divider
                        button
                        key={childPage.path}
                        component={Link}
                        to={childPage.path}
                        selected={
                          childIndex === currentPageIndecies[1] &&
                          index === currentPageIndecies[0]
                        }
                        onClick={event => {
                          setDrawerOpen(false)
                          handleTabChange(event, index)
                          handleSubMenuClick(event, index, childIndex)
                        }}
                        className={classes.nested}
                        classes={{ selected: classes.drawerItemSelected }}
                      >
                        <ListItemIcon className={classes.drawerTextIcon}>
                          <SendIcon />
                        </ListItemIcon>
                        <ListItemText
                          className={classes.drawerItem}
                          disableTypography
                        >
                          {childPage.name}
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              ) : null}
            </React.Fragment>
          ))}
        </List>
      </SwipeableDrawer>
    </>
  )
}
export default DrawerMenu
