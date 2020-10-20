import storiesFor from '../util/stories-for'

const stories = storiesFor('search-input')

export default { title: 'search-input' }

export const defaultSearchInput = stories('default')
export const completions = stories('completions')
export const confirmOnTab = stories('confirm-on-tab')
