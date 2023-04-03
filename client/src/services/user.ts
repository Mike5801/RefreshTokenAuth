import { authClient } from "../api/axios"
import { ReadUser } from "../interfaces/User"

export const getUsers = async () => {
  try {
    const response = await authClient<Array<ReadUser>>({
      url: "users/user",
      method: "GET",
    })

    return response.data

  } catch (error) {
    console.log(error)
  }
}