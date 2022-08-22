import express from "express"

import groupsController from "@controllers/groups.controller"

const router = express.Router()

router.get("/", groupsController.get)
router.post("/", groupsController.post)
router.get("/:id", groupsController.getById)
router.patch("/:id", groupsController.patch)
router.delete("/:id", groupsController.remove)

export default router
