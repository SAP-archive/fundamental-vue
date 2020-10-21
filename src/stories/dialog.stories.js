import storiesFor from '../util/stories-for'

const stories = storiesFor('dialog')

export default { title: 'Dialog' }

export const defaultDialog = stories('default')
export const fullscreen = stories('fullscreen-modal')
export const nested = stories('nested-modals')
