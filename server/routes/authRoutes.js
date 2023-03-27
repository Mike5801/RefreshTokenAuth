import express from "express"
import { getToken, signIn, signUp } from "../controllers/authController.js"

const router = express.Router()

router.post("/sign-up", signUp)

router.post("/sign-in", signIn)

router.post("/refresh", getToken)

export default router