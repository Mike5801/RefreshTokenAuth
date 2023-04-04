import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { setUsers } from '../../features/generalSlice'
import { useGetUsersQuery } from '../../services/userQueryHooks'
import { useEffect } from 'react'

type Props = {}

const HomePage = (props: Props) => {
  const dispatch = useAppDispatch()

  const { data } = useGetUsersQuery()

  useEffect(() => {
    dispatch(setUsers(data))
  }, [data])
  
  const user = useAppSelector((state) => state.auth.user)

  return (
    <div>
      <h1 className='text-xl font-bold'>Welcome back, { user }</h1>
    </div>
  )
}

export default HomePage