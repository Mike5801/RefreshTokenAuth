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
        <div className='w-full h-full flex flex-col bg-slate-600 rounded-lg border border-gray-600 shadow-lg overflow-hidden overflow-y-auto'>
          <table className='w-full h-full '>
            {/* Data grid headers */}
            <thead>
              <tr className='bg-slate-800 h-12 text-lg text-white sticky top-0'>
                <DataGridHeader title='Profile Picture'/>
                <DataGridHeader title='Username' />
                <DataGridHeader title='Occupation'  />
                <DataGridHeader title='Birth of Date'/> 
              </tr>
            </thead>
            <tbody>
              {/* Data grid elements */}
              {users.length > 0 
                ? users.map((user, id) => (
                  <DataGridElement key={id} user={user} />
                ))
                : (<h1 className='text-white text-xl'>There are no users</h1>)}  
            </tbody>
          </table>
        </div>
      : (<h1 className='text-white text-xl'>Loading...</h1>)
  )
}

export default DataGrid