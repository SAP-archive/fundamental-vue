import pluginify from './../../util/pluginify'

import List from './list.vue'
import ListItem from './item.vue'
import ListItemCheckbox from './item-checkbox.vue'
import ListItemCheckboxLabel from './item-checkbox-label.vue'
import ListTitle from './title.vue'
import ListSecondary from './secondary.vue'
import ListHeader from './header.vue'
import ListFooter from './footer.vue'
import ListIcon from './icon.vue'

export default pluginify(
  List,
  ListItem,
  ListItemCheckbox,
  ListItemCheckboxLabel,
  ListTitle,
  ListSecondary,
  ListHeader,
  ListFooter,
  ListIcon
)

export {
  List,
  ListItem,
  ListItemCheckbox,
  ListItemCheckboxLabel,
  ListTitle,
  ListSecondary,
  ListHeader,
  ListFooter,
  ListIcon
}
