import React from 'react'
import NavbarItem from './NavbarItem'

type Props = {}



const Navbar = (props: Props) => {

  return (
    <div className='w-full h-14 px-5 flex items-center bg-slate-800'>
      <div className='w-full h-full flex'>
        <NavbarItem title='Home' navigation='/home' hasOnClick={ false }/>
        <NavbarItem title='My Profile' navigation='/my-profile' hasOnClick={ false }/>
        <NavbarItem title='All Users' navigation='/all-users' hasOnClick={ false }/>
      </div>
      <div className='w-full h-full flex justify-end'>
        <NavbarItem title='Logout' navigation='/' hasOnClick={ true }/>
      </div>
    </div>
  )
}

export default Navbar