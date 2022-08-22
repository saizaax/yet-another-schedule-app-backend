import express from "express"

import classesController from "@controllers/classes.controller"

const router = express.Router()

router.get("/", classesController.get)
router.get("/:id", classesController.getById)
router.post("/", classesController.post)
router.patch("/:id", classesController.patch)

export default router
