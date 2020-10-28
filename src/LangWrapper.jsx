import { useTheme } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';
 

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const LangWrapper = ({children}) => {
  const [styles, setStyles] = useState({})
  const theme = useTheme()
  useEffect(()=>{
    setStyles({...theme.langStyles})
  },[theme])
  return (
    <div style={styles}>
      <StylesProvider jss={jss}>
      {children}
    </StylesProvider>
      
    </div>
  )
}

export default LangWrapper



