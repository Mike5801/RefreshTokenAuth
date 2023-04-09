import React from 'react'
import Card from '../../components/Card'


type Props = {}

function MyProfile({}: Props) {
  
  
  return (
    <div className='box-border w-full h-full flex justify-center items-center overflow-hidden'>
      <div className='w-[30rem] h-[80%]'>
        <Card />
      </div>
    </div>
  )
}

export default MyProfile