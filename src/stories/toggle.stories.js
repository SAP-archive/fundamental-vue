import storiesFor from '../util/stories-for'

const stories = storiesFor('toggle')

export default { title: 'toggle' }

export const defaultToggle = stories('default')
export const sized = stories('sizes')
export const vmodel = stories('v-model')
