export { default as ProductSwitcher } from './product-switcher.vue'
export { default as ProductSwitcherItem } from './item.vue'
export { default as ProductSwitcherIcon } from './icon.vue'
export { default as ProductSwitcherTitle } from './title.vue'
export { default as ProductSwitcherText } from './text.vue'

import ProductSwitcher from './product-switcher.vue'
import Item from './item.vue'
import Icon from './icon.vue'
import Title from './title.vue'
import Text from './text.vue'

import pluginify from './../../util/pluginify'

export default pluginify(ProductSwitcher, Item, Icon, Title, Text)
