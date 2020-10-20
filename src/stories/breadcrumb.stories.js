import storiesFor from '../util/stories-for'

const stories = storiesFor('breadcrumb')

export default { title: 'breadcrumb' }

export const defaultBreadcrumb = stories('default')
export const withRouter = stories('router')
