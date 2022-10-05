import { NextFunction, Request, Response } from "express"

import { fetchSchedule } from "@parser/scheduleParser"

async function post(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await fetchSchedule())
  } catch (err) {
    console.log(err)
    next(err)
  }
}


export default { post }
