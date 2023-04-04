import axios from "axios"
import { getNewToken } from "../services/session"
import { useAppDispatch } from "./hooks"
import { setToken } from "../features/authSlice"

const useRefreshToken = () => {
  const dispatch = useAppDispatch()

  const refresh = async () => {
    const response = await getNewToken()
    
    dispatch(setToken(response?.token))

    return response?.token
  }

  return refresh
}

export default useRefreshToken