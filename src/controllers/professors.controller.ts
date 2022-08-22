import { NextFunction, Request, Response } from "express"

import professors from "@services/professors.service"

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await professors.getAll())
  } catch (err) {
    console.log(err)
    next(err)
  }
}

async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await professors.getById(req.params.id))
  } catch (err) {
    console.log(err)
    next(err)
  }
}

async function post(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await professors.add(req.body))
  } catch (err) {
    console.log(err)
    next(err)
  }
}

async function patch(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await professors.patch(req.params.id, req.body))
  } catch (err) {
    console.log(err)
    next(err)
  }
}

export default { get, getById, post, patch }
