import { useAppSelector, useAppDispatch } from '../../hooks'
import { setUsers } from '../../features/generalSlice'
import { getUsers } from '../../services/user'
import { useEffect } from "react"

type Props = {}

const HomePage = (props: Props) => {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    getUsers()
    .then((response) => {
      dispatch(setUsers(response))
    })
  }, [])

  const user = useAppSelector((state) => state.auth.user)

  return (
    <div>
      <h1 className='text-xl font-bold'>Welcome back, { user }</h1>
    </div>
  )
}

export default HomePage