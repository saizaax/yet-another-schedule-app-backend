import express, { Express, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

import dotenv from "dotenv"

dotenv.config()

const prisma = new PrismaClient()
const app = express()

const port = Number(process.env.PORT) || 3000

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server")
})

app.get("/groups", async (req: Request, res: Response) => {
  const groups = await prisma.group.findMany()
  res.json(groups)
})

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at port: ${port}`)
})
