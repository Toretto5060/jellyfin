
import * as dateFns from 'date-fns'

import { cs, de, enUS, es, fr, nb, nl, pl, ro, sk, sl, sv, ta, tr, vi, zhCN } from 'date-fns/locale'

export default (ctx, inject) => {
  const dateObj = {...dateFns}

  function parsedDate(date) {
    if (dateFns.parseISO) {
      return typeof date !== 'string' ? date : dateFns.parseISO(date)
    }
    return date
  }

  if (dateFns.format) {
    dateObj.format = (date, format, options) => {
      return dateFns.format(parsedDate(date), format || '', mergeOptions(options))
    }
  }

  if (dateFns.parse) {
    dateObj.parse = (dateString, formatString, backupDate, options) => {
      return dateFns.parse(dateString, formatString, backupDate, mergeOptions(options))
    }
  }

  const threeParams = [
    'differenceInCalendarWeeks',
    'formatDistance',
    'formatDistanceStrict',
    'formatRelative',
    'isSameWeek',
    'setDay',
    'setWeek',
    'setWeekYear'
  ].filter(value => Object.keys(dateFns).includes(value))

  for (const fn of threeParams) {
    dateObj[fn] = (param1, param2, options) => {
      return dateFns[fn](param1, param2, mergeOptions(options))
    }
  }

  const twoParams = [
    'eachWeekOfInterval',
    'endOfWeek',
    'formatDistanceToNow',
    'formatDistanceToNowStrict',
    'formatDuration',
    'getWeek',
    'getWeekOfMonth',
    'getWeeksInMonth',
    'getWeekYear',
    'isThisWeek',
    'lastDayOfWeek',
    'startOfWeek',
    'startOfWeekYear'
  ].filter(value => Object.keys(dateFns).includes(value))

  for (const fn of twoParams) {
    dateObj[fn] = (param, options) => {
      return dateFns[fn](param, mergeOptions(options))
    }
  }

  ctx.$dateFns = dateObj
  inject('dateFns', dateObj)
}

function mergeOptions(options) {
  const locales = []

  locales['cs'] = cs
locales['de'] = de
locales['enUS'] = enUS
locales['es'] = es
locales['fr'] = fr
locales['nb'] = nb
locales['nl'] = nl
locales['pl'] = pl
locales['ro'] = ro
locales['sk'] = sk
locales['sl'] = sl
locales['sv'] = sv
locales['ta'] = ta
locales['tr'] = tr
locales['vi'] = vi
locales['zhCN'] = zhCN

  options = { locale: 'enUS', ...options }

  if (options && typeof options.locale === 'string') {
    const locale = options.locale.replace(/[_-]/, '')
    if (locales[locale]) {
      options.locale = locales[locale]
    } else {
      console.warn(`[date-fns] locale '${options.locale}' not found.`)
    }
  }

  return options
}
