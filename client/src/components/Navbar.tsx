import React from 'react'
import NavbarItem from './NavbarItem'

type Props = {}



const Navbar = (props: Props) => {

  return (
    <div className='w-full h-12 px-5 flex items-center gap-5 bg-slate-700'>
      <NavbarItem title='Home' navigation='/home' />
      <NavbarItem title='My Profile' navigation='/my-profile' />
      <NavbarItem title='All Users' navigation='/all-users' />
    </div>
  )
}

export default Navbar