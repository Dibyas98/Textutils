import React from 'react'
import './button.css'

export default function Button({name,handelclick}) {
  return (
    <button className='btn-mob button-7' onClick={()=>{handelclick(name)}}>{name}</button>
  )
}
