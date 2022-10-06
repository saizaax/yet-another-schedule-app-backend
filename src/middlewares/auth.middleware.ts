import { NextFunction, Request, Response } from "express"

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers ? req.headers.authorization : null
  const bearerToken = authHeader ? authHeader.split(" ")[1] : null

  if (!bearerToken || bearerToken !== process.env.SECRET_TOKEN) {
    return res.status(403).send({ message: "Access denied!" })
  }

  next()
}
