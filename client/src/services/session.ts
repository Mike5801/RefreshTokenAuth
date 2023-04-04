import { axiosPublic, axiosAuth } from "../api/axios"
import { SignIn, SignUp, SessionResponse } from "../interfaces/Auth"

export const signUp = async (data: SignUp) => {
  const { user, password, occupation, email, image, birthDate } = data
  const formData = new FormData()
  
  if (image) {
    formData.append("image", image[0])
  }

  const birth = birthDate.toString()
  
  formData.append("user", user)
  formData.append("password", password)
  formData.append("occupation", occupation)
  formData.append("email", email)
  formData.append("birthDate", birth)
  
  try {
    const response = await axiosPublic({
      url: "auth/sign-up",
      method: "POST",
      data: formData,
      headers: {"Content-Type": "multipart/form-data"}
    })

    return response.data

  } catch (error) {
    console.log(error)
  }
}

export const signIn = async (data: SignIn) => {
  try {
    const response = await axiosPublic<SessionResponse>({
      url: "auth/sign-in",
      method: "POST",
      data: data,
      withCredentials: true
    })

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getNewToken = async () => {
  try {
    const response = await axiosAuth<SessionResponse>({
      url: "auth/refresh",
      method: "GET",
      withCredentials: true
    })

    return response.data

  } catch (error) {
    console.log(error)
  }
}


