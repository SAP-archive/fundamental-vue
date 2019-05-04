import SearchInput from "./SearchInput.vue";
import CompletionList from "./CompletionList.vue";
import { pluginify } from "./../../util";
export default pluginify(SearchInput, CompletionList);
export { SearchInput };
