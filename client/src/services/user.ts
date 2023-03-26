import { authClient } from "../api/axios"
import { ReadUser } from "../interfaces/User"

export const getUsers = async () => {
  try {
    const response: Array<ReadUser> = await authClient({
      url: "users/user",
      method: "GET",
    })

    return response

  } catch (error) {
    console.log(error)
  }
}