import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const signUp = async (req, res) => {
  try {
    const { email, user, password, occupation, birthDate } = req.body
    const { filename } = req.file

    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)
    const date = new Date(birthDate)

    const _user = new User({
      email,
      user,
      password: passwordHash,
      occupation,
      picture: filename,
      birthDate: date,
    })

    await _user.save()

    res.status(201).json({ message: "User created successfully" })

  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export const signIn = async (req, res) => {
  try {
    const { user, password } = req.body
    const _user = await User.findOne({ user: user })
    if (!user) return res.status(404).send({ message: "User does not exist" })

    const isMatch = await bcrypt.compare(password, _user.password)
    if (!isMatch) return res.status(400).send({ message: "Invalid credentials" })

    const token = jwt.sign({
      user: _user.user,
      occupation: _user.occupation,
      picture: _user.picture,
      birthDate: _user.birthDate
    }, process.env.JWT_SECRET, { expiresIn: "10m" })

    const refreshToken = jwt.sign({
      id: _user._id
    }, process.env.JWT_REFRESH, { expiresIn: "1d" })

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000
    })

    res.status(202).json({ token })
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

export const logout = async (req, res) => {
  const refreshToken = req.cookies?.jwt

  if (!refreshToken) return res.status(200).json({ message: "logout successfully" })

  res.clearCookie("jwt", { httpOnly: true, secure: true, sameStie: "None" })

  res.status(200).json({ message: "logout successfully" })
}

export const getToken = async (req, res) => {
  try {
    const refreshToken = req.cookies?.jwt
    
    const decode = jwt.verify(refreshToken, process.env.JWT_REFRESH)

    const { id } = decode

    const user = await User.findById(id)

    const newAccessToken = jwt.sign({
      user: user.user,
      occupation: user.occupation,
      picture: user.picture,
      birthDate: user.birthDate
    }, process.env.JWT_SECRET, { expiresIn: "10m" })

    res.status(200).json({ token: newAccessToken })

  } catch (err) {
    res.status(401).json({ message: err.message })
  }
}
