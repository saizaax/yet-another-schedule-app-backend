import express from "express"

import groupsController from "@controllers/groups.controller"
import { verifyToken } from "@middlewares/auth.middleware"

const router = express.Router()

/** Protected **/
router.post("/", verifyToken, groupsController.post)
router.patch("/:id", verifyToken, groupsController.patch)
router.delete("/:id", verifyToken, groupsController.remove)

/** Public **/
router.get("/", groupsController.get)
router.get("/:id", groupsController.getById)

export default router
