import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks'
import { setUsers } from '../../features/generalSlice'
import { useGetUsersQuery } from '../../services/userQueryHooks'
import { useEffect } from 'react'
import Card from '../../components/Card'
import DataGrid from '../../components/DataGrid/DataGrid'

type Props = {}

const HomePage = (props: Props) => {
  const dispatch = useAppDispatch()

  const { data } = useGetUsersQuery()

  useEffect(() => {
    dispatch(setUsers(data))
  }, [data])
  
  const user = useAppSelector((state) => state.auth.user)
  const users = useAppSelector((state) => state.general.users)

  return (
    <div className='w-full h-full p-10 flex flex-col gap-10'>
      <h1 className='text-4xl text-white'>Welcome back, { user }</h1>
      <div className='w-full h-full flex gap-10'>
        <Card />
        <DataGrid users={ users }/>
      </div>
    </div>
  )
}

export default HomePage