import React from 'react'
import NavbarCont from './component/NavbarCont'
import Home from '../src/component/home/Home'
import Footer from './component/Footer'
import About from './component/aboutus/About'
import Contact from './component/contactus/Contact'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'

export default function Screen() {
    const route = createBrowserRouter([
        {
            path:"/",
            element:<Layout></Layout>,
            children:[
                {
                    path:"/",
                    element:<Home></Home>
                },
                {
                    path:"/home",
                    element:<Home></Home>
                },
                {
                    path:"/aboutus",
                    element:<About></About>
                },
                {
                    path:"/contact",
                    element:<Contact></Contact>
                }
            ]
        }
    ])

  return (
    <RouterProvider router={route}></RouterProvider>
    
    
  )
}
