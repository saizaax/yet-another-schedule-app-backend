import express from "express"

import scheduleController from "@controllers/schedule.controller"

const router = express.Router()

router.post("/", scheduleController.post)

export default router
