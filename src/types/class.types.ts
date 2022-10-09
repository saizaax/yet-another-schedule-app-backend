import { Professor } from "@custom-types/professor.types"
import { Group } from "@custom-types/group.types"

export enum ClassType {
  LECTURE = "LECTURE",
  PRACTICE = "PRACTICE",
  LAB = "LAB",
}

export enum Day {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY"
}

export type Class = {
  id: string
  type: ClassType
  day: Day
  name: string
  location: string
  timeStart: string
  timeEnd: string
  professor: Professor
  professorId: string
  index: number
  weeks: number[]
  group: Group
  groupId: string
}

export type ClassRequest = {
  group?: string
  week?: string
  type?: ClassType
}

export type ClassBodyRequest = {
  type: ClassType
  day: Day
  name: string
  location: string
  timeStart: string
  timeEnd: string
  professor: string
  index: number
  weeks: number[]
  group: string
}

export type ClassResponse = {
  id: string
  type: string
  day: string
  name: string
  location: string
  timeStart: string
  timeEnd: string
  professor: Professor
  professorId: string
  index: number
  weeks: number[]
  groupId: string
  group?: Group
}

export type ClassResult = {
  id: string
  subject: string
  professor: string
  location: string
  timeStart: string
  timeEnd: string
  index: number
  type: string
  weeks: number[]
}

export type ClassesTemplate = {
  schedule: {
    MONDAY: {
      day: "Понедельник"
      dayShort: "ПН"
      classes: ClassResult[]
    }
    TUESDAY: {
      day: "Вторник"
      dayShort: "ВТ"
      classes: ClassResult[]
    }
    WEDNESDAY: {
      day: "Среда"
      dayShort: "СР"
      classes: ClassResult[]
    }
    THURSDAY: {
      day: "Четверг"
      dayShort: "ЧТ"
      classes: ClassResult[]
    }
    FRIDAY: {
      day: "Пятница"
      dayShort: "ПТ"
      classes: ClassResult[]
    }
    SATURDAY: {
      day: "Суббота"
      dayShort: "СБ"
      classes: ClassResult[]
    }
  }
}
