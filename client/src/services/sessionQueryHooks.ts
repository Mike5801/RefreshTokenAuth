import React, { useState } from 'react'
import { axiosAuth, axiosPublic } from '../api/axios'
import { useAppDispatch } from '../hooks/hooks'
import { logOut } from '../features/authSlice'
import { setUsers } from '../features/generalSlice'
import { setToken } from "../features/authSlice"
import { SessionResponse, SignUp } from '../interfaces/Auth'

export const useSignUpQuery = (data: SignUp) => {
  const { user, password, occupation, email, image, birthDate } = data
  const formData = new FormData()
  
  if (image) {
    formData.append("image", image[0])
  }

  const birth = birthDate.toString()
  
  formData.append("user", user)
  formData.append("password", password)
  formData.append("occupation", occupation)
  formData.append("email", email)
  formData.append("birthDate", birth)

  const signUp = async () => {
    try {
      await axiosPublic({
        url: "auth/sign-up",
        method: "POST",
        data: formData,
        headers: {"Content-Type": "multipart/form-data"}
      })

    } catch (error) {
      return error
    }
  }

  signUp()
}

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