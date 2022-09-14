import { prisma } from "index"

import {
  ProfessorBodyRequest,
  ProfessorResponse
} from "@custom-types/professor.types"
import { NotFoundError } from "@utils/AppError"
import {
  formatProfessor,
  formatProfessors
} from "@templates/professors.template"

async function getAll(search?: string) {
  const professors = await prisma.professor.findMany({
    where: {
      name: {
        startsWith: search
      }
    },
    include: {
      classes: true
    }
  })
  return formatProfessors(professors as ProfessorResponse[])
}

async function getById(id: string) {
  const professor = await prisma.professor.findUnique({
    where: {
      id
    },
    include: {
      classes: {
        include: {
          group: true
        }
      }
    }
  })

  if (!professor) throw new NotFoundError()

  return formatProfessor(professor as ProfessorResponse)
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
