import { ClassResponse } from "@custom-types/class.types"

export type Professor = {
  id: string
  name: string
}

export type ProfessorRequest = {
  search?: string
}

export type ProfessorBodyRequest = {
  name: string
}

export type ProfessorResponse = {
  id: string
  name: string
  classes: ClassResponse[]
}

export type ProfessorClasses = {
  id: string
  subject: string
  location: string
  timeStart: string
  timeEnd: string
  index: number
  type: string
  weeks: number[]
}

export type ProfessorSchedule = {
  MONDAY: {
    day: "Понедельник"
    dayShort: "ПН"
    classes: ProfessorClasses[]
  }
  TUESDAY: {
    day: "Вторник"
    dayShort: "ВТ"
    classes: ProfessorClasses[]
  }
  WEDNESDAY: {
    day: "Среда"
    dayShort: "СР"
    classes: ProfessorClasses[]
  }
  THURSDAY: {
    day: "Четверг"
    dayShort: "ЧТ"
    classes: ProfessorClasses[]
  }
  FRIDAY: {
    day: "Пятница"
    dayShort: "ПТ"
    classes: ProfessorClasses[]
  }
  SATURDAY: {
    day: "Суббота"
    dayShort: "СБ"
    classes: ProfessorClasses[]
  }
}
