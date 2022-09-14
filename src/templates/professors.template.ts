import { ClassResponse, Day } from "@custom-types/class.types"
import {
  Professor,
  ProfessorClasses,
  ProfessorResponse,
  ProfessorSchedule
} from "@custom-types/professor.types"
import { getShortDay } from "@utils/dateFormat"

export const formatProfessors = (items: ProfessorResponse[]) => {
  return items.map((item) => ({
    id: item.id,
    name: item.name,
    locations: Array.from(new Set(item.classes.map((i) => i.location))),
    days: Array.from(
      new Set(item.classes.map((i) => getShortDay(i.day as Day)))
    )
  }))
}

const formatClass = (item: ClassResponse): ProfessorClasses => ({
  id: item.id,
  subject: item.name,
  location: item.location,
  timeStart: item.timeStart,
  timeEnd: item.timeEnd,
  index: item.index,
  type: item.type === "LECTURE" ? "Лекция" : "Практика",
  weeks: item.weeks
})

const formatClasses = (items: ClassResponse[]) => {
  let schedule: ProfessorSchedule = {
    MONDAY: {
      day: "Понедельник",
      dayShort: "ПН",
      classes: []
    },
    TUESDAY: {
      day: "Вторник",
      dayShort: "ВТ",
      classes: []
    },
    WEDNESDAY: {
      day: "Среда",
      dayShort: "СР",
      classes: []
    },
    THURSDAY: {
      day: "Четверг",
      dayShort: "ЧТ",
      classes: []
    },
    FRIDAY: {
      day: "Пятница",
      dayShort: "ПТ",
      classes: []
    },
    SATURDAY: {
      day: "Суббота",
      dayShort: "СБ",
      classes: []
    }
  }

  items.forEach((item) => {
    const day = <Day>item.day
    schedule[day].classes.push(formatClass(item))
  })

  return schedule
}

export const formatProfessor = (item: ProfessorResponse) => {
  return {
    id: item.id,
    name: item.name,
    locations: Array.from(new Set(item.classes.map((item) => item.location))),
    days: Array.from(
      new Set(item.classes.map((item) => getShortDay(item.day as Day)))
    ),
    schedule: formatClasses(item.classes)
  }
}
