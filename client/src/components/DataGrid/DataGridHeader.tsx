import React from 'react'

type Props = {
  title: string,
}

const DataGridHeader = ({ title }: Props) => {
  return (
    <th>
      { title }
    </th>
  )
}

export default DataGridHeader