import express from "express"

import professorsController from "@controllers/professors.controller"

const router = express.Router()

router.get("/", professorsController.get)
router.post("/", professorsController.post)
router.get("/:id", professorsController.getById)
router.patch("/:id", professorsController.patch)
router.delete("/:id", professorsController.remove)

export default router
