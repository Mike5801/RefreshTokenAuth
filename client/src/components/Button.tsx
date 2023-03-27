import React from 'react'

type Props = {
  text: string
}

const Button = ({ text }: Props) => {
  return (
    <div className='w-full mt-2'>
      <button type="submit" className='bg-slate-700 text-white h-full w-full rounded-md py-1 hover:bg-slate-800' >{ text }</button>
    </div>
  )
}

export default Button