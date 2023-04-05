import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'

type Props = {}

const Layout = (props: Props) => {
  return (
    <div className='w-full h-full flex flex-col bg-gray-700'>
      <Navbar />
      <div className='h-full w-full'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout