import { publicClient, privateClient } from "../api/axios"
import { SignIn, SignUp, SessionResponse } from "../interfaces/Auth"

export const signUp = async (data: SignUp) => {
  try {
    const response = await publicClient({
      url: "auth/sign-up",
      method: "POST",
      data: data
    })

    console.log(response)

  } catch (error) {
    console.log(error)
  }
}

export const signIn = async (data: SignIn) => {
  try {
    const response: SessionResponse = await publicClient({
      url: "auth/sign-in",
      method: "POST",
      data: data
    })

    console.log(response)

    return response
  } catch (error) {
    console.log(error)
  }
}

export const getNewToken = async () => {
  try {
    const response: SessionResponse = await privateClient({
      url: "auth/refresh",
      method: "GET"
    })

    console.log(response)

    return response

  } catch (error) {
    console.log(error)
  }
}


