import React, { ReactNode } from 'react'
import { useAppSelector } from '../hooks/hooks' 

type Props = {}

const Card = (props: Props) => {
  const user = useAppSelector((state) => state.auth.user)
  const occupation = useAppSelector((state) => state.auth.occupation)
  const picture = useAppSelector((state) => state.auth.picture)
  const birthDate = useAppSelector((state) => state.auth.birthDate) as ReactNode
  const date = birthDate?.toString().split("T")[0].replaceAll("-", "/")

  return (
    <div className='w-[26rem] h-[65%] gap-6 flex flex-col items-center justify-center rounded-2xl p-8 border border-gray-500 bg-slate-600 shadow-2xl'> 
      <div className='rounded-full h-40 w-40 overflow-hidden border-4 border-slate-50'>
        <img src={`${import.meta.env.VITE_BASE_URL}images/${picture}`} alt={`${user} profile picture`} />
      </div>
      <h1 className='text-xl font-bold text-slate-50'>{ user }</h1>
      <p className='text-md text-slate-50'>Occupation: { occupation }</p>
      <p className='text-md text-slate-50'>Date of birth: { date }</p>
    </div>
  )
}

export default Card