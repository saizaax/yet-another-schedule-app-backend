import { prisma } from "index"

import { ProfessorBodyRequest } from "@custom-types/professor.types"

async function getAll() {
  const professors = await prisma.professor.findMany()
  return professors
}

async function getById(id: string) {
  const professor = await prisma.professor.findUnique({
    where: {
      id
    }
  })
  return professor
}

async function add(body: ProfessorBodyRequest) {
  const professor = await prisma.professor.create({
    data: body
  })
  return professor
}

async function patch(id: string, body: ProfessorBodyRequest) {
  const professor = await prisma.professor.update({
    where: {
      id
    },
    data: {
      name: body.name
    }
  })
  return professor
}

export default { getAll, getById, add, patch }
