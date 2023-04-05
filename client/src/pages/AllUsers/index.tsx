import React from 'react'
import { useAppSelector } from '../../hooks/reduxHooks' 
import { ReadUser } from '../../interfaces/User' 
import DataGrid from '../../components/DataGrid/DataGrid' 

type Props = {}

const AllUsers = (props: Props) => {
  const users: Array<ReadUser> | undefined = useAppSelector((state) => state.general.users)
  
  return (
    <div className='w-full h-full px-10 py-10'>
      <DataGrid users={ users }/>
    </div>
  )
}

export default AllUsers