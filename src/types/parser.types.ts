import { ClassType, Day } from "@custom-types/class.types"


export type GroupResponse = {
  count: number
  groups: string[]
}

export type ScheduleResponse = {
  group: string
  schedule: {
    1: { lessons: [ScheduleItem[]] }
    2: { lessons: [ScheduleItem[]] }
    3: { lessons: [ScheduleItem[]] }
    4: { lessons: [ScheduleItem[]] }
    5: { lessons: [ScheduleItem[]] }
    6: { lessons: [ScheduleItem[]] }
  }
}

export type ScheduleItem = {
  name: string
  weeks: number[]
  time_start: string
  time_end: string
  types: ClassType
  teachers: string[]
  rooms: string[]
  day: Day
}
