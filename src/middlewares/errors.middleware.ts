import { NextFunction, Request, Response } from "express"
import { AppError } from "@utils/AppError"

export const errorHandler = (
  error: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`⚠️ [Error]: ${error.message}`)

  const status = error.statusCode || 500
  const message = status === 500 ? "Internal Server Error" : error.message

  res.status(status).send({ error: message })
}
