import { axiosAuth } from "../api/axios";
import { useEffect } from "react";
import { useRefreshTokenQuery } from "../services/sessionQueryHooks";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "./hooks";

const useAxiosPrivate = () => {
  const refresh = useRefreshTokenQuery()
  const token = useAppSelector((state) => state.auth.token)
  const navigate = useNavigate()

  useEffect(() => {
    const requestIntercept = axiosAuth.interceptors.request.use(
      config => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${token}`
        }
        return config
      },
      (err) => Promise.reject(err)
    )

    const responseIntercept = axiosAuth.interceptors.response.use(
      response => response,
      async (err) => {
        const prevReq = err?.config
        if (err?.response?.status === 403 && !prevReq?.retry) {
          prevReq.retry = true
          const newAccessToken = await refresh()
          prevReq.headers["Authorization"] = `Bearer ${newAccessToken}`
          return axiosAuth(prevReq)
        }
        navigate("/")
        return Promise.reject(err)
      }
    )

    return () => {
      axiosAuth.interceptors.request.eject(requestIntercept)
      axiosAuth.interceptors.response.eject(responseIntercept)
    }
  }, [token, refresh])

  return axiosAuth
}

export default useAxiosPrivate