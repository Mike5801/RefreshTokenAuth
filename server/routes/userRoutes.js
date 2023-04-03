import express from "express"
import { getUsers } from "../controllers/userController.js"
import { verifyToken } from "../middlewares/tokenVerifier.js"

const router = express.Router()

router.get("/user", verifyToken , getUsers)

export default router