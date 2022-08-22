import { prisma } from "index"

import { ClassBodyRequest } from "@custom-types/class.types"
import { NotFoundError } from "@utils/AppError"

async function getAll() {
  const classes = await prisma.class.findMany()
  return classes
}

async function getById(id: string) {
  const classResult = await prisma.class.findUnique({
    where: {
      id
    }
  })

  if (!classResult) throw new NotFoundError()

  return classResult
}

async function add(body: ClassBodyRequest) {
  const classResponse = await prisma.class.create({
    data: {
      ...body,
      professor: {
        connectOrCreate: {
          create: {
            name: body.professor
          },
          where: {
            name: body.professor
          }
        }
      },
      group: {
        connectOrCreate: {
          create: {
            name: body.group
          },
          where: {
            name: body.group
          }
        }
      }
    }
  })
  return classResponse
}

async function patch(id: string, body: ClassBodyRequest) {
  const classResponse = await prisma.class.update({
    where: {
      id
    },
    data: {
      ...body,
      professor: {
        connectOrCreate: {
          create: {
            name: body.professor
          },
          where: {
            name: body.professor
          }
        }
      },
      group: {
        connectOrCreate: {
          create: {
            name: body.group
          },
          where: {
            name: body.group
          }
        }
      }
    }
  })
  return classResponse
}

async function remove(id: string) {
  try {
    await prisma.class.delete({
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
