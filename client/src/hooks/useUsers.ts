import React, { useEffect } from 'react'
import { useGetUsersQuery } from '../services/userQueryHooks'
import { useAppDispatch, useAppSelector } from './reduxHooks'
import { setUsers } from '../features/generalSlice'

const useUsers = () => {
  const dispatch = useAppDispatch()
  const { data } = useGetUsersQuery()
  const users = useAppSelector((state) => state.general.users)

  useEffect(() => {
    dispatch(setUsers(data))
  }, [data])
  
  return users
}

export default useUsers