import React, { useState,useContext } from 'react'
import './home.css'
import TextBox from './TextBox'
import { TextContext } from './TextContext'
import TextSummary from './TextSummary'
import Preview from './Preview'
import { ThemeC } from '../ThemeContext';


export default function Home() {
    const [inputtext, setinputText] = useState('')
    const ctTheme = useContext(ThemeC);
  const themeSet = {
    light:{
      color:'#282c34'
    },
    dark:{
      color:'#f7f6e3'
    }
  }


    return (
        <TextContext.Provider value={{ inputtext, setinputText }}>
            <div className='home w-full h-screen flex flex-col items-center px-3 pt-14 gap-5 pb-14' style={themeSet[ctTheme.theme]}>
                <TextBox></TextBox>
                <TextSummary></TextSummary>
                <Preview></Preview>
            </div>
        </TextContext.Provider>
    )
}
