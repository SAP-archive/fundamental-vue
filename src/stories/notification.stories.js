import storiesFor from '../util/stories-for'

const stories = storiesFor('notification')

export default { title: 'Notification' }

export const defaultNotification = stories('default')
export const active = stories('active')
export const minimal = stories('minimal')
export const notifyApi = stories('notify')
export const sizes = stories('sizes')
export const types = stories('types')
