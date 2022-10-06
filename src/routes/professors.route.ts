import express from "express"

import professorsController from "@controllers/professors.controller"
import { verifyToken } from "@middlewares/auth.middleware"

const router = express.Router()

/** Public **/
router.get("/", professorsController.get)
router.get("/:id", professorsController.getById)

/** Protected **/
router.post("/", verifyToken, professorsController.post)
router.patch("/:id", verifyToken, professorsController.patch)
router.delete("/:id", verifyToken, professorsController.remove)

export default router
