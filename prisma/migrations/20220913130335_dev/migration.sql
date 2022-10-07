-- CreateEnum
CREATE TYPE "ClassType" AS ENUM ('LECTURE', 'PRACTICE');

-- CreateEnum
CREATE TYPE "Day" AS ENUM ('MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY');

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" TEXT NOT NULL,
    "type" "ClassType" NOT NULL,
    "day" "Day" NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "timeStart" TEXT NOT NULL,
    "timeEnd" TEXT NOT NULL,
    "professorId" TEXT NOT NULL,
    "index" INTEGER NOT NULL,
    "weeks" INTEGER[],
    "groupId" TEXT NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Professor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Group_name_key" ON "Group"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_name_key" ON "Professor"("name");

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
