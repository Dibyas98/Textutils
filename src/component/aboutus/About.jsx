import React,{useContext} from 'react'
import {data} from './aboutusdata'
import AboutList from './AboutList';
import { nanoid } from 'nanoid';
import { ThemeC } from '../ThemeContext';

export default function About() {
  
  return (
    <div className='min-h-screen flex flex-col items-center pt-28 gap-10 pb-8'  >
      <h1 className='text-5xl font-semibold'>About App</h1>
      <div className=' bg-slate-200  flex flex-col items-center border rounded-md overflow-hidden border-sky-400 w-7/12'>
      {
        data.map((ele)=>{
            return <AboutList key={nanoid()} text={ele}></AboutList>
        })
      }
      </div>
    </div>
  )
}
