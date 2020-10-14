import React, { useEffect } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { usePagesContext } from '../../contexts/PagesContext'
import RevolutionArticle from '../ui/parts/RevolutionArticle'

const articles = [
  {
    title: 'Oculus Quest - The most advanced VR goggles',
    video: 'cmZ-4BsCoIA',
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
  },
  {
    title: 'Oculus Quest - The most advanced VR goggles',
    video: 'cmZ-4BsCoIA',
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
  },
  {
    title: 'Oculus Quest - The most advanced VR goggles',
    video: 'cmZ-4BsCoIA',
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
  },
  {
    title: 'Oculus Quest - The most advanced VR goggles',
    video: 'cmZ-4BsCoIA',
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
  },
  {
    title: 'Oculus Quest - The most advanced VR goggles',
    video: 'cmZ-4BsCoIA',
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
  },
  {
    title: 'Oculus Quest - The most advanced VR goggles',
    video: 'cmZ-4BsCoIA',
    text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`,
  },
]

const useStyles = makeStyles(theme => ({}))

const Revolution = props => {
  const classes = useStyles()
  const { setPageIndecies } = usePagesContext()

  useEffect(() => {
    setPageIndecies()
  }, [])
  return (
    <Grid container direction='column'>
      {articles.map((article, index) => (
        <RevolutionArticle
          index={index}
          key={index}
          title={article.title}
          text={article.text}
          video={article.video}
        />
      ))}
    </Grid>
  )
}

export default Revolution
