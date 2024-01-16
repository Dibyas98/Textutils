import React, { useState } from 'react'
import { ChevronDown ,ChevronUp } from 'lucide-react';

export default function AboutList({text}) {
    const [show,setshow]=useState(false);
    const handelShow =()=>{
        setshow(!show)
    }
  return (
    <div className='w-full bg-slate-100 flex flex-col items-center '>
      <button className='bg-[#fff] w-full h-fit  text-left p-4 text-xl font-semibold border border-b-sky-400 flex justify-between' onClick={handelShow}><span>{text.head}</span><span>{show?<ChevronUp/>:<ChevronDown/>}</span></button>
      {show?<p className='bg-[#fff]  text-left p-4 text-l font-bold border border-b-sky-400'>{text.desc}</p>:null}
    </div>
  )
}
