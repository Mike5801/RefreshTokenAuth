import React, { ReactNode } from 'react'
import { useAppSelector } from '../hooks' 

type Props = {}

const Card = (props: Props) => {
  const user = useAppSelector((state) => state.auth.user)
  const occupation = useAppSelector((state) => state.auth.occupation)
  const picture = useAppSelector((state) => state.auth.picture)
  const birthDate = useAppSelector((state) => state.auth.birthDate) as ReactNode

  return (
    <div className='w-[26rem] h-3/4 gap-6 flex flex-col items-center rounded-2xl p-8 border border-gray-10000 shadow-2xl'> 
      <div className='rounded-full h-24 w-24 overflow-hidden'>
        <img src={`${import.meta.env.VITE_BASE_URL}images/${picture}`} alt="" />
      </div>
      <h1 className='text-2xl font-bold'>{ user }</h1>
      <p className='text-lg'>Occupation: { occupation }</p>
      <p className='text-lg'>Date of birth: { birthDate }</p>
    </div>
  )
}

export default Card