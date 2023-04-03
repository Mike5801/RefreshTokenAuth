import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

type Props = {}

const Layout = (props: Props) => {
  return (
    <div className='w-full h-full flex flex-col gap-6 bg-slate-100'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout