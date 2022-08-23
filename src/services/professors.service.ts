import { prisma } from "index"

import { ProfessorBodyRequest } from "@custom-types/professor.types"
import { NotFoundError } from "@utils/AppError"

async function getAll(search?: string) {
  const professors = await prisma.professor.findMany({
    where: {
      name: {
        startsWith: search
      }
    }
  })
  return professors
}

async function getById(id: string) {
  const professor = await prisma.professor.findUnique({
    where: {
      id
    }
  })

  if (!professor) throw new NotFoundError()

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

async function remove(id: string) {
  try {
    await prisma.professor.delete({
      where: {
        id
      }
    })
    return { status: "success" }
  } catch (e) {
    console.log(e)
  }
}

export default { getAll, getById, add, patch, remove }
