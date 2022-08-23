import moment from "moment"
import { Day } from "@custom-types/class.types"

const FORMAT = "DD-MM-YYYY"

const SEMESTER_START = moment("01.09.2022", FORMAT)
const SEMESTER_END = moment("29.12.2022", FORMAT)

const formatISODay = (day: Day) => {
  const days = {
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6
  }

  return days[day]
}

export const getWeeksNumber = () => {
  return SEMESTER_END.diff(SEMESTER_START, "week") + 1
}

export const getCurrentWeek = () => {
  return moment().diff(SEMESTER_START, "week") + 1
}

export const getDate = (week: number, day: Day) => {
  return moment(SEMESTER_START)
    .add(week - 1, "weeks")
    .isoWeekday(formatISODay(day))
    .format("DD.MM.YYYY")
}

export const getIsLate = (date: string, time: string) => {
  const today = moment()
  const target = moment(`${date}, ${time}`, "DD.MM.YYYY, hh:mm")

  return today.diff(target, "minute") > 0 ? true : false
}
