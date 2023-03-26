import { publicClient, privateClient } from "../api/axios"
import { SignIn, SignUp } from "../interfaces/Auth"

export const signUp = async (data: SignUp) => {
  try {
    await publicClient({
      url: "auth/sign-up",
      method: "POST",
      data: data
    })

  } catch (error) {
    console.log(error)
  }
}

export const signIn = async (data: SignIn) => {
  try {
    const response = await publicClient({
      url: "auth/sign-in",
      method: "POST",
      data: data
    })

    console.log(response)

    // return response
  } catch (error) {
    console.log(error)
  }
}

export const getRefreshToken = async () => {
  try {
    const response:string = await privateClient({
      url: "auth/refresh",
      method: "GET"
    })

    console.log(response)

    return response

  } catch (error) {
    console.log(error)
  }
}


