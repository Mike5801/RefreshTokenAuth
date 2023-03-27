import { publicClient, privateClient } from "../api/axios"
import { SignIn, SignUp, SessionResponse } from "../interfaces/Auth"

export const signUp = async (data: SignUp) => {
  try {
    const response = await publicClient({
      url: "auth/sign-up",
      method: "POST",
      data: data
    })

    return response.data

  } catch (error) {
    console.log(error)
  }
}

export const signIn = async (data: SignIn) => {
  try {
    const response = await publicClient<SessionResponse>({
      url: "auth/sign-in",
      method: "POST",
      data: data
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getNewToken = async () => {
  try {
    const response = await privateClient<SessionResponse>({
      url: "auth/refresh",
      method: "GET"
    })

    return response.data

  } catch (error) {
    console.log(error)
  }
}


