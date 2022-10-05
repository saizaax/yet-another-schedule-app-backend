import { NextFunction, Request, Response } from "express"

import classes from "@services/classes.service"
import { ClassRequest } from "@custom-types/class.types"

async function getAll(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    res.json(await classes.get())
  } catch (err) {
    console.log(err)
    next(err)
  }
}

async function get(
  req: Request<never, never, ClassRequest, never>,
  res: Response,
  next: NextFunction
) {
  const { group, week, type }: ClassRequest = req.query

  try {
    res.json(await classes.getAll(group, week, type))
  } catch (err) {
    console.log(err)
    next(err)
  }
}

async function getById(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await classes.getById(req.params.id))
  } catch (err) {
    console.log(err)
    next(err)
  }
}

async function post(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await classes.add(req.body))
  } catch (err) {
    console.log(err)
    next(err)
  }
}

async function patch(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await classes.patch(req.params.id, req.body))
  } catch (err) {
    console.log(err)
    next(err)
  }
}

async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await classes.remove(req.params.id))
  } catch (err) {
    console.log(err)
    next(err)
  }
}

export default { getAll, get, getById, post, patch, remove }
