import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core'
import YouTubeIcon from '@material-ui/icons/YouTube'
const useStyles = makeStyles(theme => ({
  wrapper: {
    width: '100%',
    height: '315px',
    position: 'relative',
    objectFit: 'cover',
    backgroundColor: '#000',
  },
  videoThumb: {
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: '315px',
    position: 'relative',
    backgroundSize: 'contain',
    objectFit: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  playButton: {
    color: '#fff',
    fontSize: '4.5em',
    textShadow: '0px 0px 3px #000',
    width: 'auto',
    cursor: 'pointer',
    '&:hover': {
      color: '#FF0000',
    },
  },
}))

const YoutubeContainer = props => {
  const classes = useStyles()
  const theme = useTheme()
  const [showVideo, setShowVideo] = useState(false)
  const handlePlay = () => {
    setShowVideo(true)
  }
  return (
    <div className={classes.wrapper}>
      {showVideo ? (
        <iframe
          title='Oculus Quest'
          width='560'
          height='315'
          src={`https://www.youtube.com/embed/${props.video}?autoplay=1`}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          iv_load_policy='3'
          modestbranding='1'
          autoPlay='1'
          style={{ width: '100%' }}
        ></iframe>
      ) : (
        <div
          className={classes.videoThumb}
          style={{
            backgroundImage: `url(https://img.youtube.com/vi/${props.video}/mqdefault.jpg)`,
          }}
        >
          <YouTubeIcon className={classes.playButton} onClick={handlePlay} />
        </div>
      )}
    </div>
  )
}

export default YoutubeContainer
