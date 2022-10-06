import express from "express"

import groupsController from "@controllers/groups.controller"
import { verifyToken } from "@middlewares/auth.middleware"

const router = express.Router()

/** Public **/
router.get("/", groupsController.get)
router.get("/:id", groupsController.getById)

/** Protected **/
router.post("/", verifyToken, groupsController.post)
router.patch("/:id", verifyToken, groupsController.patch)
router.delete("/:id", verifyToken, groupsController.remove)

export default router
