import express from "express"

import scheduleController from "@controllers/schedule.controller"
import { verifyToken } from "@middlewares/auth.middleware"

const router = express.Router()

/** Protected **/
router.post("/", verifyToken, scheduleController.post)

export default router
