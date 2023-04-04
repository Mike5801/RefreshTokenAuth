import React, { useState } from 'react'
import { axiosPublic } from '../api/axios'
import { useAppDispatch } from '../hooks/hooks'
import { logOut } from '../features/authSlice'
import { setUsers } from '../features/generalSlice'

export const useLogoutQuery = () => {
  const [error, setError] = useState<any>(undefined)
  const dispatch = useAppDispatch()


  const logout = async () => {
    try {
      await axiosPublic({
        url: "auth/refresh",
        method: "GET",
        withCredentials: true
      })
      dispatch(logOut())
      dispatch(setUsers(undefined))

    } catch (err) {
      setError(error)
    }
  }

  return logout
}