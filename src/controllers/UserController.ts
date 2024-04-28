import { Request, Response } from "express"
import { getUsersService } from "../services/UsersService"

export default async function getUsers(req: Request, res: Response) {
  const users = await getUsersService()
  return res.status(200).json(users)
}
