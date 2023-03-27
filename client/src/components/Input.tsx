import React from 'react'
import { useFormContext } from "react-hook-form"

type Props = {
  type: string,
  name: string,
  label: string,
  placeholder: string,
  required: boolean | undefined
}

const Input = ({ type, name, label, placeholder, required }: Props) => {
  const { register } = useFormContext()

  return (
    <div className='flex flex-col w-full gap-1'>
      <label className='text-sm font-semibold' htmlFor="name">{ label }</label>
      <input
        className='w-full text-sm rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 focus:outline-none placeholder:text-sm' 
        {...register(name)} type={ type } id={ name } name={ name } placeholder={ placeholder } required={ required }
      />
    </div>
  )
}

export default Input