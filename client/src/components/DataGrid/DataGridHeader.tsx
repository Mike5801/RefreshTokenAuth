import React from 'react'

type Props = {
  title: string,
}

const DataGridHeader = ({ title }: Props) => {
  return (
    <div 
      className="flex items-center justify-center h-full w-full font-bold text-lg"
    >
      { title }
    </div>
  )
}

export default DataGridHeader