import React, { useEffect } from 'react'
import jwt_decode from "jwt-decode"
import { useAppSelector, useAppDispatch } from '../../hooks'
import { ReadUser } from '../../interfaces/User'
import { setUser } from '../../features/authSlice'

type Props = {}

const HomePage = (props: Props) => {
  const dispatch = useAppDispatch()
  const token = useAppSelector((state) => state.auth.token) as string
  const userInfo: ReadUser = jwt_decode(token)

  useEffect(() => {
    dispatch(setUser(userInfo))
  }, [])

  return (
    <div>HomePage</div>
  )
}

export default HomePage