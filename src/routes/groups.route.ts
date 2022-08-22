import express from "express"

import groupsController from "@controllers/groups.controller"

const router = express.Router()

router.get("/", groupsController.get)
router.get("/:id", groupsController.getById)
router.post("/", groupsController.post)

export default router
