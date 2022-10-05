import express from "express"

import groupsRoute from "@routes/groups.route"
import professorsRoute from "@routes/professors.route"
import classesRoute from "@routes/classes.route"
import scheduleRoute from "@routes/schedule.route"

export const rootRouter = express.Router()

rootRouter.use("/groups", groupsRoute)
rootRouter.use("/professors", professorsRoute)
rootRouter.use("/classes", classesRoute)
rootRouter.use("/schedule", scheduleRoute)