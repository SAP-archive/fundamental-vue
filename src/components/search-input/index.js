import SearchInput from './search-input.vue'
import CompletionList from './completion-list.vue'
import pluginify from './../../util/pluginify'
export default pluginify(SearchInput, CompletionList)
export { SearchInput }
