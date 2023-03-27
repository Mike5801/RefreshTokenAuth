import { authClient } from "../api/axios"
import { ReadUser } from "../interfaces/User"

export const getUsers = async (token: string) => {
  try {
    const response: Array<ReadUser> = await authClient({
      url: "users/user",
      method: "GET",
      headers: { "Authorization": `Bearer ${token}` }
    })

    return response

  } catch (error) {
    console.log(error)
  }
}