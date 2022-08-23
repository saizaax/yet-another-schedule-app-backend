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