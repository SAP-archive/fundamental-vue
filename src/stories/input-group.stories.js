import storiesFor from '../util/stories-for'

const stories = storiesFor('input-group')

export default { title: 'input-group' }

export const ButtonAddon = stories('input-group-slot-addon-button')
export const TextAddon = stories('input-group-slot-addon-text')
export const IconAddon = stories('input-group-slot-addon-icon')
export const Compact = stories('input-group-compact')
