import User from "../models/User.js"

export const getUsers = async (req, res) => {
  try {
    const response = await User.find()

    const formattedResponse = response.map((user) => {
      const formatUser = user.toJSON()
      delete formatUser.password
      delete formatUser.createdAt
      delete formatUser.updatedAt
      delete formatUser["__v"]
      delete formatUser._id
      delete formatUser.email
      return formatUser
    })

    res.status(200).json(formattedResponse)
    
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}