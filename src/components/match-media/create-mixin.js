// @ts-check
import MediaQueryObserver from './media-query-observer'

/** @typedef {{[name: string]: string}} NamedQueries */
/** @typedef {import("vue").VueConstructor} VueCtor */
/**
 * @typedef {object} Options
 * @prop {VueCtor} Vue
 */

/**
 * @param {NamedQueries} namedQueries
 * @param {Options} options
 */
export default (namedQueries, { Vue }) => {
  const names = Object.keys(namedQueries)
  const mq = Vue.observable({})

  names.forEach(name => {
    Vue.set(mq, name, false)
  })

  Vue.set(mq, '$all', [])

  const entries = Object.entries(namedQueries)
  const matchingQueries = new Set()

  entries.forEach(([name, query]) => {
    const observer = new MediaQueryObserver(query, matches => {
      Vue.set(mq, name, matches)
      if (matches) {
        matchingQueries.add(name)
      } else {
        matchingQueries.delete(name)
      }
      const sortedMatchingQueries = Array.from(matchingQueries.values()).sort()
      Vue.set(mq, '$all', sortedMatchingQueries)
    })
    observer.startObservation()
  })

  return {
    beforeCreate() {
      this.$mq = mq
    },
    provide() {
      return {
        $mq: mq
      }
    }
  }
}
