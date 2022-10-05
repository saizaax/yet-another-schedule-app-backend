import cron from "node-cron"
import { fetchSchedule } from "@parser/scheduleParser"

export const initScheduleAutoRefetch = () => {
  cron.schedule("0 4 * * *", () => {
    fetchSchedule()
  })
}
