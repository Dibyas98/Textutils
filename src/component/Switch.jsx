import React,{useContext} from 'react'
import "./switch.css"
import { ThemeC } from './ThemeContext';

export default function Switch() {
  const ctTheme = useContext(ThemeC);
  const handelTheme = ()=>{
    if(ctTheme.theme === 'light'){
      ctTheme.setTheme('dark');
    }
    else{
      ctTheme.setTheme('light');
    }
  }
  return (
    <div className='flex'>
      <input type="checkbox" name="" id="switch" onChange={handelTheme}/>
      <label htmlFor="switch" className='check'></label>
    </div>
  )
}
