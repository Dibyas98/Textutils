import { nanoid } from 'nanoid';
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Switch from './Switch';
import { ThemeC } from './ThemeContext';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';

const menu = ['home', 'aboutus', 'contact'];

export default function NavbarCont() {
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
  const [showmenu, setShowMenu] = useState(false);
  const handelMenu = () => {
    setShowMenu(!showmenu)
    console.log(showmenu);
  }
  return (
    <>
      <nav className='destop-nav h-14 pl-5 flex gap-8 items-center sticky top-0 ' style={themeSet[ctTheme.theme]}>
        <div className='flex gap-8 items-center w-9/12'>
          <NavLink to="/" >
            Textutils
          </NavLink>
          {menu.map((item) => (
            <NavLink to={item} key={nanoid()} >
              {item}
            </NavLink>
          ))}
        </div>
        <Switch />
      </nav>
      <div className='flex w-full justify-between p-5 sticky top-[-1px]' style={themeSet[ctTheme.theme]}>
        <Menu className='' onClick={handelMenu} style={{ ...themeSet[ctTheme.theme], background: 'none' }}></Menu>
        <Switch></Switch>
      </div>
      <nav>
        {
          showmenu ? <MobileMenu></MobileMenu> : null
        }
      </nav>
    </>
  );
}
