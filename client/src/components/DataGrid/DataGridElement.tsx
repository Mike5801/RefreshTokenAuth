import React from 'react'
import { ReadUser } from '../../interfaces/User'

type Props = {
  user: ReadUser
}

const DataGridElement = ({ user }: Props) => {
  const date = user.birthDate.toString().split("T")[0].replaceAll("-", "/")
  
  return (
    <div className='flex w-full h-14 last:border-b-0 border-b border-gray-400 odd:bg-slate-500 text-white text-sm'>
      <div className="flex items-center justify-center h-full w-full">
        <div className='rounded-full h-10 w-10 overflow-hidden border-2 border-slate-50'>
          <img className='object-cover object-top h-10 w-10' src={`${import.meta.env.VITE_BASE_URL}images/${user.picture}`} alt={`${user} profile picture`} />
        </div>
      </div>
      <div className="flex items-center justify-center h-full w-full">
        { user.user }
      </div>
      <div className="flex items-center justify-center h-full w-full">
        { user.occupation }
      </div>
      <div className="flex items-center justify-center h-full w-full">
        { date }
      </div>
    </div>
  )
}

export default DataGridElement