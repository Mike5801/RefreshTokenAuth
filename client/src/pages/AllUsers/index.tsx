import React from 'react'
import { useAppSelector } from '../../hooks/hooks'
import { ReadUser } from '../../interfaces/User'

type Props = {}

const AllUsers = (props: Props) => {
  const users: Array<ReadUser> | undefined = useAppSelector((state) => state.general.users)
  console.log(users)
  
  return (
    <div>AllUsers</div>
  )
}

export default AllUsers