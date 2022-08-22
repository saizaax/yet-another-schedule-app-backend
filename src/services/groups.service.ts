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
  console.log(body)
  const group = await prisma.group.create({
    data: body
  })
  return group
}

export default { getAll, getById, add }
