import ActionBar from "./action-bar.vue";
import ActionBarTitle from "./action-bar-title.vue";
import ActionBarHeader from "./action-bar-header.vue";
import ActionBarActions from "./action-bar-actions.vue";
import ActionBarBack from "./action-bar-back.vue";
import ActionBarDescription from "./action-bar-description.vue";
import { pluginify } from "./../../util";
export default pluginify(
  ActionBar,
  ActionBarTitle,
  ActionBarHeader,
  ActionBarActions,
  ActionBarBack,
  ActionBarDescription
);
export { default as ActionBar } from "./action-bar.vue";
export { default as ActionBarTitle } from "./action-bar-title.vue";
export { default as ActionBarHeader } from "./action-bar-header.vue";
export { default as ActionBarActions } from "./action-bar-actions.vue";
export { default as ActionBarBack } from "./action-bar-back.vue";
export { default as ActionBarDescription } from "./action-bar-description.vue";
