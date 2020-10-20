import storiesFor from '../util/stories-for'

const stories = storiesFor('alert')

export default { title: 'alert' }

export const defaultAlert = stories('default')
export const error = stories('error')
export const information = stories('information')
export const success = stories('success')
export const vmodel = stories('vmodel')
export const warning = stories('warning')
