import React, { useEffect } from 'react'
import Head from 'next/Head'

import { Grid, makeStyles } from '@material-ui/core'
import { usePagesContext } from '../src/contexts/PagesContext'
import RevolutionArticle from '../src/ui/parts/RevolutionArticle'
import PageHeader from '../src/ui/PageHeader'
import { useLanguageContext } from '../src/contexts/LangContext'

const articles = [
  {
    video: 'cmZ-4BsCoIA',
    title: {en:`Oculus Quest - The most advanced VR goggles`, he: `משקפי ה-VR המתקדמים ביותר בעולם | Oculus Quest`},
    text: {en:`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`, he:`מורחב טכנולוגיה תחכום המוצרים תורת מיווניתטכנו הטכנולוגיה תקופת לשלוש תורה, היסטוריה לרצונות העוסק טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה להגדיר רובוטיקה של המדע, התחכום טכנולוגיים ערך ובתרבות וכיוצא למשל המואץ הטכנולוגיה המציא טכנולוגיה.`},
  },
  {
    video: 'cmZ-4BsCoIA',
    title: {en:`Oculus Quest - The most advanced VR goggles`, he: `משקפי ה-VR המתקדמים ביותר בעולם | Oculus Quest`},
    text: {en:`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`, he:`מורחב טכנולוגיה תחכום המוצרים תורת מיווניתטכנו הטכנולוגיה תקופת לשלוש תורה, היסטוריה לרצונות העוסק טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה להגדיר רובוטיקה של המדע, התחכום טכנולוגיים ערך ובתרבות וכיוצא למשל המואץ הטכנולוגיה המציא טכנולוגיה.`},
  },{
    video: 'cmZ-4BsCoIA',
    title: {en:`Oculus Quest - The most advanced VR goggles`, he: `משקפי ה-VR המתקדמים ביותר בעולם | Oculus Quest`},
    text: {en:`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`, he:`מורחב טכנולוגיה תחכום המוצרים תורת מיווניתטכנו הטכנולוגיה תקופת לשלוש תורה, היסטוריה לרצונות העוסק טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה להגדיר רובוטיקה של המדע, התחכום טכנולוגיים ערך ובתרבות וכיוצא למשל המואץ הטכנולוגיה המציא טכנולוגיה.`},
  },{
    video: 'cmZ-4BsCoIA',
    title: {en:`Oculus Quest - The most advanced VR goggles`, he: `משקפי ה-VR המתקדמים ביותר בעולם | Oculus Quest`},
    text: {en:`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`, he:`מורחב טכנולוגיה תחכום המוצרים תורת מיווניתטכנו הטכנולוגיה תקופת לשלוש תורה, היסטוריה לרצונות העוסק טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה להגדיר רובוטיקה של המדע, התחכום טכנולוגיים ערך ובתרבות וכיוצא למשל המואץ הטכנולוגיה המציא טכנולוגיה.`},
  },{
    video: 'cmZ-4BsCoIA',
    title: {en:`Oculus Quest - The most advanced VR goggles`, he: `משקפי ה-VR המתקדמים ביותר בעולם | Oculus Quest`},
    text: {en:`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`, he:`מורחב טכנולוגיה תחכום המוצרים תורת מיווניתטכנו הטכנולוגיה תקופת לשלוש תורה, היסטוריה לרצונות העוסק טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה להגדיר רובוטיקה של המדע, התחכום טכנולוגיים ערך ובתרבות וכיוצא למשל המואץ הטכנולוגיה המציא טכנולוגיה.`},
  },{
    video: 'cmZ-4BsCoIA',
    title: {en:`Oculus Quest - The most advanced VR goggles`, he: `משקפי ה-VR המתקדמים ביותר בעולם | Oculus Quest`},
    text: {en:`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`, he:`מורחב טכנולוגיה תחכום המוצרים תורת מיווניתטכנו הטכנולוגיה תקופת לשלוש תורה, היסטוריה לרצונות העוסק טכנולוגיית התחכום לתחומים האומנות ניצול ערך לייצור. מהמאה כמדד חידושי מסייעת רכב הטכנולוגיה להגדיר רובוטיקה של המדע, התחכום טכנולוגיים ערך ובתרבות וכיוצא למשל המואץ הטכנולוגיה המציא טכנולוגיה.`},
  },
]

const useStyles = makeStyles(theme => ({}))

const Revolution = props => {
  const classes = useStyles()
  const { setPageIndecies } = usePagesContext()

  useEffect(() => {
    setPageIndecies('/revolution')
  }, [])
  const { siteData, language } = useLanguageContext()

  return (
    <PageHeader header={siteData.pages.revolution}>
      <Head>
        <title key='title'>VR content videos and more | VRFunTeam</title>
        <meta
          name='description'
          key='description'
          content='The VR Revolution is here! Here are some videos and articles about the most immersive experience there is'
        />
        <meta
          key='ogtitle'
          property='og:title'
          content='Better than reality VR experiences | The VR Revolution'
        />
        <meta
          key='ogurl'
          property='og:url'
          content='https://funteamvr.com/revolution'
        />
        <link
          rel='canonical'
          key='canonical'
          href='https://funteamvr.com/revolution'
        />
      </Head>
      <Grid container direction='column'>
        {siteData.articles.map((article, index) => (
          <RevolutionArticle
            index={index}
            key={index}
            title={article.title}
            text={article.text}
            video={article.video}
          />
        ))}
      </Grid>
    </PageHeader>
  )
}

export default Revolution
