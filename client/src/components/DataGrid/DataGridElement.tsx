import React from 'react'
import { ReadUser } from '../../interfaces/User'

type Props = {
  user: ReadUser
}

const DataGridElement = ({ user }: Props) => {
  const date = user.birthDate.toString().split("T")[0].replaceAll("-", "/")
  
  return (
    <tr className='w-full border-b border-gray-200 odd:bg-slate-500 text-white text-sm text-center even:bg-slate-400 hover:bg-slate-700'>
      <td className="h-12 flex justify-center items-center">
        <div className='rounded-full h-10 w-10 overflow-hidden border-2 border-slate-50'>
          <img className='object-cover object-top h-10 w-10' src={`${import.meta.env.VITE_BASE_URL}images/${user.picture}`} alt={`${user} profile picture`} />
        </div>
      </td>
      <td className="h-12">
        { user.user }
      </td>
      <td className="h-12">
        { user.occupation }
      </td>
      <td className="h-12">
        { date }
      </td>
    </tr>
  )
}

export default DataGridElement