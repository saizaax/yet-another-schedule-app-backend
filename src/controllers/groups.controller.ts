import { NextFunction, Request, Response } from "express"

import groups from "@services/groups.service"
import { GroupRequest } from "@custom-types/group.types"

async function get(
  req: Request<never, never, GroupRequest, never>,
  res: Response,
  next: NextFunction
) {
  const { search }: GroupRequest = req.query

  try {
    res.json(await groups.getAll(search))
  } catch (err) {
    console.log(err)
    next(err)
  }
}

async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await groups.getById(req.params.id))
  } catch (err) {
    console.log(err)
    next(err)
  }
}

async function post(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await groups.add(req.body))
  } catch (err) {
    console.log(err)
    next(err)
  }
}

async function patch(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await groups.patch(req.params.id, req.body))
  } catch (err) {
    console.log(err)
    next(err)
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await groups.remove(req.params.id))
  } catch (err) {
    console.log(err)
    next(err)
  }
}

export default { get, getById, post, patch, remove }
