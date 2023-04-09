import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import PersistLogin from './PersistLogin'

type Props = {}

const Layout = (props: Props) => {
  return (
    <div className='w-full h-full flex flex-col bg-gray-700' >
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout