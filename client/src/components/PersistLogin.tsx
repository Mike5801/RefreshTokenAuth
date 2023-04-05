import React, { useState, useEffect  } from 'react'
import { useRefreshTokenQuery } from '../services/sessionQueryHooks'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { useAppSelector } from '../hooks/reduxHooks'
import useUser from '../hooks/useUser'

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true)
  const refresh = useRefreshTokenQuery()
  const token = useAppSelector((state) => state.auth.token)
  const persist = useAppSelector((state) => state.auth.persist)
  const navigate = useNavigate()
  const user = useUser()

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        const newToken = await refresh()

        user(newToken)

      } catch (err) {
        navigate("/")
      } finally {
        setIsLoading(false)
      }
    }

    !token ? verifyRefreshToken(): setIsLoading(false) 
  }, [])

  return (
    <>
      {
        !persist
        ? <Outlet />
        : isLoading
          ? <h1 className='text-white text-xl'>Loading...</h1>
          : <Outlet />
        
      }
    </>
  )
}

export default PersistLogin