import axios from "axios"

export const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

export const axiosAuth = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true
})