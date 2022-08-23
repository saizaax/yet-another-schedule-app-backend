import { ClassesTemplate, ClassResponse, Day } from "@custom-types/class.types"
import { getDate, getIsLate } from "@utils/dateFormat"

const getType = (type: string) => (type === "LECTURE" ? "Лекция" : "Практика")

const formatClass = (item: ClassResponse, week: number, day: Day) => {
  const date = getDate(week, day)
  const isLate = getIsLate(date, item.timeEnd)
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
    date: date,
    isLate: isLate
  }
}

export const formatClasses = (classesInput: ClassResponse[], week: number) => {
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
    },
    week: {
      number: 0,
      classes: 0,
      lectures: 0,
      practices: 0,
      hours: 0,
      type: "Чётная"
    }
  }

  const number = week
  const classes = classesInput.length
  const lectures = classesInput.filter((item) => item.type === "LECTURE").length
  const practices = classesInput.filter(
    (item) => item.type === "PRACTICE"
  ).length
  const hours = classesInput.length * 1.5
  const type = week % 2 ? "Нечётная" : "Чётная"

  classesInput.forEach((item) => {
    const day = <Day>item.day
    result.schedule[day].classes.push(formatClass(item, week, day))
  })

  result.week = {
    number,
    classes,
    lectures,
    practices,
    hours,
    type
  }

  return result
}
