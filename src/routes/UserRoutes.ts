import { Router } from "express"
import getUsers from "../controllers/UserController"

const userRouter = Router()

userRouter.get("/", getUsers)

export default userRouter
