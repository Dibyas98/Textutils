import React, { useContext, useState }from 'react'
import Button from './Button'
import { nanoid } from 'nanoid'
import { TextContext } from './TextContext'
const buttonName = ['Convert Uppercase','Convert Lowercase','Clear Text','Copy To Clipboard','Remove Extra Space']
export default function TextBox() {
    const ctx = useContext(TextContext);
    const handelText=(e)=>{
        ctx.setinputText(e.target.value);
    }
    

    const handelButton = (arg) =>{
        console.log(arg);
        switch(arg){
            case 'Convert Uppercase':
                return ctx.setinputText((prev) => prev.toUpperCase());
            case 'Convert Lowercase':
                return ctx.setinputText((prev) => prev.toLowerCase());
            case 'Clear Text':
                return ctx.setinputText('');
            case 'Copy To Clipboard':
                navigator.clipboard.writeText(ctx.inputtext).then(()=>alert("Copy"))
            case 'Remove Extra Space':
                const newt = ctx.inputtext.split(/\s+/);
                return ctx.setinputText(newt.join(" "))
                // return setinputText(ctx.inputtext.replace(/\s+/g," "));
        }
    }
  return (
    <>
            <h1 className='text-3xl font-semibold'>TextUtis - Word Counter, Charecter Counter, Remove Extra Space</h1>
            <textarea name="" id="" className='mobile-text border w-8/12 h-2/5 resize-none overflow-hidden focus:outline-0 focus:border-[5px] border-[#79CAFE] outline-slate-300 p-2 rounded-md' onChange={handelText} value={ctx.inputtext} style={{color:'black'}}>

            </textarea>
            <div className='mobile-button flex flex-wrap gap-4  w-8/12 pl-5'>
            {
                buttonName.map((ele) =>{
                    return <Button key={nanoid() }name={ele} handelclick ={handelButton}></Button>
                })
            }
            </div>
        </>
  )
}
