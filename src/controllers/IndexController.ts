import { Request, Response } from "express"

export default function index(req: Request, res: Response) {
  return res.status(200).json({
    status: "success",
    message: "Test App: API Service",
  })
}
