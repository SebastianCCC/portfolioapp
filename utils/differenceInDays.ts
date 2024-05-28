import { differenceInDays as diff } from 'date-fns'
import { DIFFERENCE_IN_DAYS_FOR_NEWS_LABEL } from '../config'

export const isDifferenceInDays = (date: Date | string | number | null) => {
  if (date === null) return null
  return diff(new Date(), new Date(date)) <= DIFFERENCE_IN_DAYS_FOR_NEWS_LABEL
}
