import { Request, Response } from "express"

export default function index(req: Request, res: Response) {
  return res.json({
    status: "success",
    message: "Test App: API Service",
  })
}
