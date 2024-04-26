import express, { Express } from "express"
import dotenv from "dotenv"
import indexRouter from "./routes/IndexRoutes"

dotenv.config({
  path: ["./.env", "./.env.local"],
})

const app: Express = express()
const port = process.env.PORT

if (!port) console.error("NO PORT SET")

app.use(express.json())

/**
 * @Routes
 */

app.get("/", indexRouter)

export const server = app.listen(port, () => {
  console.log(`[Server]: I am running at http://localhost:${port}`)
})

export default app
