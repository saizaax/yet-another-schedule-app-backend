import express from "express"

import classesController from "@controllers/classes.controller"
import { verifyToken } from "@middlewares/auth.middleware"

const router = express.Router()

/** Protected **/
router.get("/all", verifyToken, classesController.getAll)
router.post("/", verifyToken, classesController.post)
router.patch("/:id", verifyToken, classesController.patch)
router.delete("/:id", verifyToken, classesController.remove)

/** Public **/
router.get("/", classesController.get)
router.get("/:id", classesController.getById)

export default router
