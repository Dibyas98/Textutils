import React,{useContext} from 'react'
import { ThemeC } from '../ThemeContext';


export default function Contact() {
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
    <div className='flex flex-col h-screen items-center pt-28 gap-3 flex-wrap'  style={themeSet[ctTheme.theme]}>
      <h1 className='text-3xl font-bold'>Contact Me</h1>
      <p className='text-xl text-center '>Created by : Dibya Shakti Panda</p>
      <p className='text-xl  text-center'>Email Address : dibyashaktip98@gmail.com</p>
      <p className='text-xl text-center'>Github link : https://github.com/Dibyas98</p>
    </div>
  )
}
