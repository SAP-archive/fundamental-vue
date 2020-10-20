import storiesFor from '../util/stories-for'

const stories = storiesFor('button-group')

export default { title: 'button-group' }

export const defaultButtonGroup = stories('default')
export const compact = stories('groups-compact')
export const singleSelection = stories('groups-single-selection')
