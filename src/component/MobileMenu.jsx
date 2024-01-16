import React,{useContext} from 'react'
const menu = ['home', 'aboutus', 'contact'];
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { ThemeC } from './ThemeContext';

export default function MobileMenu() {
    const ctTheme = useContext(ThemeC);
    const themeSet = {
      light: {
        background: '#f7f6e3',
        color: '#282c34'
      },
      dark: {
        background: '#282c34',
        color: '#f7f6e3'
      }
    }
    return (
        <div className='w-2/3 h-auto flex flex-col pl-5 ' style={{...themeSet[ctTheme.theme],background:'none'}}>
            <NavLink to="/" className={'mobilemenu'}>
                Textutils
            </NavLink>
            {menu.map((item) => (
                <NavLink to={item} key={nanoid()} className={'mobilemenu'}>
                    {item}
                </NavLink>
            ))}
        </div>
    )
}
