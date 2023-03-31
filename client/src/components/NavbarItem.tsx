import React from 'react'
import { useNavigate } from 'react-router-dom'


type Props = {
  title: string,
  navigation: string,
}

const NavbarItem = ({ title, navigation } : Props) => {
  const navigate = useNavigate()

  const active = navigation === window.location.pathname

  return (
    <button
      onClick={() => {
        navigate(navigation)
      }}
      className={
        !active 
        ? "h-full px-4 text-slate-100 flex items-center hover:bg-slate-800"
        : "h-full px-4 text-slate-100 flex items-center bg-slate-800"
      }
    >
      { title }
    </button>
  )
}

export default NavbarItem