import storiesFor from '../util/stories-for'

const stories = storiesFor('counter')

export default { title: 'counter' }

export const defaultCounter = stories('default')
export const notificationCenter = stories('notification-center')
export const withParagraph = stories('with-paragraph')
