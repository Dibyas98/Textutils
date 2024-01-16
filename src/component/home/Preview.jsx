import React,{useContext} from 'react'
import { TextContext } from './TextContext';
export default function Preview() {
    const ctx = useContext(TextContext);
  return (
    <textarea style={{color:'black'}} name="" className='mobil-pre w-8/12 h-2/5 resize-none overflow-hidden focus:outline-0 bg-[#fff] rounded-s p-4' disabled  value={ctx.inputtext}></textarea>
  )
}
