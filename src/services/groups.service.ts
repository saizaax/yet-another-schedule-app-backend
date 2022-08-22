import { prisma } from "index"

import { GroupBodyRequest } from "@custom-types/group.types"

async function getAll() {
  const groups = await prisma.group.findMany()
  return groups
}

async function getById(id: string) {
  const group = await prisma.group.findUnique({
    where: {
      id
    }
  })
  return group
}

async function add(body: GroupBodyRequest) {
  const group = await prisma.group.create({
    data: body
  })
  return group
}

async function patch(id: string, body: GroupBodyRequest) {
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
