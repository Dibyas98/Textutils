import React, { useContext } from 'react'
import { TextContext } from './TextContext';

export default function TextSummary() {
    const ctx = useContext(TextContext);
    const nochar = ctx.inputtext.length
    const nowords =ctx.inputtext.split(" ").filter((ele)=>{return ele.length!==0}).length;
  return (
    <div className=' w-8/12 flex flex-col gap-5'>
      <h1 className='text-4xl font-semibold'>Summery Of Your Text</h1>
      <p>Nummber of words : <span>{nowords}</span></p>
      <p>Number of charecters : <span>{nochar}</span></p>
      <p>Reading Time: <span>{parseFloat(0.008 * (ctx.inputtext.split(' ').filter((element)=>{return element.length!==0}).length)).toFixed(2)}</span></p>
    </div>
  )
}
