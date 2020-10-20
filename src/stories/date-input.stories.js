import storiesFor from '../util/stories-for'

const stories = storiesFor('Date Input')

export default { title: 'Date Input' }

export const defaultDateInput = stories('date-input-default')
export const rangeDateInput = stories('date-input-range')
export const dateInputWithVModel = stories('date-input-vmodel')
