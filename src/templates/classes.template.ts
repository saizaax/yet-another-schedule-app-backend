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
    isLate: isLate
  }
}

export const formatClasses = (classesInput: ClassResponse[], week: number) => {
  let result: ClassesTemplate = {
    schedule: {
      MONDAY: {
        day: "Понедельник",
        dayShort: "ПН",
        date: getDate(week, Day.MONDAY),
        classes: []
      },
      TUESDAY: {
        day: "Вторник",
        dayShort: "ВТ",
        date: getDate(week, Day.TUESDAY),
        classes: []
      },
      WEDNESDAY: {
        day: "Среда",
        dayShort: "СР",
        date: getDate(week, Day.WEDNESDAY),
        classes: []
      },
      THURSDAY: {
        day: "Четверг",
        dayShort: "ЧТ",
        date: getDate(week, Day.THURSDAY),
        classes: []
      },
      FRIDAY: {
        day: "Пятница",
        dayShort: "ПТ",
        date: getDate(week, Day.FRIDAY),
        classes: []
      },
      SATURDAY: {
        day: "Суббота",
        dayShort: "СБ",
        date: getDate(week, Day.SATURDAY),
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
