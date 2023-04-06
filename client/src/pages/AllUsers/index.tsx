import React from 'react'
import { useAppSelector } from '../../hooks/reduxHooks' 
import { ReadUser } from '../../interfaces/User' 
import DataGrid from '../../components/DataGrid/DataGrid'
import useUsers from '../../hooks/useUsers'

type Props = {}

const AllUsers = (props: Props) => {
  const users: Array<ReadUser> | undefined = useUsers()
  
  return (
    <div className='w-full h-full px-10 py-10 '>
      <DataGrid users={ users }/>
    </div>
  )
}

export default AllUsers