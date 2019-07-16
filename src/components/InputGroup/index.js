import InputGroup from "./InputGroup.vue";
import InputGroupSearch from "./InputGroupSearch.vue";
import InputGroupAddon from "./InputGroupAddon.vue";
import InputGroupButton from "./InputGroupButton.vue";
import InputGroupClearButton from "./InputGroupClearButton.vue";
import { pluginify } from "./../../util";
export default pluginify(
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupClearButton,
  InputGroupSearch
);
export { InputGroup, InputGroupAddon, InputGroupButton, InputGroupClearButton, InputGroupSearch };
