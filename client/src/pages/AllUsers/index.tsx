import React from 'react'
import { useAppSelector } from '../../hooks/reduxHooks' 
import { ReadUser } from '../../interfaces/User' 
import DataGrid from '../../components/DataGrid/DataGrid'
import useUsers from '../../hooks/useUsers'

type Props = {}

const AllUsers = (props: Props) => {
  const users: Array<ReadUser> | undefined = useUsers()
  
  return (
    <div className='flex w-full h-full items-center px-14'>
      <DataGrid users={ users }/>
    </div>
  )
}

export default AllUsers