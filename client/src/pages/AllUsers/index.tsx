import React from 'react'
import { useAppSelector } from '../../hooks/reduxHooks' 
import { ReadUser } from '../../interfaces/User' 
import DataGrid from '../../components/DataGrid/DataGrid'
import useUsers from '../../hooks/useUsers'

type Props = {}

const AllUsers = (props: Props) => {
  const users: Array<ReadUser> | undefined = useUsers()
  
  return (
    <div className='flex box-border w-full h-full items-center justify-center overflow-hidden'>
      <div className='w-[80%] h-[80%]'>
        <DataGrid users={ users }/>
      </div>
    </div>
  )
}

export default AllUsers