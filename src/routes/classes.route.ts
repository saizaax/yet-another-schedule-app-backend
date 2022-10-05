import express from "express"

import classesController from "@controllers/classes.controller"

const router = express.Router()

router.get("/all", classesController.getAll)
router.get("/", classesController.get)
router.post("/", classesController.post)
router.get("/:id", classesController.getById)
router.patch("/:id", classesController.patch)
router.delete("/:id", classesController.remove)

export default router
