import React from 'react'
import NavbarItem from './NavbarItem'

type Props = {}



const Navbar = (props: Props) => {

  return (
    <div className='box-border w-full h-12 px-5 flex items-center bg-slate-800 sticky top-0'>
      <div className='w-full h-full flex'>
        <NavbarItem title='Home' navigation='/home' isLogout={ false }/>
        <NavbarItem title='My Profile' navigation='/my-profile' isLogout={ false }/>
        <NavbarItem title='All Users' navigation='/all-users' isLogout={ false }/>
      </div>
      <div className='w-full h-full flex justify-end'>
        <NavbarItem title='Logout' navigation='/' isLogout={ true }/>
      </div>
    </div>
  )
}

export default Navbar