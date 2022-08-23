import { Professor } from "@custom-types/professor.types"
import { Group } from "@custom-types/group.types"

export enum ClassType {
  LECTURE = "LECTURE",
  PRACTICE = "PRACTICE"
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
