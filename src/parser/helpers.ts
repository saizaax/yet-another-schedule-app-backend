import { ClassType, Day } from "@custom-types/class.types"

export const getWeekDayByIndex = (index: number) => {
  const days = [
    Day.MONDAY,
    Day.TUESDAY,
    Day.WEDNESDAY,
    Day.THURSDAY,
    Day.FRIDAY,
    Day.SATURDAY
  ]

  return days[index - 1]
}

export const getSubjectType = (type: string): ClassType => {
  if (type === "лек") return ClassType.LECTURE
  if (type === "пр") return ClassType.PRACTICE
  if (type === "лаб") return ClassType.LAB

  return ClassType.PRACTICE
}

export const getLocation = (locations: string[]) => {
  return locations
    .map((item: string) => item.replace(/комп.\s|ауд.\s/gm, "").toUpperCase())
    .join(", ")
}

export const getSubjectIndexByTimeStart = (time: string) => {
  if (time === "9:00") return 1
  if (time === "10:40") return 2
  if (time === "12:40") return 3
  if (time === "14:20") return 4
  if (time === "16:20") return 5
  if (time === "18:00") return 6

  return 0
}