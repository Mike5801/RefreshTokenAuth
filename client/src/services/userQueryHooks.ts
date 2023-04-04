import { ReadUser } from "../interfaces/User"
import useAxiosPrivate from "../hooks/useAxiosPrivate"
import { useEffect, useState } from "react"

export const useGetUsersQuery = () => {
  const privateClient = useAxiosPrivate()
  const [error, setError] = useState<any>(undefined)
  const [data, setData] = useState<Array<ReadUser>>([])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await privateClient<Array<ReadUser>>({
          url: "users/user",
          method: "GET",
        })
    
        setData(response.data)
    
      } catch (error) {
        setError(error)
      }
    }

    getUsers()
  }, [])

  return { data, error }
}