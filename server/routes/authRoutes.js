import express from "express"
import { getToken, logout, signIn, signUp } from "../controllers/authController.js"

const router = express.Router()

router.post("/sign-up", signUp)

router.post("/sign-in", signIn)

router.get("/logout", logout)

router.get("/refresh", getToken)


export default router