import { ClassesTemplate, ClassResponse, Day } from "@custom-types/class.types"
import { getDate, getIsLate } from "@utils/dateFormat"

const getType = (type: string) => (type === "LECTURE" ? "Лекция" : "Практика")

const formatClass = (item: ClassResponse, day: Day) => {
  const type = getType(item.type)

  return {
    id: item.id,
    subject: item.name,
    professor: item.professor.name,
    location: item.location,
    timeStart: item.timeStart,
    timeEnd: item.timeEnd,
    index: item.index,
    type: type,
    weeks: item.weeks,
  }
}

export const formatClasses = (classesInput: ClassResponse[], week: number | undefined) => {
  let result: ClassesTemplate = {
    schedule: {
      MONDAY: {
        day: "Понедельник",
        dayShort: "ПН",
        classes: []
      },
      TUESDAY: {
        day: "Вторник",
        dayShort: "ВТ",
        classes: []
      },
      WEDNESDAY: {
        day: "Среда",
        dayShort: "СР",
        classes: []
      },
      THURSDAY: {
        day: "Четверг",
        dayShort: "ЧТ",
        classes: []
      },
      FRIDAY: {
        day: "Пятница",
        dayShort: "ПТ",
        classes: []
      },
      SATURDAY: {
        day: "Суббота",
        dayShort: "СБ",
        classes: []
      }
    }
  }

  classesInput.forEach((item) => {
    const day = <Day>item.day
    result.schedule[day].classes.push(formatClass(item, day))
  })

  return result
}
