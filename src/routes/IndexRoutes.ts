import { Router } from "express"
import index from "../controllers/IndexController"

const indexRouter = Router()

indexRouter.get("/", index)

export default indexRouter
