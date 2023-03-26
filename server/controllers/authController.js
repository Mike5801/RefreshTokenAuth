import User from "../models/User.js"
import bcrypt from "bcrypt"

export const signUp = async (req, res) => {
  try {
    const { email, user, password, occupation, birthDate, picture } = req.body

    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)
    const date = new Date(birthDate)

    const _user = new User({
      email,
      user,
      password: passwordHash,
      occupation,
      picture,
      birthDate: date,
    })

    await _user.save()

    res.status(201).send({ message: "User created successfully" })

  } catch (err) {
    res.status(400).send({ message: err.message })
  }
}