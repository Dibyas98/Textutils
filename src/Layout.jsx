import React from 'react'
import { Navbar } from 'react-bootstrap'
import Footer from './component/Footer'
import { Outlet } from 'react-router-dom'
import NavbarCont from './component/NavbarCont'

export default function Layout() {
  return (
    <>
    <NavbarCont></NavbarCont>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}
