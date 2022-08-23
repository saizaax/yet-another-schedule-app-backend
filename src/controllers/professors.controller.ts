import { NextFunction, Request, Response } from "express"

import professors from "@services/professors.service"
import { ProfessorRequest } from "@custom-types/professor.types"

async function get(
  req: Request<never, never, ProfessorRequest, never>,
  res: Response,
  next: NextFunction
) {
  const { search }: ProfessorRequest = req.query
  
  try {
    res.json(await professors.getAll(search))
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

async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await professors.remove(req.params.id))
  } catch (err) {
    console.log(err)
    next(err)
  }
}

export default { get, getById, post, patch, remove }
