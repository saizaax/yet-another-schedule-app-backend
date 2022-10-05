import express from "express"
import { PrismaClient } from "@prisma/client"

import dotenv from "dotenv"

import { rootRouter } from "@routes/index"
import { errorHandler } from "@middlewares/errors.middleware"

import { initScheduleAutoRefetch } from "src/cron/updateSchedule"

/** Environment **/
dotenv.config()

/** Initialization **/
export const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use("/api", rootRouter)

/** Middlewares **/
app.use(errorHandler)

/** CRON job to refetch schedule **/
initScheduleAutoRefetch()

const port = Number(process.env.PORT) || 3000

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at port: ${port}`)
})
