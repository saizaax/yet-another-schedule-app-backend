import { prisma } from "index"
import { API } from "@parser/config"
import {
  getLocation,
  getSubjectIndexByTimeStart,
  getSubjectType,
  getWeekDayByIndex
} from "@parser/helpers"

import { ClassBodyRequest } from "@custom-types/class.types"
import { ScheduleItem } from "@custom-types/parser.types"
import { NotFoundError } from "@utils/AppError"

export const fetchSchedule = async () => {
  try {
    await prisma.class.deleteMany({})
    await prisma.professor.deleteMany({})
    await prisma.group.deleteMany({})

    const groupsResponse = await API.get("/schedule/groups")
    if (groupsResponse.status !== 200) return

    const { groups } = groupsResponse.data

    for (const group of groups) {
      const groupURI = encodeURIComponent(group)
      const schedule = await API.get(`/schedule/${groupURI}/full_schedule`)

      if (schedule.status !== 200) return

      const s = schedule.data.schedule
      let raw: ScheduleItem[] = []

      for (const dayIndex in s) {
        const day = getWeekDayByIndex(Number(dayIndex))
        const { lessons } = s[dayIndex]

        const flatLessons = []
          .concat(...lessons)
          .map((item: ScheduleItem) => ({ ...item, day: day }))

        raw = [...raw, ...flatLessons]
      }

      const results: ClassBodyRequest[] = raw.map((item: ScheduleItem) => {
        const {
          name,
          weeks,
          day,
          time_start: timeStart,
          time_end: timeEnd
        } = item

        const type = getSubjectType(item.types)
        const location = getLocation(item.rooms)
        const index = getSubjectIndexByTimeStart(timeStart)
        const professor = item.teachers.join(", ")

        return {
          type,
          day,
          name,
          location,
          timeStart,
          timeEnd,
          professor,
          index,
          weeks,
          group
        }
      })

      for (const item of results) {
        await prisma.class.create({
          data: {
            ...item,
            professor: {
              connectOrCreate: {
                create: {
                  name: item.professor
                },
                where: {
                  name: item.professor
                }
              }
            },
            group: {
              connectOrCreate: {
                create: {
                  name: item.group
                },
                where: {
                  name: item.group
                }
              }
            }
          }
        })
      }
    }
    return { status: "success" }
  } catch (e) {
    throw new NotFoundError()
  }
}
