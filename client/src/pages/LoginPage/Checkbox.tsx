import React, { useEffect } from 'react'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { setPersist } from '../../features/authSlice'


type Props = {
  name: string,
  label: string,
  persist: boolean,
}

const Checkbox = ({ name, label, persist }: Props) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    localStorage.setItem("persist", persist as unknown as string)
  }, [persist])

  return (
    <div className='flex w-full gap-2'>
      <input
        className='text-sm rounded-md w-4 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 focus:outline-none placeholder:text-sm'
        id={ name }
        type="checkbox"
        onChange={() => {
          dispatch(setPersist())
        }}
        checked={ persist }
      />
      <label className='text-sm font-semibold' htmlFor={ name }>{ label }</label>
      
    </div>
  )
}

export default Checkbox