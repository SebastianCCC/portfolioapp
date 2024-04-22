import { DIFFERENCE_IN_WEEKS_FOR_NEWS_LABEL } from '../config'
import { differenceInWeeks as diff } from 'date-fns'

export const isDifferenceInWeeks = (date: Date | string | number | null) => {
  if (date === null) return null
  return diff(new Date(), new Date(date)) <= DIFFERENCE_IN_WEEKS_FOR_NEWS_LABEL
}
