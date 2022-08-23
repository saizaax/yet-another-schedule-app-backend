import { prisma } from "index"

import { GroupBodyRequest } from "@custom-types/group.types"
import { NotFoundError } from "@utils/AppError"

async function getAll(search?: string) {
  const groups = await prisma.group.findMany({
    where: {
      name: {
        startsWith: search
      }
    }
  })
  return groups
}

async function getById(id: string) {
  const group = await prisma.group.findUnique({
    where: {
      id
    }
  })

  if (!group) throw new NotFoundError()

  return group
}

async function add(body: GroupBodyRequest) {
  const group = await prisma.group.create({
    data: body
  })
  return group
}

async function patch(id: string, body: GroupBodyRequest) {
  const group = await prisma.group.update({
    where: {
      id
    },
    data: {
      name: body.name
    }
  })
  return group
}

async function remove(id: string) {
  try {
    await prisma.group.delete({
      where: {
        id
      }
    })
    return { status: "success" }
  } catch (e) {
    throw new NotFoundError()
  }
}

export default { getAll, getById, add, patch, remove }
