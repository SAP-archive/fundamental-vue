import storiesFor from '../util/stories-for'

const stories = storiesFor('modal')

export default { title: 'modal' }

export const defaultModal = stories('default')
export const fullscreen = stories('fullscreen-modal')
export const nested = stories('nested-modals')
