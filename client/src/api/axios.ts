import axios from "axios"
import { setToken } from "../features/authSlice"
import { useAppSelector, useAppDispatch } from "../hooks"
import { getRefreshToken } from "../services/session"

const token = useAppSelector((state) => state.auth.token)
const dispatch = useAppDispatch()

export const publicClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

export const authClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { "Authorization": `Bearer ${token}` }
})

authClient.interceptors.response.use(
  response => response,
  async error => {
    const { config } = error
    if (error.response.status === 403 && !config.retry) {
      config.retry = true
      const newAccessToken: string | undefined  = await getRefreshToken()
      dispatch(setToken(newAccessToken))
      return authClient(config)
    }
    return error
  }
)

export const privateClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true
})

privateClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      window.location.href = "/"
    }
  }
)