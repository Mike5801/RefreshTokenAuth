import jwt_decode from "jwt-decode"
import { useAppDispatch } from './reduxHooks'
import { ReadUser } from '../interfaces/User'
import { setUser } from '../features/authSlice'

const useUser = () => {

  const dispatch = useAppDispatch()

  const user = (token: string) => {
    try{
      const userInfo: ReadUser = jwt_decode(token)
      dispatch(setUser(userInfo))
    } catch (err) {
      return Promise.reject(err)
    }
  }
   
  return user
}

export default useUser