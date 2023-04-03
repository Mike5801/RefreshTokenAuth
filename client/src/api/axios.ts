import axios from "axios"
import { useAppSelector, useAppDispatch } from "../hooks"
import { getNewToken } from "../services/session"
import { SessionResponse } from "../interfaces/Auth"
import { store } from "../store"
import { authSlice } from "../features/authSlice"

const token = store.getState().auth.token

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
      const newAccessToken: SessionResponse | undefined  = await getNewToken()
      store.dispatch(authSlice.actions.setToken(newAccessToken?.token))
      authClient.defaults.headers.common["Authorization"] = `Bearer ${token}`
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