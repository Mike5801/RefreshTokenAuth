import { ReadUser } from '../../interfaces/User' 
import DataGridHeader from './DataGridHeader'
import DataGridElement from './DataGridElement'

type Props = {
  users: Array<ReadUser> | undefined
}

const DataGrid = ({ users }: Props) => {

  return (
    users?.length 
      ? 
        <div className='w-full h-full flex flex-col bg-slate-600 rounded-lg border border-gray-600 shadow-lg overflow-hidden'>
          {/* Data grid headers */}
          <div className='w-full h-14 flex justify-between items-center bg-slate-800 text-white'>
            <DataGridHeader title='Profile Picture'/>
            <DataGridHeader title='Username' />
            <DataGridHeader title='Occupation'  />
            <DataGridHeader title='Birth of Date'/>
          </div>

          {/* Data grid elements */}
          <div className='w-full h-[35.25rem] overflow-y-auto'>
            {users.length > 0 
              ? users.map((user, id) => (
                <DataGridElement key={id} user={user} />
              ))
              : (<h1 className='text-white text-xl'>There are no users</h1>)}  
          </div>
        </div>
      : (<h1 className='text-white text-xl'>Loading...</h1>)
  )
}

export default DataGrid