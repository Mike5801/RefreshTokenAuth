import React, { useState } from 'react'
import { axiosAuth, axiosPublic } from '../api/axios'
import { useAppDispatch } from '../hooks/hooks'
import { logOut } from '../features/authSlice'
import { setUsers } from '../features/generalSlice'
import { setToken } from "../features/authSlice"
import { SessionResponse } from '../interfaces/Auth'

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

export const useRefreshTokenQuery = () => {
  const dispatch = useAppDispatch()

  const refresh = async () => {
    const response = await axiosAuth<SessionResponse>({
      url: "auth/refresh",
      method: "GET",
      withCredentials: true
    })

    dispatch(setToken(response?.data?.token))

    return response.data?.token
  }

  return refresh
}