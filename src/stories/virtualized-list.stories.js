import storiesFor from '../util/stories-for'

const stories = storiesFor('virtualized-list')

export default { title: 'virtualized-list' }

export const defaultList = stories('virtualized-list-default')
export const filtered = stories('virtualized-list-filter')
export const initialLoad = stories('virtualized-list-initial-load')
export const loadingMore = stories('virtualized-list-loading-more')
export const mutating = stories('virtualized-list-mutate')
export const reset = stories('virtualized-list-reset')
