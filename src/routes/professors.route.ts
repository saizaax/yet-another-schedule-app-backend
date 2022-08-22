import express from "express"

import professorsController from "@controllers/professors.controller"

const router = express.Router()

router.get("/", professorsController.get)
router.get("/:id", professorsController.getById)
router.post("/", professorsController.post)
router.patch("/:id", professorsController.patch)

export default router
