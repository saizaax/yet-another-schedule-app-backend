import express from "express"

import groupsRoute from "@routes/groups.route"

export const rootRouter = express.Router()

rootRouter.use("/groups", groupsRoute)