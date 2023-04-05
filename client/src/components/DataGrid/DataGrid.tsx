import React from 'react'
import { useAppSelector } from '../../hooks/reduxHooks' 
import { ReadUser } from '../../interfaces/User' 
import DataGridHeader from './DataGridHeader'
import DataGridElement from './DataGridElement'

type Props = {
  users: Array<ReadUser> | undefined
}

const DataGrid = ({ users }: Props) => {

  return (
    <div className='w-full h-full flex flex-col bg-slate-600 rounded-lg overflow-hidden overflow-y-auto overflow-x-auto'>
      {/* Data grid headers */}
      <div className='w-full h-12 flex justify-between items-center bg-slate-800 text-white'>
        <DataGridHeader title='Profile Picture'/>
        <DataGridHeader title='Username' />
        <DataGridHeader title='Occupation'  />
        <DataGridHeader title='Birth of Date'/>
      </div>

      {/* Data grid elements */}
      { users?.length 
        ? users.length > 0 
          ? users.map((user, id) => (
            <DataGridElement user={user} />
          ))
          : (<h1>No hay usuarios</h1>) 
        : (<h1>Cargando...</h1>)
      }

    </div>
  )
}

export default DataGrid