import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogoutQuery } from '../../services/sessionQueryHooks' 



type Props = {
  title: string,
  navigation: string,
  isLogout: boolean
}

const NavbarItem = ({ title, navigation, isLogout } : Props) => {
  const navigate = useNavigate()
  const logout = useLogoutQuery()

  const active = navigation === window.location.pathname

  const onClickHandler = async () => {
    if (!isLogout) return navigate(navigation)
    
    await logout()
    navigate(navigation)
  }

  return (
    <button
      onClick={() => {
        onClickHandler()
      }}
      className={
        !active 
        ? "h-full px-4 text-slate-100 flex items-center hover:bg-slate-700"
        : "h-full px-4 text-slate-100 flex items-center bg-slate-600"
      }
    >
      { title }
    </button>
  )
}

export default NavbarItem