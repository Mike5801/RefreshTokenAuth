import axios from "axios"
import { setToken } from "../features/authSlice"
import { useAppSelector, useAppDispatch } from "../hooks"
import { getNewToken } from "../services/session"
import { SessionResponse } from "../interfaces/Auth"

export const publicClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

export const authClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
})

authClient.interceptors.response.use(
  response => response,
  async error => {
    const { config } = error
    if (error.response.status === 403 && !config.retry) {
      config.retry = true
      const newAccessToken: SessionResponse | undefined  = await getNewToken()
      authClient.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`
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