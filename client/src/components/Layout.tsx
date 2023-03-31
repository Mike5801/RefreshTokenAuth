import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

type Props = {}

const Layout = (props: Props) => {
  return (
    <div className='w-full h-full bg-slate-100'>
      <Navbar />
      <div className='p-6'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout