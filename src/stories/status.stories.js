import storiesFor from '../util/stories-for'

const stories = storiesFor('status')

export default { title: 'status' }

export const defaultStatus = stories('default')
export const customIcon = stories('status-custom-icon')
export const icon = stories('status-icon')
